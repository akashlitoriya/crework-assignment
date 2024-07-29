const User = require('../models/User');
const jwt = require('jsonwebtoken');


const fetchUser = async(req, res,next) =>{
    try{
        const authToken = req.header('Authorization');
        if(!authToken){
            return res.status(401).json({message:"Authorization denied"});
        }
        const token = authToken.replace('Bearer ','');
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await User.findOne({user_id:decoded.userId});
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        const data = {
            id:user.user_id,
            email:user.email
        }
        req.user = data;
        next();
    }catch(err){
        res.status(500).json({message:"Internal server error"});
    }
}

module.exports = fetchUser;