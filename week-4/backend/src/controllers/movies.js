const controllers = {}
const models = require('../models/movies')

//Get and sort all the movies
controllers.getOrSort = async (req, res) => {
  if (Object.keys(req.query).length === 0) {
    try {
      const { rows } = await models.getData()
      res.status(200).json(rows)
    } catch (err) {
      res.status(500).json({error: err.message})
    }
  } else if (Object.keys(req.query)[0] === 'page' ) {
    try {
      const page = parseInt(Object.values(req.query)[0])
      const { rows } = await models.getData(page)
      res.status(200).json(rows)
    } catch (err) {
      res.status(500).json({error: err.message})
    }
  } else {
    try {
      const {sortby, order} = req.query
      const { rows } = await models.sortData(sortby, order)
      res.status(200).json(rows)
    } catch (err) {
      res.status(500).json({error: err.message})
    }
  }
}

//Search the movies
controllers.search = async (req, res) => {
  if (Object.keys(req.query)[0] === 'page' ) {
    try {
      const page = parseInt(Object.values(req.query)[0])
      const { rows } = await models.searchData(req.params.name, page)
      res.status(200).json(rows)
    } catch (err) {
      res.status(500).json({error: err.message})
    }
  } else {
    try {
      const { rows } = await models.searchData(req.params.name)
      if (rows.length === 0) {
        res.send('Movie not found')
      } else {
        res.status(200).json(rows)
      }
    } catch (err) {
      res.status(500).json({error: err.message})
    }
  }
}

//Add a movie
controllers.add = async (req, res) => {
  try {
    const { rowCount } = await models.addData(req.body)
    if (rowCount === 1) {
      res.status(200).send('Movie has been successfully added')
    }
  } catch (err) {
    res.status(500).send(err.message)
  }
}

//Update a movie
controllers.update = async (req, res) => {
  try {
    const { rowCount } = await models.updateData(req.body, req.params.id)
    if (rowCount === 0) {
      res.send('Movie not found')
    } else {
      res.status(200).send('Movie has been successfully updated')
    }
  } catch (err) {
    res.status(500).send(err.message)
  }
}

//Delete a movie
controllers.delete = async (req, res) => {
  try {
    const { rowCount } = await models.deleteData(req.params.id)
    if (rowCount === 0) {
      res.send('Movie not found')
    } else {
      res.status(200).send('Movie has been successfully deleted')
    }
  } catch (err) {
    res.status(500).send(err.message)
  }
}

module.exports = controllers