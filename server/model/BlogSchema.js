const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: String,
  author: String,
  body: String,
  comments: [{ body: String, data: Date }],
  data: { type: Date, default: Date.now },
  hiddent: Boolean,
  meta: {
    vote: Number,
    favs: Number
  }
});
