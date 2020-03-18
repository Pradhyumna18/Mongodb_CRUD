const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const port = 5000
const routes = require('./Routes/routes')

app.use(bodyParser.json())
app.use('/', routes)

mongoose.connect('mongodb://localhost:27017/practice', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})


app.listen(port, () => {
    console.log(`listening to ${port}`)

})
module.exports = app;
//mongodb://localhost:27017/practice