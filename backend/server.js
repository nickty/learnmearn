const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()


const app = express()


//db
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false})
.then(()=>{
    console.log('DB connected')
})


app.get('/', (req, res) => {
    res.status(200).end("Hello")
})

app.get('/contact', (req, res) => {
    res.status(200).end("Hello")
})

const port = process.env.PORT || 8000

app.listen(`${port}`, () => console.log(`Server is running on port ${port}`))