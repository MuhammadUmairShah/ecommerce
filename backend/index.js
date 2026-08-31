import express from 'express'
import dbconnection from './database/dbconnection.js'
import cors from 'cors'
import productroute from './routes/product.route.js'
import brandroute from './routes/brand.route.js'


let app=express()
dbconnection()


app.use(cors())
app.use(express.json())


app.use("/product",productroute)
app.use("/brand",brandroute)





app.listen(4000,async function(){
    console.log('Working Good')
})