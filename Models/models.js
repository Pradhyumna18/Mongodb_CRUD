const mongoose = require('mongoose')
const data = new mongoose.Schema({
    name: String,
    phn: Number,
    projectId: Number

})
const Data = mongoose.model('crud2', data)

module.exports = Data;