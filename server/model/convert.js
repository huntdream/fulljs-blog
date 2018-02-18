const connection = require('./connection');
const Poet = require('./poetSchema');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/blog');
const sql =
  'select poetries.id,poetries.content,poetries.title,poets.name from poetries  inner join poets where poetries.poet_id=poets.id';
connection.query(sql, function(err, results, fields) {
  results.map(item => {
    poet = new Poet(item);
    poet.save(item);
  });
});
