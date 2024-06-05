const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const RegisterModel =require("./models/Register.js");
const dotenv = require("dotenv");
const authRoute = require("./routes/Auth.js");
const studentRoute = require("./routes/Student.js");



const app = express();

dotenv.config();

 
app.use(express.json());
app.use(cookieParser());
//app.use(cors({origin:"*",credentials:true}));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials:true
  }));

app.use("/api/auth",authRoute);
app.use("/api/student",studentRoute);
//app.use(cors());
const PORT = "2024";
var moongooseUrl = "mongodb://localhost:27017/students";
// connect to mongodb
mongoose.connect(moongooseUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(() => console.log(
    "Monogodb is connected."
))
  .catch(err => console.log(`Mongodb is not connected. error : `,err));

app.listen(PORT,() => {
    console.log(`My mongo server is running on Port : ${PORT}`)
});
app.get("/",(req,res) => {
    var name = "Hi, This is saikumar .";
   res.send( { Name:name});
})
app.get("/about",(req,res) => {
    var text = "Hi, I'm working as React js Front-End Developer.";
    //res.send(text);
    res.send({about : text});
})
app.get("/Register",async (req,res) => {
    try{
            var studentList = await RegisterModel.find();
            res.status(200).json({message:"StudentList is available",data: studentList})
            
    }catch(err){
            res.status(500).json({message:err.message})
    }
});

// post: register
app.post("/Register",async (req,res) => {
    
})