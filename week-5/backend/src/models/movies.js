const models = {};
const db = require("../configs/db");

//Delete the existing table
models.deleteTable = async () =>
  await db.query(
    `DROP TABLE IF EXISTS users, movies, schedules, bookings, genres, movies_genres, tickets`
  );

//Create the existing table
models.createTable = async () =>
  await db.query(
    `CREATE TABLE movies (
      movie_id SERIAL PRIMARY KEY,
      image TEXT NOT NULL,
      movie_name VARCHAR(255) NOT NULL,
      category VARCHAR(255)[] NOT NULL,
      director VARCHAR(255) NOT NULL,
      casts VARCHAR(255)[] NOT NULL,
      release_date DATE NOT NULL,
      duration_hour INT NOT NULL,
      duration_minute INT NOT NULL,
      synopsis TEXT NOT NULL,
      recommended BOOLEAN DEFAULT false,
      detail TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP
    )`
  );

//Insert the existing data
models.saveData = async ({
  image,
  movie_name,
  category,
  director,
  casts,
  release_date,
  duration_hour,
  duration_minute,
  synopsis,
  recommended,
}) => {
  // Convert to lowercase
  let lowercaseString = movie_name.toLowerCase();

  // Remove spaces and unwanted characters
  let sanitizedString = "";
  for (let i = 0; i < lowercaseString.length; i++) {
    const char = lowercaseString[i];
    if (
      (char >= "a" && char <= "z") ||
      (char >= "0" && char <= "9") ||
      char === " "
    ) {
      sanitizedString += char;
    }
  }

  // Replace spaces with dashes
  let urlFriendlyString = sanitizedString.split(" ").join("-");

  // Add file extension
  let detail = `/${urlFriendlyString}.html`;

  await db.query(
    `INSERT INTO movies (image, movie_name, category, director, casts, release_date,    
    duration_hour, duration_minute, synopsis, recommended, detail) 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
    [
      image,
      movie_name,
      category,
      director,
      casts,
      release_date,
      duration_hour,
      duration_minute,
      synopsis,
      recommended,
      detail,
    ]
  );
};

//Get all the movies
models.getData = async (page) => {
  try {
    const offset = (page - 1) * 12;
    const { rows } = await db.query(
      `SELECT * FROM movies ORDER BY movie_id DESC LIMIT 12 OFFSET $1`,
      [offset]
    );
    let {
      rows: [{ count }],
    } = await db.query("SELECT COUNT(*) FROM movies");
    count = parseInt(count);

    const meta = {
      next:
        count <= 12 ? null : page === Math.ceil(count / 12) ? null : page + 1,
      prev: page === 1 ? null : page - 1,
      total: count,
    };

    return { rows, meta };
  } catch (err) {
    throw err;
  }
};

//Sort the movies
models.sortData = async (sortby, order, page) => {
  try {
    const offset = (page - 1) * 12;
    const { rows } = await db.query(
      `SELECT * FROM movies ORDER BY ${sortby} ${order} LIMIT 12 OFFSET $1`,
      [offset]
    );
    let {
      rows: [{ count }],
    } = await db.query("SELECT COUNT(*) FROM movies");
    count = parseInt(count);

    const meta = {
      next:
        count <= 12 ? null : page === Math.ceil(count / 12) ? null : page + 1,
      prev: page === 1 ? null : page - 1,
      total: count,
    };

    return { rows, meta };
  } catch (err) {
    throw err;
  }
};

//Search the movies
models.searchData = async (name, page) => {
  try {
    const searchName = `%${name}%`;
    const offset = (page - 1) * 12;
    const { rows } = await db.query(
      `SELECT * FROM movies WHERE movie_name ILIKE $1 LIMIT 12 OFFSET $2`,
      [searchName, offset]
    );
    let {
      rows: [{ count }],
    } = await db.query(
      `SELECT COUNT(*) FROM movies WHERE movie_name ILIKE $1`,
      [searchName]
    );
    count = parseInt(count);

    const meta = {
      next:
        count <= 10 ? null : page === Math.ceil(count / 12) ? null : page + 1,
      prev: page === 1 ? null : page - 1,
      total: count,
    };

    return { rows, meta };
  } catch (err) {
    throw err;
  }
};

//Add a movie
models.addData = async ({
  image,
  movie_name,
  category,
  director,
  casts,
  release_date,
  duration_hour,
  duration_minute,
  synopsis,
  recommended,
}) => {
  // Convert to lowercase
  let lowercaseString = movie_name.toLowerCase();

  // Remove spaces and unwanted characters
  let sanitizedString = "";
  for (let i = 0; i < lowercaseString.length; i++) {
    const char = lowercaseString[i];
    if (
      (char >= "a" && char <= "z") ||
      (char >= "0" && char <= "9") ||
      char === " "
    ) {
      sanitizedString += char;
    }
  }

  // Replace spaces with dashes
  let urlFriendlyString = sanitizedString.split(" ").join("-");

  // Add file extension
  let detail = `/${urlFriendlyString}.html`;

  return await db.query(
    `INSERT INTO movies (image, movie_name, category, director, casts, release_date,    
     duration_hour, duration_minute, synopsis, recommended, detail) 
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
     RETURNING movie_id`,
    [
      image,
      movie_name,
      category,
      director,
      casts,
      release_date,
      duration_hour,
      duration_minute,
      synopsis,
      recommended,
      detail,
    ]
  );
};

//Update a movie
models.updateData = async (
  {
    image,
    movie_name,
    category,
    director,
    casts,
    release_date,
    duration_hour,
    duration_minute,
    synopsis,
    recommended,
  },
  id
) => {
  // Convert to lowercase
  let lowercaseString = movie_name.toLowerCase();

  // Remove spaces and unwanted characters
  let sanitizedString = "";
  for (let i = 0; i < lowercaseString.length; i++) {
    const char = lowercaseString[i];
    if (
      (char >= "a" && char <= "z") ||
      (char >= "0" && char <= "9") ||
      char === " "
    ) {
      sanitizedString += char;
    }
  }

  // Replace spaces with dashes
  let urlFriendlyString = sanitizedString.split(" ").join("-");

  // Add file extension
  let detail = `/${urlFriendlyString}.html`;

  const {
    rows: [{ image: prevImage }],
  } = await db.query(`SELECT image FROM movies WHERE movie_id = $1`, [id]);

  const { rows } = await db.query(
    `UPDATE movies
     SET image = $1, movie_name = $2, category = $3, director = $4, casts = $5, 
     release_date = $6, duration_hour = $7, duration_minute = $8, synopsis = $9, recommended = $10, detail = $11, updated_at = NOW() 
     WHERE movie_id = $12
     RETURNING movie_id`,
    [
      image,
      movie_name,
      category,
      director,
      casts,
      release_date,
      duration_hour,
      duration_minute,
      synopsis,
      recommended,
      detail,
      id,
    ]
  );

  return { image: prevImage, movie_id: rows[0].movie_id };
};

//Delete a movie
models.deleteData = async (id) => {
  const {
    rows: [{ image: prevImage }],
  } = await db.query(`SELECT image FROM movies WHERE movie_id = $1`, [id]);

  const { rows } = await db.query(
    `DELETE FROM movies WHERE movie_id = $1
     RETURNING movie_id`,
    [id]
  );

  return { image: prevImage, movie_id: rows[0].movie_id };
};

module.exports = models;
