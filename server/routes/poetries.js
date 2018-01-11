const express = require('express');
const router = express.Router();

const connection = require('../model/connection');

router.get('/', function (req, res) {
    let page = parseInt(req.query.page);
    console.log(typeof page);
    connection.query('select content,title,poets.name from poetries inner join poets on poetries.poet_id=poets.id where name=? limit ?,?', ['李白', (page - 1) * 30, 30], function (err, results, field) {
        if (err) throw err;
        console.log(results);
        let data = {
            success: results.length,
            poetries: results
        };
        res.json(data);
        console.log(data);
    })
})

module.exports = router;