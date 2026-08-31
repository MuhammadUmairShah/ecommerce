import mongoose from "mongoose";


let brandschema=mongoose.Schema({
    title:String,
    price:Number,
    stock:Number,
    imageurl:String,
    description:String,

})



let brandmodel= await mongoose.model('brands',brandschema)

export default brandmodel