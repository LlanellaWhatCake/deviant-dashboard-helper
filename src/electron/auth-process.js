const { app, BrowserWindow } = require('electron');
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

  console.log('where are we going', authService.getAuthenticationURL())
  win.loadURL(authService.getAuthenticationURL()).then(res => {
    let url = new URL(win.webContents.getURL());
    let urlParamsObj = new URLSearchParams(url.search);
    let code = urlParamsObj.get('code');


    // console.log('WHAT IN THE WORLD', code, urlParamsObj.get('code'), urlParamsObj);

    // if (code) {
    //   console.log('were finished loading from dA', code);
    //   authService.loadTokens('http://localhost:3000', code).then(() => {
    //     console.log('did it', code);
    //     createAppWindow();
    //     destroyAuthWin();
    //   }).catch(err => {
    //     console.log('ERROR', err)
    //   });
    // }


  }).catch(error => {
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
    let url = new URL(win.webContents.getURL());
    let urlParamsObj = new URLSearchParams(url.search);
    let code = urlParamsObj.get('code');

    // console.log('WHAT IN THE WORLD', code, urlParamsObj.get('code'), urlParamsObj);

    // let currentURL = win.webContents.getURL();
    // let urlPieces = currentURL.split('code=');
    // let code = urlPieces[1];

    if (code) {
    authService.loadTokens('http://localhost:3000', code).then(() => {
      console.log('did it', code);
      createAppWindow();
      destroyAuthWin();
    }).catch(err => {
      // console.log('ERROR', err)
    });
  }

    console.log(newUrl, code);
    let oldUrl = win.webContents.getURL();
    // if (oldUrl.includes('deviantart.com') && oldUrl.includes('authorize_app') && !code) {
    //   setTimeout(() => { //deviantArt doesn't include the code in the initial authorization by the user, so have to 
    //     //request again.  I'm not proud of this lol
    //     win.loadURL(authService.getAuthenticationURL()).then(res => {
    //       console.log('timed out, is now: ', newUrl);
    //       let currentURL = win.webContents.getURL();
    //       let urlPieces = currentURL.split('code=');
    //       let code = urlPieces[1];
    //       authService.loadTokens('http://localhost:3000', code).then(() => {
    //         console.log('did it', code);
    //         createAppWindow();
    //         destroyAuthWin();
    //       }).catch(err => {
    //         // console.log('ERROR', err)
    //       });
    //     });

    //   }, 500);

    // }
    // More complex code to handle tokens goes here
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