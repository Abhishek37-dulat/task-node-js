const express = require("express");
const dotenv = require('dotenv');
// import cors from 'cors'


// import { Connection } from "./database/db.js";
// import userRouter from './routes/userRoute.js'

dotenv.config();
const app = express();
const PORT = process.env.PORT;
// const MONGODB_URL = process.env.MONGODB_URL;

app.use(express.json())
// app.use(cors())

app.get('/',(req,res)=>{
    res.send("helllo..")
})

// app.use('/',userRouter);


// Connection(MONGODB_URL).then(()=>{
    app.listen(PORT,()=>{
        console.log("connected to PORT: ",PORT)
    })
// })

