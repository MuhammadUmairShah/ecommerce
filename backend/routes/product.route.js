import express from 'express'
import productmodel from '../model/product.model.js'

let route=express.Router()


route.post('/addproduct',async function(req,res){
    console.log(req.body)
    await productmodel.create(req.body)
    return res.json({success:true,message:"Created Sucessfully"})
})



route.get('/allproducts', async function(req,res){

    let products=await productmodel.find()
    return res.json({success:true,message:"Created Sucessfully",products})
})














export default route