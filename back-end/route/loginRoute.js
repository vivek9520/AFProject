const { Router } = require("express");
const express = require("express");
const route = express.Router();
const {tokenGenerator} = require('./../token')

route.post('/login',(req,res)=>{
    if(req.body.username==="DIALOG" && req.body.password==="DIALOG" ){
        // const token = tokenGenerator(req.body.username)
        // res.cookie("jwt",token);
        res.status(200).json("dialog");
    }
    else if(req.body.username==="AIRTEL" && req.body.password==="AIRTEL"){
        // const token = tokenGenerator(req.body.username)
        // res.cookie("jwt",token);
        res.status(200).json("airtel");
    }
    else if(req.body.username==="MOBITEL" && req.body.password==="MOBITEL"){
        // const token = tokenGenerator(req.body.username)
        // res.cookie("jwt",token);
        res.status(200).json("mobitel");
    }
    else if(req.body.username==="HUTCH" && req.body.password==="HUTCH"){
        // const token = tokenGenerator(req.body.username)
        // res.cookie("jwt",token);
        res.status(200).json("hutch");
    }
    else {
        res.status(404).json("no");
    }
});
module.exports = route;