const express = require('express');
const router = express.Router();
const Post = require('../model/PostSchema');

router.get('/', function(req, res) {
  Post.find({}, function(err, post) {
    post.length ? res.json(post) : res.json({ error: 'no data find' });
  });
});

router.post('/', function(req, res, next) {
  const newPost = new Post(req.body);

  newPost.save(err => {
    if (err) {
      if (err.code === 11000) {
        return res.json({ sucess: false, message: 'Link already exists' });
      }
    }
    return res.status(200).json({ success: true, message: 'successful' });
  });
});

module.exports = router;
