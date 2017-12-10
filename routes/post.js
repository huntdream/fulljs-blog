const express = require('express');
const router = express.Router();

router.get('/',function(req,res){
    res.end(`You performed a ${req.method} request`)
});

router.post('/',function (req, res) {
    res.end(`You performed a ${req.method} request`)
});

module.exports = router;