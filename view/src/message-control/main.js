const jsonServer = require('json-server')
const server = jsonServer.create()

const path = require('path')
const isBuild = process.env.NODE_ENV === 'production'
const pathToDbFile = path.join(__dirname, '../src/db.json') // PROD
const router = jsonServer.router(pathToDbFile)
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

server.listen(3000, () => {
  console.log('JSON Server is running ')
})