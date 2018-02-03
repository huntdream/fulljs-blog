const express = require('express');
const router = express.Router();
const connection = require('../model/connection');

router.get('/', function (req, res) {
    connection.query('select post_title,post_name,post_date from posts', function (err, results, field) {
        if (err) throw err;
        res.send(results);
    })
});

router.post('/', function (req, res) {
    req.body.post_date = new Date();
    console.log(req.body);
    connection.query('insert into posts set ?', req.body, function (err, results, field) {
        if (err) throw err;
        res.send(results);
    })
})

module.exports = router;