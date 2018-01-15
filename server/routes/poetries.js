const express = require('express');
const router = express.Router();

const connection = require('../model/connection');

router.get('/', function (req, res) {
    let page = parseInt(req.query.page);
    console.log(-1 == false);
    try {
        connection.query('select content,title,poets.name from poetries inner join poets on poetries.poet_id=poets.id where name=? limit ?,?', ['李白', (page - 1) * 30, 30], function (err, results, fields) {
            if (err) console.log(err);
            let data = {
                success: results.length,
                poetries: results
            };
            res.json(data);
        })
    }
    catch (err) {
        console.log(err);
    }
})

module.exports = router;