const path = require('path');
const { BrowserWindow, ipcMain } = require('electron');
const isDev = require('electron-is-dev');
const apiService = require('../Services/api-service');

function createAppWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: false,
            preload: path.join(__dirname, 'preload.js'),
            // worldSafeExecuteJavaScript: true,
            contextIsolation: true,
            enableRemoteModule: true,
        },
    });

    win.maximize();


    // and load the index.html of the app.
    // win.loadFile("index.html");
    win.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, '../build/index.html')}`
    );
    // Open the DevTools.
    if (isDev) {
        win.webContents.openDevTools({ mode: 'detach' });
    }


    /**
 * API CALLS
 */
ipcMain.on("logout", (event, args) => {
    console.log('LOGOUT');
    authService.logout().then(() => console.log("logged out successfully")).catch(err => console.log('error logging out', err));
  });
  
  ipcMain.on("getMessages", (event, args) => {
        apiService.getMessages().then(data => {
            console.log('got messages successfully!', data);
            win.webContents.send('getMessages', data);
        }).catch(error => {
            console.log("error getting messages!");
        });
    
    //eventually, y'know, user ipcMain to send the messages back to the renderer
  });
}

module.exports = createAppWindow;