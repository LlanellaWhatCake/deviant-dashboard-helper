const path = require('path');
const { BrowserWindow, ipcMain } = require('electron');
const isDev = require('electron-is-dev');
const apiService = require('../Services/api-service');
const authService = require('../Services/auth-service');

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
        console.log('logging out...');
        authService.logout().then(() => console.log("logged out successfully")).catch(err => console.log('error logging out', err));
    });

    ipcMain.on("getMessages", (event, args) => {
        apiService.getMessagesProcessed().then(notifs => {
            win.webContents.send('getMessages', notifs);
        })
    });
}

module.exports = createAppWindow;