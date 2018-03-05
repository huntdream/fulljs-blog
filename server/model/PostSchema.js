const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: String,
  author: String,
  link: { type: String, unique: true },
  category: { type: String, default: 'Default' },
  content: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
