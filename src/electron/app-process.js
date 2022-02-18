const path = require('path');
const { BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');

function createAppWindow() {
    // Create the browser window.
    
    const win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: false,
            preload: __dirname + '/preload.js',
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
}

module.exports = createAppWindow;