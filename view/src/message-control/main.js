const { ipcMain } = require('electron');
// const sqlite3 = require('sqlite3');

// import http from 'http'

// http.createServer(function (req, res) {
//     console.log(req)
//     res.end("Hello from server started by Electron app!");
// }).listen(3000)

// vue electron build invoke
// https://github.com/nklayman/vue-cli-plugin-electron-builder/issues/76

// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()

const path = require('path')
// const router = jsonServer.router(path.join(__dirname, 'db.json'))



const isBuild = process.env.NODE_ENV === 'production'
const pathToDbFile = path.join(
  isBuild ? __dirname : __static,
  '../src/db.json',
);



const router = jsonServer.router(pathToDbFile)

// console.log(__static)
console.log(pathToDbFile)
// console.clear()
// console.log(router)
// const router = jsonServer.router('../../db.json')
const middlewares = jsonServer.defaults()


// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})

server.use(middlewares)
server.use(router)

// console.log(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})

// server.post(

// On receive a POST request...
ipcMain.on('asynchronous-message', (event, arg) => {


// Send GET request to http server on localhost:3000
// async function addPost(data) {
//     const response = await axios
//       .post("/api/posts", data)
//       .catch((error) => console.log);
  
//     console.log(response);
//   }
    // console.log(server.all)








    console.log(arg); // prints "ping"
    if (arg === 'ping') event.reply('asynchronous-reply', 'pong!');
    else event.reply('asynchronous-reply', 'please, send me ping.');
});

// const database = new sqlite3.Database('./public/db.db', (err) => {
//     if (err) console.error('Database opening error: ', err);
// });

// ipcMain.on('asynchronous-message', (event, arg) => {
//     const sql = arg;
//     // console.log(event)
//     database.all(sql, (err, rows) => {
//         event.reply('asynchronous-reply', (err && err.message) || rows);
//     });
// });