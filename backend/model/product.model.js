import mongoose from "mongoose";


let productschema=mongoose.Schema({
    title:String,
    price:Number,
    stock:Number,
    imageurl:String,
    description:String,

})



let productmodel= await mongoose.model('products',productschema)

export default productmodel