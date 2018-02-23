const User = require('../model/UserSchema');
const PassportLocalStrategy = require('passport-local').Strategy;

/**
 * Return the Passport Local Strategy object.
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
    };
    const newUser = new User(userData);

    newUser.save(err => {
      if (err) {
        return done(err);
      }
      return done(null);
    });
  }
);
