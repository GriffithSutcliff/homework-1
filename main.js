const { app, BrowserWindow } = require('electron');
const axios = require('axios');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    const loadReactApp = async () => {
        try {
            await axios.get('http://localhost:3000');
            win.loadURL('http://localhost:3000');
        } catch (error) {
            setTimeout(loadReactApp, 50); //чтобы не загрузилось раньше реакта
        }
    };

    loadReactApp();
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});