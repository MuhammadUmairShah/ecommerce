import mongoose from 'mongoose'







async function dbconnection() {
    try {
        await mongoose.connect('mongodb://localhost:27017/ecom')
        console.log("Connection Successful")

    } catch (error) {
     console.log("SOme thing Went wrong")
    }
}

export default dbconnection