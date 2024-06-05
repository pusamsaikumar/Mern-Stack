
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/User");

const register = async (req,res,next) => {
        try{

            const {fullName,email,password} = req.body;
            if(!fullName || !email || !password) {
              return res.status(401).json({
                Message:"Invalid user input data. Please fill all input fields."
              })
            }
             var user = await UserModel.findOne({email});
            if(user) {
              return res.status(401).json({
                Message:'This email is already used.'
              })
            }
             


            const salt = bcrypt.genSaltSync(10);
            const hashPassword = bcrypt.hashSync(req.body.password,salt);
             const newUser = new UserModel({
                fullName:req.body.fullName,
                email:req.body.email,
                password:hashPassword
             })
             
          await UserModel.create(newUser)
          .then((user) => {
            return res.status(201).json({
                Message:"User registered successfully.....",
                user:user
            })
          })
        }catch(err){    
            return res.status(500).json({Message:err.Message})
        }
}

const login = async (req,res,next) => {
  try{
        if(!req.body.email || !req.body.password) {
            return res.status(401).json({Message:"Invalid user data."})
        }
        var user = await UserModel.findOne({email:req.body.email});
        if(!user){
          return res.status(401).json({Message:"Invalid email or password!."})
        }
        var isCorrectPassword = await bcrypt.compare(req.body.password,user.password);
        if(!isCorrectPassword){
          return res.status(401).json({Message:"Invalid email or password."})
        }
        var token = jwt.sign({id:user._id,fullName:user.fullName,email:user.email},process.env.JWT_SECRET_KEY,{expiresIn:"1h"});
        const {password, ...otherDetails} = user._doc;
        return res.cookie("token",token,{
          httpOnly:false,
            expiresIn:60*60*1000,
           // secure: true,
           // sameSite: "none",
        }).status(200).json({
          Message:"User LoggedIn successfully....",
         User:{
            otherDetails:{...otherDetails}
          }
        });

  }catch(err){
    return res.status(500).json({Message:err.Message})
  }
}
const logout = async(req,res,next)=>{
  return res.cookie("token","",{
    expiresIn: new Date(Date.now()),
   // httpOnly:false,
   
   // secure: true,
   // sameSite: "none",
  }).status(200).json({"Message":"User Logged out successfully...."});
}
module.exports = {register,login,logout}