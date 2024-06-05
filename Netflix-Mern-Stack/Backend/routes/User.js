const {register, login, logout} = require("../controllers/User.js");
const express = require("express");
const router = express.Router();

router.post("/register",register);
router.post("/login",login);
router.get("/logout",logout);
// router.get("/userData",(req,res,next)=>{
// return res.json({Message:'Hellow this is sai'});
// })
module.exports = router;