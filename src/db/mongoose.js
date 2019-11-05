const mongoose = require('mongoose')
const port = require('../')

const mongodb_url = process.env.x
mongoose.connect(mongodb_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
