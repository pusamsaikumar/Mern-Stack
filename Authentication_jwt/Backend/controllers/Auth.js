const RegisterModel = require("../models/Register");
const bcrypt =require("bcryptjs") ;
const jwt  = require("jsonwebtoken");

 const  register = async (req,res) =>{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(req.body.password,salt);
        const  newRegister = new RegisterModel({
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                username:req.body.username,
                email:req.body.email,
                password:hashPassword,
                // address:{
                //     street:req.body.address.street,
                //     city:req.body.address.city,
                //     state:req.body.address.state,
                //     zip:req.body.address.zip,
                //     country:req.body.address.country

                // },
                // phoneNumber:req.body.phoneNumber,
                // age:req.body.age,
                // gender:req.body.gender,
                // DateOfBirth:req.body.DateOfBirth


             
        });
        // const saveUserDetails = await RegisterModel.save();
        // res.status(200).json({
        //     message:"New student registered successfully.....",
        //     userDetails: saveUserDetails
        // })
        await RegisterModel.create(newRegister)
        .then(register => res.status(200).json({savedetails:register}))
        .catch(err => res.status(500).json({mesg:err.message}))

    }catch(err){
        res.status(500).json({message:err.message})
    }
}

 const login = async(req,res) =>{
    try{
        const user = await RegisterModel.findOne({username:req.body.username});
        if(!user) return res.status(404).json({Message:"User not found."});
        const isPasswordCorrect = await bcrypt.compare(req.body.password,user.password);
        if(!isPasswordCorrect) return res.status(400).json({message:"wrong passowrd or username."})
        const token = jwt.sign({id:user._id,isAdmin:user.isAdmin,userName:user.username},process.env.JWT_SECRET_KEY ,{expiresIn:"30m"});
    console.log("token : ",token);
      const {password,isAdmin , ...otherDetails} = user._doc;
        res.cookie("access_token",token,{
         
            httpOnly:false,
            expiresIn:30*60*1000,
            secure: true,
            sameSite: "none",
            
        }).
        status(200)
        .json({message:"User loggedIn successfully.....",user:{ otherDetails:{...otherDetails},isAdmin}})
    }catch(err){
        res.status(500).json(err)
    }
}

const logout = async(req,res,next)=>{
    return res.cookie("")
}

module.exports = {register,login}