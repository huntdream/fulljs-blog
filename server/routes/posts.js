const express = require('express');
const router = express.Router();
const connection = require('../model/connection');

router.get('/', function (req, res) {
    connection.query('select post_title,post_name,post_date from posts', function (err, results, field) {
        if (err) throw err;
        res.send(results[0]);
    })
});

module.exports = router;