const User = require('../model/UserSchema')
const PassportLocalStrategy = require('passport-local').Strategy
const jwt = require('jsonwebtoken')
const secret = require('../config').jwtSecret

/**
 * the Passport Local Strategy Login object.
 */
module.exports = new PassportLocalStrategy(
  {
    usernameField: 'username',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
  },
  (req, username, password, done) => {
    const userData = {
      username: username,
      password: password
    }

    // find a user by username
    User.findOne({ username: userData.username }, function(err, user) {
      if (err) {
        return done(err)
      }
      if (!user) {
        const error = new Error('User not exists')
        error.name = 'UserNotExists'

        return done(error)
      }

      return user.comparePassword(userData.password, function(err, isMatch) {
        if (err) {
          return done(err)
        }

        if (!isMatch) {
          const error = new Error('Incorrect password')
          error.name = 'IncorrectCredentialsError'

          return done(error)
        }

        const payload = {
          sub: user._id
        }

        const token = jwt.sign(payload, secret)
        return done(null, token, user.username)
      })
    })
  }
)
