
const express = require('express')
const authRoutes = require('./routes/auth.routes')
const postRoutes = require('./routes/post.routes')
const cookieParser = require('cookie-parser')

const coo = cookieParser()

const app = express()
app.use(express.json())
app.use(coo)

app.use('/api/auth', authRoutes)

app.use('/api/posts', postRoutes)

// app.get('/', (req, res) => {
//     res.send("Hello World")
// })


module.exports = app


