const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 500,
        height: 500,
        alwaysOnTop: true,
        frame: true, // set to false for frameless window
        resizable: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    win.loadFile('morsecode.html'); // your Morse widget HTML
}

app.whenReady().then(createWindow);
