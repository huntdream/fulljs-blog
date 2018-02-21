const express = require('express');
const router = express.Router();
const User = require('../model/UserSchema');
const bcrypt = require('bcrypt');

const saltRounds = 10;

router.post('/', function(req, res, next) {
  passport.authenticate('local-signup');
});

module.exports = router;
