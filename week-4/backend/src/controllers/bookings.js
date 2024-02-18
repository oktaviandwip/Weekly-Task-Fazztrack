const controllers = {};
const models = require("../models/bookings");

//Get all the bookings
controllers.get = async (req, res) => {
  if (Object.keys(req.query).length === 0) {
    try {
      const { rows } = await models.getData();
      res.status(200).json(rows);
    } catch (err) {
      res.status(500).json({error: err.message});
    }
  } else {
    try {
      const page = parseInt(Object.values(req.query)[0])
      const { rows } = await models.getData(page)
      res.status(200).json(rows)
    } catch (err) {
      res.status(500).json({error: err.message})
    }
  }
};

//Add a booking
controllers.add = async (req, res) => {
  try {
    const { rowCount } = await models.addData(req.body)
    if (rowCount === 1) {
      res.status(200).send('Booking has been successfully added')
    }
  } catch (err) {
    res.status(500).send(err.message)
  }
}

//Update a booking
controllers.update = async (req, res) => {
  try {
    const { rowCount } = await models.updateData(req.body, req.params.id)
    if (rowCount === 0) {
      res.send('Booking not found')
    } else {
      res.status(200).send('Booking has been successfully updated')
    }
  } catch (err) {
    res.status(500).send(err.message)
  }
}

//Delete a booking
controllers.delete = async (req, res) => {
  try {
    const { rowCount } = await models.deleteData(req.params.id)
    if (rowCount === 0) {
      res.send('Booking not found')
    } else {
      res.status(200).send('Booking has been successfully deleted')
    }
  } catch (err) {
    res.status(500).send(err.message)
  }
}

module.exports = controllers;
