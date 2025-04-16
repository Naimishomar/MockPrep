const jwt = require('jsonwebtoken');
require('dotenv').config()

exports.isAuthenticated = async(req,res,next)=>{
    try {
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({message: 'No token, authorization denied', success: false});
        }
        const decode = await jwt.verify(token, process.env.JWT_SECRET);
        if(!decode){
            return res.status(401).json({message: 'Token is not valid, authorization denied', success: false});
        }
        req.id = decode.userId;
        next();
    } catch (error) {
        console.log(error);   
    }
}