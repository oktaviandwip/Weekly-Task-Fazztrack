const express = require('express')
const routers = express.Router()

const moviesService = require('./movies')
const schedulesService = require('./schedules')
const bookingsService = require('./bookings')

routers.use('/movies', moviesService)
routers.use('/schedules', schedulesService)
routers.use('/bookings', bookingsService)

module.exports = routers