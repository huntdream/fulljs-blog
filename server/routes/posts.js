const express = require('express');
const router = express.Router();
const Post = require('../model/PostSchema');

router.get('/', function(req, res) {
  Post.find({}, function(err, post) {
    post.length ? res.json(post) : res.json({ error: 'no data find' });
  });
});

router.post('/', function(req, res) {});

module.exports = router;
