import express  from'express'
let route=express.Router()


route.listen(7000,async function() {
    console.log("the backend is working")
})