const mongoose = require("mongoose");

const Db = "mongodb+srv://spark:spark@123@cluster0.dcgi8.mongodb.net/Spark?retryWrites=true&w=majority"
 
mongoose.connect(Db,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log("no connection");
})
