const express = require('express');
const router = express.Router();
const Post = require('../model/PostSchema');
const applyAuthCheck = require('../passport/auth-check');

router.get('/', function(req, res) {
  Post.find({}, function(err, posts) {
    if (err) {
      res.json({ success: false, error: err });
    }
    console.log(posts);
    posts.length
      ? res.json({ success: true, posts })
      : res.json({ success: false, error: 'NO DATA' });
  });
});

router.post('/', applyAuthCheck, function(req, res, next) {
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
