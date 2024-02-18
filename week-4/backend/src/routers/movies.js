const express = require('express')
const routers = express.Router()
const controllers = require('../controllers/movies')

routers.get('/', controllers.getOrSort)
routers.get('/:name', controllers.search)
routers.post('/', controllers.add)
routers.put('/:id', controllers.update)
routers.delete('/:id', controllers.delete)

module.exports = routers