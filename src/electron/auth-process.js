const {BrowserWindow} = require('electron');
const authService = require('../Services/auth-service');
const createAppWindow = require('../electron/app-process');
const isDev = require('electron-is-dev');

let win = null;

function createAuthWindow() {
  destroyAuthWin();

  win = new BrowserWindow({
    width: 1000,
    height: 600,
    preload: __dirname + '/preload.js'
  });

  win.loadURL(authService.getAuthenticationURL()).catch(error => {
      console.log('ERROR: ', error)
  });

  if (isDev) {
    win.webContents.openDevTools({ mode: 'detach' });
  }

  const {session: {webRequest}} = win.webContents;

  const filter = {
    urls: [
      'http://localhost:3000'
    ]
  };

  webRequest.onBeforeRequest(filter, async ({url}) => {
    await authService.loadTokens(url);
    createAppWindow();
    return destroyAuthWin();
  });

  win.on('authenticated', () => {
    destroyAuthWin();
  });

  win.on('closed', () => {

    win = null;
  });
}

function destroyAuthWin() {
  if (!win) return;
  win.close();
  win = null;
}

function createLogoutWindow() {
  const logoutWindow = new BrowserWindow({
    show: false,
  });

  logoutWindow.loadURL(authService.getLogOutUrl());

  logoutWindow.on('ready-to-show', async () => {
    logoutWindow.close();
    await authService.logout();
  });
}

module.exports = {
  createAuthWindow,
  createLogoutWindow,
};