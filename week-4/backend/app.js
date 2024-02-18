const express = require('express')
const server = express()
const PORT = 8000
const db = require('./src/configs/db')
const routers = require('./src/routers/index')

server.use(express.json()) 
server.use(routers)

db.connect()
  .then(() => {
    server.listen(PORT, () => {
      console.log('Server running on port', PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  })