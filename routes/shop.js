const express = require('express')
const router = express.Router()

router.get('/',(req,res,next) => {
    console.log('this is home directory')
    res.send('<h1>Welcome Home Page !</h1>')
})
module.exports = router;