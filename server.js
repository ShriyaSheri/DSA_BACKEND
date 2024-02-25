import express from "express";
import "express-async-errors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import categoryroutes from "./Routes/categoryroutes.js"

dotenv.config();




mongoose.connect(process.env.MONGOURL)
.then(()=>{
    console.log('sedfghj');
})
.catch((err)=>{
    console.log(err);
})

const app=express()
app.use(bodyParser.json())

app.use('/category',categoryroutes)

const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`connected ${PORT}`)
}
)

