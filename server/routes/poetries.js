const express = require('express');
const router = express.Router();

const connection = require('../model/connection');

router.get('/', function (req, res) {
    connection.query('select content,title,poets.name from poetries inner join poets on poetries.poet_id=poets.id where name=? limit 30', ['李白'], function (err, results, field) {
        if (err) throw err;

        res.json(results);
    })
})

module.exports = router;