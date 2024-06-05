//import {login, register} from "../controllers/Auth.js";
const { model } = require("mongoose");
const { login, register } = require("../controllers/Auth.js");
const express = require("express") ;

const router = express.Router();
router.post("/register",register);
router.post("/login",login);
module.exports = router;