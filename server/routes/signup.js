const express = require('express')
const router = express.Router()
const passport = require('passport')

router.post('/', function(req, res, next) {
  return passport.authenticate('local-signup', function(err) {
    if (err) {
      if (err.code === 11000) {
        return res.status(409).json({
          success: false,
          message: 'Username already exists'
        })
      }

      return res.status(400).json({
        success: false,
        message: 'Could not process the form.'
      })
    }
    console.log(req.body)

    return res.status(200).json({
      success: true,
      message: 'successful!'
    })
  })(req, res, next)
})

module.exports = router
