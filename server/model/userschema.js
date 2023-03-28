const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        // required:true
    },
    
    phone:{
        type:Number,
        // required:true
        
    },
    email:{
        type:String,
        // required:true
    },
    account:{
        type:Number,
        // required:true
    },
    amount:{
        type:Number,
        // required:true

    }
});

// now we need to create collection
const Adduser = new mongoose.model("Adduser", userSchema);

module.exports = Adduser;