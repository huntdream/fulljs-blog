const express = require('express');
const router = express.Router();

const connection = require('../model/connection');

router.get('/', function(req, res) {
  let page = parseInt(req.query.page);
  let poetry_id = parseInt(req.query.id);
  const sql = [
    {
      query:
        'select poetries.id,content,title,poets.name from poetries inner join poets on poetries.poet_id=poets.id where name=? limit ?,?',
      param: ['李白', (page - 1) * 30, 30]
    },
    {
      query: 'SELECT content,title FROM poetries where id=?',
      param: poetry_id
    }
  ];
  realSQL = req.query.page ? sql[0] : sql[1];
  console.log(realSQL);
  try {
    connection.query(realSQL.query, realSQL.param, function(
      err,
      results,
      fields
    ) {
      let data = {
        success: results.length,
        poetries: results
      };
      console.log(typeof results);

      res.json(data);
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
