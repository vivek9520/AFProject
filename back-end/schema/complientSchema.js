const mongoose = require("mongoose");

const ComplientSchema = mongoose.Schema({
    provider:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    nic:{
        type:String,
        required:true
    },
    imobile:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("Complients",ComplientSchema);