const express = require('express')
const router = express.Router()
const Post = require('../model/PostSchema')

router.get('/', (req, res, next) => {
  Post.aggregate(
    [
      {
        $group: {
          _id: '$category',
          count: {
            $sum: 1
          },
          posts: {
            $push: {
              title: '$title',
              link: '$link'
            }
          }
        }
      }
    ],
    (err, result) => {
      if (err) {
        res.json({
          success: false,
          message: err.message
        })
      }
      res.json({
        success: true,
        data: result
      })
    }
  )
})

router.get('/:category', (req, res, next) => {
  const category = req.params.category
  Post.find({ category })
    .select({ category: 1, date: 1, title: 1, link: 1, _id: 0 })
    .exec((err, result) => {
      if (err) {
        res.json({
          success: false,
          message: err.message
        })
      }

      res.send({
        success: true,
        data: result
      })
    })
})

module.exports = router
