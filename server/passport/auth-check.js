const jwt = require('jsonwebtoken')
const User = require('mongoose').model('User')
const secret = require('../config').jwtSecret

module.exports = (req, res, next) => {
  console.log(req.headers.authorization)
  if (!req.headers.authorization) {
    return res
      .status(401)
      .json({ success: false, message: 'You should log in to post' })
      .end()
  }

  const token = req.headers.authorization.split(' ')[1]

  return jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .json({ success: false, message: err.message })
        .end()
    }

    const userId = decoded.sub

    return User.findById(userId, (userErr, user) => {
      if (userErr || !user) {
        return res.status(401).end()
      }
      req.user = user
      return next()
    })
  })
}
