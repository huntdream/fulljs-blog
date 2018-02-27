const express = require('express');
const router = express.Router();
const Post = require('../model/PostSchema');
const applyAuthCheck = require('../passport/auth-check');

router.get('/', function(req, res, next) {
  Post.find({})
    .sort({ date: -1 })
    .exec(function(err, posts) {
      if (err) {
        res.json({ success: false, error: err });
      }
      console.log(posts);
      posts.length
        ? res.json({ success: true, posts })
        : res.json({ success: false, error: 'NO DATA' });
    });
});

router.get('/:link', function(req, res, next) {
  let { link } = req.params;
  Post.findOne({ link: link }, function(err, post) {
    if (err) {
      res.status(500).json({ sucess: false, message: err.message });
    }
    return res.status(200).json({ success: true, post });
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
