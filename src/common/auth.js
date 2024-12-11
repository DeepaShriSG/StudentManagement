import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const createToken = async (payload) => {
    const token = await jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
    return token;
  };
  
  // Decode a JWT token to extract payload
  const decodeToken = async (token) => {
    const payload = await jwt.decode(token);
    
    return payload;
  }

const validate = async (req,res,next) => {
    let token = req.headers.authorization.split(" ")[1];
    if(token){
    try {
            let payload = await jwt.decode(token);
            req.headers.userId = payload.id;

            let currentTime = Math.floor(Date.now()/100);
            if(currentTime < payload.exp){
                next();
            }else{
                res.status(401).send({
                    message:"Token expired"
                })
            }
         }
    } catch (error) {
        res.status(400).send({
            message:"Invalid Token"
        })
    }else{
        res.status(401).send({
            message:"Token not found"
        })
    }
}