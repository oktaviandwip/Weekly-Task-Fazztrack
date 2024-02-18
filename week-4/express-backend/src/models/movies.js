const models = {}
const db = require('../configs/db')

//Get all the movies
models.getData = (page) => {
  if (!page) {
    return db.query('SELECT * FROM movies LIMIT 10')
  } else {
    const offset = (page - 1) * 10
    return db.query(`SELECT * FROM movies LIMIT 10 OFFSET $1`, [offset])
  }
}

//Sort the movies
models.sortData = (sortby, order) => {
  return db.query(`SELECT * FROM movies ORDER BY ${sortby} ${order}`)
}

//Search the movies
models.searchData = (name, page) => {
  const searchName = `%${name}%`
  if (!page) {
    return db.query(`SELECT * FROM movies WHERE movie_name ILIKE $1 LIMIT 10`, [searchName])
  } else {
    const offset = (page - 1) * 10
    return db.query(`SELECT * FROM movies WHERE movie_name ILIKE $1 LIMIT 10 OFFSET ${offset}`, [searchName])
  }
}

//Add a movie
models.addData = (({ image, movie_name, category, director, casts, release_date, duration_hour, duration_minute, synopsis }) => {
  return db.query(
    `INSERT INTO movies (image, movie_name, category, director, casts, release_date,    
     duration_hour, duration_minute, synopsis) 
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`, 
     [image, movie_name, category, director, casts, release_date, duration_hour, duration_minute, synopsis])
})

//Update a movie
models.updateData = (({ image, movie_name, category, director, casts, release_date, duration_hour, duration_minute, synopsis }, id) => {
  return db.query(
    `UPDATE movies 
     SET image = $1, movie_name = $2, category = $3, director = $4, casts = $5, 
     release_date = $6, duration_hour = $7, duration_minute = $8, synopsis = $9, updated_at = NOW() 
     WHERE movie_id = $10`, 
     [image, movie_name, category, director, casts, release_date, duration_hour, duration_minute, synopsis, id])
})

//Delete a movie
models.deleteData = ( id ) => {
  return db.query(`DELETE FROM movies WHERE movie_id = $1`, [id])
}

module.exports = models