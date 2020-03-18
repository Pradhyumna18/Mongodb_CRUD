const Data = require('../Models/models')
async function createData(req, res) {
    try {
        const newData = await Data.create(req.body);
        res.status(200).json({
            status: "success",
            data: {
                tour: newData
            }
        })
    }
    catch (err) {
        res.status(400).json({
            status: "error"
        })
    }
}
async function getData(req, res) {
    try {
        const newData = await Data.find();
        res.status(200).json({
            status: "success",
            data: {
                data: newData
            }
        })
    }
    catch (err) {
        res.status(400).json({
            status: "error"
        })
    }
}
async function getOneData(req, res) {
    try {
        const newData = await Data.findOne({ projectId: req.params.id });
        res.status(200).json({
            status: "success",
            data: {
                data: newData
            }
        })
    }
    catch (err) {
        res.status(400).json({
            status: "error"
        })
    }
}
async function updateOneData(req, res) {
    try {
        const newData = await Data.updateOne({ projectId: req.params.id }, req.body);
        res.status(200).json({
            status: "success",
            data: {
                data: newData
            }
        })
    }
    catch (err) {
        res.status(400).json({
            status: "error"
        })
    }
}
async function deleteOneData(req, res) {
    try {
        const newData = await Data.deleteOne({ projectId: req.params.id });
        res.status(200).json({
            status: "success",
            data: {
                data: newData
            }
        })
    }
    catch (err) {
        res.status(400).json({
            status: "error"
        })
    }
}
module.exports = { createData, getData, getOneData, updateOneData, deleteOneData };