const express = require("express");
const app = express();
const cookieparser = require("cookie-parser");
var cors = require('cors')


require("dotenv/config")

const morgan = require("morgan");

const mongoose = require("mongoose");
app.use(cors());
app.use(cookieparser())
app.use(express.json())
app.use(morgan("dev"));

//router

const complientRoute = require("./route/complientRoute")
const loginRoute = require('./route/loginRoute')
app.use('/api',complientRoute);
app.use('/api',loginRoute);

app.listen(2500,(err)=>{
    if(err){throw err}
    console.log("Server Running ....!")
})

mongoose.connect(process.env.DB_URL,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(!err){console.log("DB connected successfully")}
    else{
        console.log("DB  not connected !!!")

    }
    })