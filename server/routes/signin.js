const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const passport = require('passport');

const User = require('../model/UserSchema');

router.post('/', function(req, res, next) {
  passport.authenticate('local-signin', function(err, token, userData) {
    if (err) {
      if (err.name === 'IncorrectCredentialsError') {
        return res.status(400).json({
          message: err.message
        });
      }

      return res.status(400).json({
        message: 'Could not process the form.'
      });
    }
    return res
      .status(200)
      .json({ message: 'Log in successful', token, user: userData });
  })(req, res, next);
});

module.exports = router;
