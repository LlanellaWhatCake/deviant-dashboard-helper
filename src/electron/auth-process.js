const {BrowserWindow} = require('electron');
const authService = require('../Services/auth-service');
const createAppWindow = require('../electron/app-process');
const isDev = require('electron-is-dev');
const path = require('path');

let win = null;

function createAuthWindow() {
  destroyAuthWin();

  console.log('ok, creating auth window')
  win = new BrowserWindow({
    nodeIntegration: false,
    preload: path.join(__dirname, 'preload.js'),
    // worldSafeExecuteJavaScript: true,
    contextIsolation: true,
    enableRemoteModule: true,
  });

  // win.maximize();

  win.loadURL(authService.getAuthenticationURL()).then(res => {
    let currentURL = win.webContents.getURL();
    let urlPieces = currentURL.split('code=');
    let code = urlPieces[1];
  
    console.log('were finished loading from dA', code);
    authService.loadTokens('http://localhost:3000', code).then(() => {
      console.log('did it', code);
      createAppWindow();
      destroyAuthWin();
    }).catch(err => {
      // console.log('ERROR', err)
    });
    
    
  }).catch(error => {
      console.log('ERROR: ', error);
      //later, load app anyway, you just can't access your stuff
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