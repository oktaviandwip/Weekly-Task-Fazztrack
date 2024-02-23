const response = require('../utils/response')
const jwt = require('jsonwebtoken')

module.exports = (role = 'user') => {
  return (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) {
      return response(res, 401, 'Silahkan login')
    }
  
    const token = authorization.replace('Bearer ', '')
    jwt.verify(token, process.env.JWT_KEY, (err, decode) => {
      if (err) {
        return response(res, 401, err.message)
      }
  
      if (role === 'admin' && decode.role === 'admin') {
        next()
      } else if (role === 'user' && (decode.role === 'admin' || decode.role === 'user')) {
        next()
      } else {
        return response(res, 401, `invalid role, required role: ${role}`)
      }
    })
  }
}
  