const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const saltRounds = 10
const noop = function() {}
const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: String,
  bio: { type: String, default: 'Laziness is my bio' },
  created_time: { type: Date, default: Date.now }
})

UserSchema.pre('save', function saveHook(next) {
  const user = this

  // proceed further only if the password is modified or the user is new
  if (!user.isModified('password')) return next()

  return bcrypt.genSalt(saltRounds, function(err, salt) {
    if (err) {
      return next(err)
    }

    return bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err)
      }

      user.password = hash

      return next()
    })
  })
})

UserSchema.methods.comparePassword = function comparePassword(
  password,
  callback
) {
  bcrypt.compare(password, this.password, callback)
}

const User = mongoose.model('User', UserSchema)
module.exports = User
