import mongoose from 'mongoose'


let BrandSchema=mongoose.Schema({

 title: String,
    Imageurl: String,
    stock: Number,
    category: String,
    

})
let Brandmodel=mongoose.model("Brand",BrandSchema)

export default Brandmodel