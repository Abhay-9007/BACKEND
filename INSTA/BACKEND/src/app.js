// import { json } from 'express';
const cors = require('cors');
const express = require('express');
const multer = require('multer');
const uploadFile = require('./services/storage.service');

const app = express();
app.use(cors());

const upload = multer({storage: multer.memoryStorage()});
const postModel = require('./models/post.models');

app.get('/',(req, res) =>{
    res.send('hello world');
})

app.post('/create-post', upload.single('image'), async (req, res) =>{
    // res.send('Create Your post here');

    console.log(req.body);
    console.log(req.file);

    const result = await uploadFile(req.file.buffer);
    // console.log(result);

    const post = await postModel.create({
        image : result.url,
        caption : req.body.caption
    })
    return res.status(201).json({
        message : "Post created successfully", 
        post
    });
})


app.get('/posts', async (req, res) => {
    const posts = await postModel.find();
    
    return res.status(200).json({
        posts
    })
})


module.exports = app;

