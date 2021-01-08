const jsonServer = require('json-server')
const server = jsonServer.create()

server.all('*', function (req, res, next) {
  console.log('eh')
  if (req.method === 'GET') {
    next()
  } else {
    res.sendStatus(200)
  }
})
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

server.listen(process.env.PORT || 3000, () => {
  console.log('JSON Server is running')
})
