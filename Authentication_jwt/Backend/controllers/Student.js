// import StudentModel from "../models/Student"
const StudentModel = require("../models/Student");
const bcrypt = require("bcryptjs");
const getAllStudents = async (req,res,next) => {
    try{
        var getStudentsList = await StudentModel.find();
       
        if(getStudentsList.length === 0){
            return res.status(404).json({Message:"No student data found."})
        } 
        else{
            //res.status(200).json({studentList : getStudentsList});
            res.status(200).json({Message : getStudentsList});

        }
        
      

    }catch(err){
      //  next(res.status(500).json({message:err.message}));
        next(err);
    }
}
const getStudentById = async (req,res,next) => {
    try {
        const getSingleStudentDetails = await StudentModel.findById({"_id":req.params.id});
        if (!getSingleStudentDetails) {
            return res.status(404).json({Message:"No student data found."});
        } 
        res.status(200).json({ Message: getSingleStudentDetails });
    } catch (err) {
        next(err);
    }
}

const createStudent = async (req,res,next) => {
     try{
           // var salt =  bcrypt.genSaltSync(10);
            //var hashPass =  bcrypt.hashSync(req.body.password,salt);
            var newStudent = new StudentModel({
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                username:req.body.username,
                email:req.body.email,
                //password:hashPass,
                address:{
                    street:req.body.address.street,
                    city:req.body.address.city,
                    state:req.body.address.state,
                    zip:req.body.address.zip,
                    country:req.body.address.country

                },
                phoneNumber:req.body.phoneNumber,
                age:req.body.age,
                gender:req.body.gender,
                DateOfBirth:req.body.DateOfBirth
            })
         
            await StudentModel.create(newStudent).then(studnet => res.status(200).json({message: "Student created successfully...",details:studnet}))
            .catch(err => res.status(500).json({message:err.message}));
            
     }catch(err){
        next(err)
     }
}
const updateStudent = async(req,res,next)=>{
    try{
             var getStudent = await StudentModel.findByIdAndUpdate(
                {"_id":req.params.id},
                {$set:req.body},
                {new:true}
                
             );
             if(!getStudent) return res.status(404).json("Student not found.");
             res.status(201).json({Message:"Student record updated successfully.....",Student:getStudent})

    }catch(err){
        next(err);
    }
}

const deleteStudent = async (req,res,next) => {
        try{
                var student = await StudentModel.findByIdAndDelete(req.params.id);
                    if(!student) {
                        return res.status(404).json("Student not found.");
                    }
                    res.status(200).json({message: "Student deleted successfully...."});
        }catch(err){
                res.status(500).josn({errMesg:err.message});
        }
}
module.exports = {getAllStudents,getStudentById,createStudent,updateStudent,deleteStudent};