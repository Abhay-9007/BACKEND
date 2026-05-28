const express = require('express')
const authController = require('../controllers/auth.controller')

const router = express.Router()

router.post('/register', authController.registerUser)


// router.get('/test', (req, res) => {
//     console.log("Cookies" , req.cookies)
//     res.json({
//         message : "test route",
//         cookie : req.cookies
//     })
// })

module.exports = router 
