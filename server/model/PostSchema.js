const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: String,
  author: String,
  link: { type: String, unique: true },
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  meta: {
    vote: Number,
    favs: Number
  }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
