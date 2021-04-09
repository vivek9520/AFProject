const { Router } = require("express");
const express = require("express");
const route = express.Router();
const Complients = require('./../schema/complientSchema')


//complient post
 route.post("/complient",async(req,res)=>{
     try{
        const postComplient = new Complients({
            provider:req.body.provider,
            name:req.body.name,
            mobile:req.body.mobile,
            address:req.body.address,
            email:req.body.email,
            message:req.body.message,
            nic:req.body.nic,
            imobile:req.body.imobile,
            status:"Request"
        });
        saveComplinent = await postComplient.save();
        res.status(200).json(saveComplinent);
    }
    catch(err){
        console.log(err)
    }
 });

 //get all complient

 route.get("/complient", async(req,res)=>{
    try{
        const allComplients = await Complients.find();
        res.status(200).json(allComplients)
    }catch(err){
        console.log(err)
    }
 });

  //getbyID complient

  route.get("/complient/:id", async(req,res)=>{
    try{
        const getById = await Complients.findById(req.params.id);
        res.status(200).json(getById)
    }catch(err){
        console.log(err)
    }
 });

 //Update complient

 route.put("/complient/:id", async(req,res)=>{
    try{
        const updateComplient = await Complients.updateOne({_id:req.params.id},
            {$set:
                {name:req.body.name,
                mobile:req.body.mobile,
                provider:req.body.provider,
                email:req.body.email,
                address:req.body.address,
                message:req.body.message,
                nic:req.body.nic,
                imobile:req.body.imobile,
                status:req.body.status
                }})
        res.status(200).json(updateComplient)
    }catch(err){
        console.log(err)
    }
 });

 //Delete complient

 route.delete("/complient/:id", async(req,res)=>{
    try{
        const DeleteComplient = await Complients.remove({_id:req.params.id})
        res.status(200).json(DeleteComplient)
    }catch(err){
        console.log(err)
    }
 });

 //get provider
 route.get("/provider/:pro", async(req,res)=>{
    try{
        const allComplients = await Complients.find({provider:req.params.pro});
        res.status(200).json(allComplients)
    }catch(err){
        console.log(err)
    }
 });


 module.exports = route;