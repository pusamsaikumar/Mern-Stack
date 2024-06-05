const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const moongoose = require("mongoose");
const userRoute = require("./routes/User.js");

const app = express();
dotenv.config();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

//app.use(cors({origin:"*",credentials:true}));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials:true
  }));
// app.use(cors({
//     origin:"*",
//     credentials:true
// }));

app.use("/api/user",userRoute);


const PORT = "4008";
const url = process.env.MONGO_URI; 
//var mongooseURL = "mongodb+srv://pusamsaikumar302:GbvmYaCCrPtJDRFX@cluster0.texu64y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// dbconnect
moongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => console.log("MongoDB is connected successfully..."))
.catch((err) => console.log(`MongoDB is not connected. Error `,err))

app.listen(PORT,()=> {
    console.log(`My mongo server is running on port : ${PORT} `)
});