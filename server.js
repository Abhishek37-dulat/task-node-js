const express = require("express");
const dotenv = require('dotenv');
const cors = require('cors')


const Connection = require("./database/db.js");
const userRouter = require('./routes/userRoute.js')

dotenv.config();
const app = express();
const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;

app.use(express.json())
app.use(cors())


app.use('/',userRouter);


Connection(MONGODB_URL)
    app.listen(PORT,()=>{
        console.log("connected to PORT: ",PORT)
    })

