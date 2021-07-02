// const { ipcRenderer } = require('electron')

export default function send(message) {
    return new Promise((resolve) => {
        window.ipcRenderer.once('asynchronous-reply', (_, arg) => {
            resolve(arg);
        });
        window.ipcRenderer.send('asynchronous-message', message);
    });
}