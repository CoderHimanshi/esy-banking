const mongoose = require("mongoose");

const transferschema = new mongoose.Schema({
    tname:{
        type:String,
        // required:true
    },
    
    taccount:{
        type:Number,
        // required:true
    },
    tamount:{
        type:Number,
        // required:true

    }
});

// now we need to create collection
const Transferuser = new mongoose.model("Transferuser", transferschema);

module.exports = Transferuser;