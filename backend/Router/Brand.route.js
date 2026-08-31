import express from 'express'
import Brandmodel from '../model/Brand.js'
let route=express.Router()



route.post("/brandcreate",async function (req,res) {
    let Branddata = await Brandmodel.create(req.body)
    return res.jes({ 
        success:true,
        msg:"the create api is working"
    })
})

route.get("/Brandfindapi",async function (req,res) {
   let allbrand= await Brandmodel.find()
    return res.json({success:true,msg:"the find api working"})
})


export default route