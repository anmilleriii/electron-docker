const { ipcMain } = require('electron');
const sqlite3 = require('sqlite3');

// ipcMain.on('asynchronous-message', (event, arg) => {
//     console.log(arg); // prints "ping"
//     if (arg === 'ping') event.reply('asynchronous-reply', 'pong!');
//     else event.reply('asynchronous-reply', 'please, send me ping.');
// });

const database = new sqlite3.Database('./public/db.db', (err) => {
    if (err) console.error('Database opening error: ', err);
});

ipcMain.on('asynchronous-message', (event, arg) => {
    const sql = arg;
    // console.log(event)
    database.all(sql, (err, rows) => {
        event.reply('asynchronous-reply', (err && err.message) || rows);
    });
});