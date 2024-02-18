const controllers = {};
const models = require("../models/schedules");

//Get all the schedules
controllers.get = async (req, res) => {
  if (Object.keys(req.query).length === 0) {
    try {
      const { rows } = await models.getData();
      res.status(200).json(rows);
    } catch (err) {
      res.status(500).send(err.message);
    }
  } else {
    try {
      const page = parseInt(Object.values(req.query)[0])
      const { rows } = await models.getData(page)
      res.status(200).json(rows)
    } catch (err) {
      res.status(500).send(err.message)
    }
  }
};

//Add a schedule
controllers.add = async (req, res) => {
  try {
    const { rowCount } = await models.addData(req.body)
    if (rowCount === 1) {
      res.status(200).send('Schedule has been successfully added')
    }
  } catch (err) {
    res.status(500).send(err.message)
  }
}

//Update a schedule
controllers.update = async (req, res) => {
  try {
    const { rowCount } = await models.updateData(req.body, req.params.id)
    if (rowCount === 0) {
      res.send('Schedule not found')
    } else {
      res.status(200).send('Schedule has been successfully updated')
    }
  } catch (err) {
    res.status(500).send(err.message)
  }
}

//Delete a schedule
controllers.delete = async (req, res) => {
  try {
    const { rowCount } = await models.deleteData(req.params.id)
    if (rowCount === 0) {
      res.send('Schedule not found')
    } else {
      res.status(200).send('Schedule has been successfully deleted')
    }
  } catch (err) {
    res.status(500).send(err.message)
  }
}

module.exports = controllers;
