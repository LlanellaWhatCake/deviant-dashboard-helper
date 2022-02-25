const { app, BrowserWindow } = require('electron');
const authService = require('../Services/auth-service');
const createAppWindow = require('../electron/app-process');
const isDev = require('electron-is-dev');
const path = require('path');

let win = null;

function createAuthWindow() {
  destroyAuthWin();

  win = new BrowserWindow({
    nodeIntegration: false,
    preload: path.join(__dirname, 'preload.js'),
    // worldSafeExecuteJavaScript: true,
    contextIsolation: true,
    enableRemoteModule: true,
  });

  win.loadURL(authService.getAuthenticationURL()).catch(error => {
    console.log('ERROR: ', error);
    //later, load app anyway, you just can't access your stuff
  });

  const { session: { webRequest } } = win.webContents;

  const filter = {
    urls: [
      'http://localhost:3000'
    ]
  };

  win.webContents.on('did-navigate', function (event, newUrl) {
    //dA should have givne you the code by now, so get the code from the url after auth
    //might need to do some error checking here, but any navigation in this auth window is checked if the code
    //is there, so hoping it's good for right now
    let url = new URL(win.webContents.getURL());
    let urlParamsObj = new URLSearchParams(url.search);
    let code = urlParamsObj.get('code');

    if (code) {
      authService.loadTokens('http://localhost:3000', code).then(() => {
        createAppWindow();
        destroyAuthWin();
      }).catch(err => {
        console.log('ERROR', err)
      });
    }

  });

  webRequest.onBeforeRequest(filter, async ({ url }) => {
    console.log('WEBREQUEST')
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