const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()

// const postController = require('../controllers/post.controller')

router.post('/create', (req, res) => {
    console.log(req.body)
    console.log(req.cookies)

    const token = req.cookies.token

    if(!token){
        return res.status(401).send({
            message : "Unauthorized"
        })
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decoded)
    }catch(err){
        return res.status(401).send({
            message : "Invalid Token"
        })
    }
    res.send("Post Created...")
})

module.exports = router
