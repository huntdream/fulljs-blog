const User = require('../model/UserSchema');
const PassportLocalStrategy = require('passport-local').Strategy;

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
    };

    // find a user by username
    return User.findOne({ username: userData.username }, (err, user) => {
      if (err) {
        return done(null, false, { message: err });
      }
      if (!user) {
        return done(null, false, { message: 'Username not found' });
      }

      // check if a hashed user's password is equal to a value saved in the database
      return user.comparePassword(userData.password, function(err, isMatch) {
        if (err) {
          return done(null, false, { message: err });
        }

        if (!isMatch) {
          return done(null, false, { message: 'Incorrect Password' });
        }

        return done(null, true, { message: 'Log in successful' });
      });
    });
  }
);
