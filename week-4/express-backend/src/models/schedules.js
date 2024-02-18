const models = {}
const db = require('../configs/db')

//Get all the schedules
models.getData = (page) => {
  if (!page) {
    return db.query('SELECT * FROM schedules LIMIT 10')
  } else {
    const offset = (page - 1) * 10
    return db.query(`SELECT * FROM schedules LIMIT 10 OFFSET ${offset}`)
  }
}

//Add a schedule
models.addData = (({ movie_id, price, cinema, location, date_start, date_end, time }) => {
  return db.query(
    `INSERT INTO schedules (movie_id, price, cinema, location, date_start, date_end, time)
     VALUES ($1, $2, $3, $4, $5, $6, $7)`, 
     [movie_id, price, cinema, location, date_start, date_end, time])
})

//Update a schedule
models.updateData = (({ movie_id, price, cinema, location, date_start, date_end, time }, id) => {
  return db.query(
    `UPDATE schedules 
     SET movie_id = $1, price = $2, cinema = $3, location = $4, date_start = $5, date_end = $6, time = $7, updated_at = NOW() WHERE schedule_id = $8`, 
     [movie_id, price, cinema, location, date_start, date_end, time, id])
})

//Delete a schedule
models.deleteData = ( id ) => {
  return db.query(`DELETE FROM schedules WHERE schedule_id = $1`, [id])
}

module.exports = models