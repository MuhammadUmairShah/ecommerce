import mongoose from "mongoose";

async function dbConectin() {

    try{

        await mongoose.connect("mongodb://localhost:27017/e-commerce")
        console.log("the database is runing")
    }
    catch (error){
        console.log(error,"the error from dbConectin ")
    }
}

export default dbConectin