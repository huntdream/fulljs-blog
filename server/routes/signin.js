const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../model/UserSchema');

router.post('/', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    console.log(req);
    if (err) {
      return next(err);
    }
    if (!user) {
      res.status(401).json({ message: info.message });
      return next(err);
    }
    console.log('hello');
    res.status(200).json({ message: info.message });
    return next();
  })(req, res, next);
});

module.exports = router;
