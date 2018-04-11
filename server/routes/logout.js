const express = require('express')
const router = express.Router()

router.post('/', (req, res, next) => {
  console.log('Requesting log out ')
  return res
    .status(200)
    .json({ success: true, message: 'successful logged out' })
})

module.exports = router
