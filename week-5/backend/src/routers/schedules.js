const express = require('express')
const routers = express.Router()
const controllers = require('../controllers/schedules')

routers.get('/', controllers.get)
routers.post('/', controllers.add)
routers.put('/:id', controllers.update)
routers.delete('/:id', controllers.delete)

module.exports = routers