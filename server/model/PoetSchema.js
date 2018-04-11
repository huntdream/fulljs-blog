const mongoose = require('mongoose')
const Schema = mongoose.Schema

const poetSchema = new Schema({
  id: Number,
  title: String,
  author: String,
  content: String
})

const Poet = mongoose.model('Poet', poetSchema)

module.exports = Poet
