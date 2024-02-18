const models = {}
const db = require('../configs/db')

//Get all the bookings
models.getData = (page) => {
  if (!page) {
    return db.query('SELECT * FROM bookings LIMIT 10')
  } else {
    const offset = (page - 1) * 10
    return db.query(`SELECT * FROM bookings LIMIT 10 OFFSET ${offset}`)
  }
}

//Add a booking
models.addData = (({ user_id, schedule_id, date, time, seat_choosed, total_payment, payment_method }) => {
  return db.query(
    `INSERT INTO bookings (user_id, schedule_id, date, time, seat_choosed, total_payment, payment_method) 
    VALUES ($1, $2, $3, $4, $5, $6, $7)`, 
    [user_id, schedule_id, date, time, seat_choosed, total_payment, payment_method])
})

//Update a booking
models.updateData = ({ user_id, schedule_id, date, time, seat_choosed, total_payment, payment_method }, id) => {
  return db.query(
    `UPDATE bookings 
     SET user_id = $1, schedule_id = $2, date = $3, time = $4, seat_choosed = $5, total_payment = $6, payment_method = $7, updated_at = NOW() 
     WHERE booking_id = $8`,
    [user_id, schedule_id, date, time, seat_choosed, total_payment, payment_method, id]
  );
};


//Delete a booking
models.deleteData = ( id ) => {
  return db.query(`DELETE FROM bookings WHERE booking_id = $1`, [id])
}

module.exports = models