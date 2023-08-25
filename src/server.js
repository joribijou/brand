import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from './routes/index';


const app=express();
dotenv.config()
app.use(bodyParser.json())
app.use("/api/v1",router)
const port=process.env.PORT
const db= process.env.DATABASE


// CONFIG OUR SERVER
    app.listen(port,()=>{
        console.log(`port running ........${port}`)
    })
// config our database
   mongoose.connect(db).then(()=>{
    console.log("database successfuly connected")
}).catch((err)=>{
    console.log(`database error....${err}`)
})


export default app