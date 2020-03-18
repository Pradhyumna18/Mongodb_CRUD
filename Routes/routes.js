const controller=require('../controller/controller')
const express=require('express')
const router=express.Router();
router.post('/create',controller.createData)
router.get('/get',controller.getData)
router.get('/get/:id',controller.getOneData)
router.put('/update/:id',controller.updateOneData)
router.delete('/delete/:id',controller.deleteOneData)
module.exports=router;