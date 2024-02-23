const express = require('express')
const app = express()
const PORT = 8000
const db = require('./src/configs/db')
const routers = require('./src/routers/index')

app.use(express.json())
app.use('/image', express.static('./public/upload'))
app.use(routers)

db.connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log('Server running on port', PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  })