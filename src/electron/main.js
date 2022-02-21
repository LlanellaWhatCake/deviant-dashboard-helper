const { app, BrowserWindow, ipcMain } = require('electron');
const { createAuthWindow } = require('./auth-process');
const createAppWindow = require('./app-process');
const authService = require('../Services/auth-service');

const acceptedUrls = [
  "www.deviantart.com"
];

async function showWindow() {
  // try {
  //   await authService.refreshTokens().catch(err => {
  //     console.log('in the catch');
  //     createAuthWindow();
  //   });
  //   return createAppWindow();
  // } catch (err) {
  //   console.log('we caught the error in showWindow')
  //   createAuthWindow();
  // } finally { //you can still access the app, it just won't show anything from your account!
  //   console.log('in the finally in showWindow')
  // }

  try {
    await authService.refreshTokens().then(result => {
      return createAppWindow();
    }).catch(err => {
      return createAuthWindow();
    })
  } catch (err) {
    console.log('we caught the error in showWindow', err)
    // createAuthWindow();
  }
    

}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(showWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


// app.on('activate', () => {
//   if (BrowserWindow.getAllWindows().length === 0) {
//     createAppWindow();
//   }
// });

app.once('ready', () => {
  const handleRedirect = (e, url) => {
    e.preventDefault();
    if (url !== e.sender.getURL()) {
      
      shell.openExternal(url); //make a list of accepted urls to go to for security reasons
    }
  }
  const win = new BrowserWindow()
  // Instead bare webContents:
  win.webContents.on('will-navigate', handleRedirect)
  // win.loadURL('http://google.com')
})
