const controllers = {}
const models = require('../models/users')
const bcrypt = require('bcrypt')
const response = require('../utils/response')
const jwt = require('jsonwebtoken')

const genToken = (role) => {
  const payload = {
    role: role
  }

  const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '24h' })
  return token
}

controllers.login = async (req, res) => {
  try {
    const rows = await models.getPassword(req.body.username)
    if (rows.length === 0) {
      return response(res, 401, 'Username tidak terdaftar')
    }
    
    const password = req.body.password
    const hashPass = rows[0].password
    const check = await bcrypt.compare(password, hashPass)

    if (check) {
      const role = rows[0].role
      const tokenJwt = genToken(role)
      return response(res, 200, { token: tokenJwt })
    } else {
      return response(res, 401, 'Password salah')
    }
  } catch (err) {
    return response(res, 500, err.message)
  }
}

module.exports = controllers