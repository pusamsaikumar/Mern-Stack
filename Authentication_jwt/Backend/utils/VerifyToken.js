
const jwt = require("jsonwebtoken");
const VerifyToken =  (req,res,next) => {
    // const token = req.cookies.access_token || req.headers.authorization;
   
    // if(!token) return res.send(401).json({message:"Your not authenticated!."});
    // jwt.verify(token,process.env.JWT_SECRET_KEY,(err,decoded) => {
    //     if(err) return res.send(403),json({Message:"Token is not valid!."});
    //     req.user = decoded;
    //     next();
    // })
    const token =  req.headers.authorization;
   
    if(!token) return res.send(401).json({message:"Your not authenticated!."});
    jwt.verify(token.split(' ')[1],process.env.JWT_SECRET_KEY,(err,decoded) => {
        if(err) return res.send(403),json({Message:"Token is not valid!."});
        req.user = decoded;
        next();
    })

}

const VerifyUser = (req,res,next) => {
    if(req.user.id == req.params.id || req.user.isAdmin){
        next();
    }else{
        next(res.status(403).json("You not authenticated!."))
    }
}

const verifyAdmin =(req,res,next) => {
    if(req.user.isAdmin){
        next();
    }else{
        next(res.status(403).json("You not authenticated!."));
    }
}

module.exports = {VerifyToken,VerifyUser,verifyAdmin};