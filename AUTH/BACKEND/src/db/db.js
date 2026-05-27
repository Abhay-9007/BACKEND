const mongoose = require('mongoose')

async function connectDB(){
    await mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err))
}

module.exports = connectDB
