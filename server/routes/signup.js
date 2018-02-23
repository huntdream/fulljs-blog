const express = require('express');
const router = express.Router();
const User = require('../model/UserSchema');
const passport = require('passport');

router.post('/', function(req, res, next) {
  passport.authenticate('local-signup', function(err, user, info) {
    if (err) {
      if (err.code === 11000) {
        // the 11000 Mongo code is for a duplication email error
        // the 409 HTTP status code is for conflict error
        res.status(409).json({
          message: 'Username already exsits'
        });
        return next(err);
      }

      res.status(400).json({
        message: 'Could not process the form.'
      });

      return next(err);
    }
    req.login(user, function(err) {
      if (err) throw err;
    });
    res.status(200).json({
      message: info.message
    });
    next();
  })(req, res, next);
});

module.exports = router;
