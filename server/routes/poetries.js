const express = require('express');
const router = express.Router();

const Poets = require('../model/PoetSchema');

router.get('/', function(req, res, next) {
  console.log('/poetries', req.session.id);
  let author = req.query;
  try {
    Poets.find(req.query)
      .limit(30)
      .exec(function(err, results) {
        if (err) throw err;
        results.length
          ? res.json(results)
          : res.json({ error: 'invalid parameters' });
      });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
