const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.all('*', function (req, res, next) {
  if (req.method === 'GET') {
    next()
  } else {
    res.sendStatus(200)
  }
})
server.listen(process.env.PORT || 3000, () => {
  console.log('JSON Server is running')
})
