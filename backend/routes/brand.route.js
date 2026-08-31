import express from 'express'
import productmodel from '../model/product.model.js'
import brandmodel from '../model/brand.model.js'

let route=express.Router()


route.post('/addbrands',async function(req,res){
    console.log(req.body)
    await brandmodel.create(req.body)
    return res.json({success:true,message:"Created Sucessfully"})
})



route.get('/allbrands', async function(req,res){

    let brands=await brandmodel.find()
    return res.json({success:true,message:"Created Sucessfully",brands})
})














export default route