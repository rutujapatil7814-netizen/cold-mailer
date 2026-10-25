import jwt from "jsonwebtoken"
import User from "../model/auth.model.js"

export const authMiddleware = async(req,res,next)=>{
    try{
        const authorization = req.headers.authorization
        if (!authorization?.startsWith("Bearer ")) {
            return res.status(401).json({ msg: "Authorization token required" })
        }

        const token = authorization.slice(7).trim()
        if (!token) {
            return res.status(401).json({ msg: "Authorization token required" })
        }

        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        const user = await User.findById(decoded.id)

        if(!user){
            return res.status(401).json({
                msg:"user not found"
            })
        }
        req.user = user
    next()
    }
    
    catch(err){
    if (err instanceof jwt.JsonWebTokenError || err instanceof jwt.TokenExpiredError) {
        return res.status(401).json({ msg: "Invalid or expired token" })
    }
    console.log("auth middleware error:",err.message)
    return res.status(500).json({ msg: "Internal server error" })
  
    }
}