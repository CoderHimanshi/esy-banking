const express = require("express");
const app = express();
const port = process.env.PORT | 80;
require("./db/conn");

app.use(express.json());  // for telling the js that we use json file
app.use(express.urlencoded({extended : false}));

app.use(require("./router/auth"));

//requiring schema
const Adduser = require("./model/userschema");


// const middleware = (req,res,next)=>{
//     console.log("hello i am middleware");

// }
// middleware();

app.listen(port, () => {
    console.log(`server is running at port ${port}`);
})