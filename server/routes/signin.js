const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/', function(req, res, next) {
  return passport.authenticate('local-signin', function(err, token, userData) {
    if (err) {
      if (
        err.name === 'IncorrectCredentialsError' ||
        err.name === 'UserNotExists'
      ) {
        return res.status(400).json({
          success: false,
          message: err.message
        });
      }

      return res.status(400).json({
        success: false,
        message: 'Could not process the form.'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Log in successful',
      token,
      user: userData
    });
  })(req, res, next);
});

module.exports = router;
