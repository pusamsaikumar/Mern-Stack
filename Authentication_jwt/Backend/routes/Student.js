
 // import { getAllStudents } from "../controllers/Student";
// import {VerifyToken} from "../utils/VerifyToken.js";
 const {VerifyToken} = require("../utils/VerifyToken.js");
const {getAllStudents,getStudentById,createStudent,updateStudent,deleteStudent} = require("../controllers/Student.js");
const express = require("express");
const router = express.Router();

router.get("/getAllStudents",VerifyToken,getAllStudents);
router.get("/getStudentById/:id",VerifyToken,getStudentById);
router.put("/updateStudent/:id",VerifyToken,updateStudent);
router.post("/createStudent",VerifyToken,createStudent);
router.delete("/deleteStudent/:id",VerifyToken,deleteStudent);

module.exports = router;
