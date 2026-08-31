import express from "express";
import cors from "cors";
import Brandroute from './Router/Brand.route.js'
import dbConectin from "./db/db-conection.js";

dbConectin();

let index = express();

index.use(express.json());
index.use(cors());


index.use("/brand", Brandroute);


index.listen(4000, () => {
  console.log("Server is running on port 4000");
});