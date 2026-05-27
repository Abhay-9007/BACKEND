const userModel = require('../models/user.model')

const jwt = require('jsonwebtoken')

async function registerUser(req, res){
    const {name, email, password} = req.body 

    await userModel.findOne({
        email
    }).then((user) => {
        if(user){
            return res.status(400).send({
                message : "User already exists"
            })
        }
    })

    const user = await userModel.create({
        name, email, password
    })

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET)

    res.cookie('token', token)

    res.status(201).send({
        message : "user created successfully",
        user
    })

}

module.exports = {registerUser}
