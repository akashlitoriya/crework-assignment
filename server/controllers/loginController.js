const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const loginController = async(req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({message:"Invalid email or password"});
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(401).json({message:"Invalid email or password"});
        }
        const token = jwt.sign({email:user.email,userId:user.user_id},process.env.JWT_SECRET,{expiresIn:'5d'});
        res.status(200).json({token,userId:user.user_id});
    }
    catch(err){
        res.status(500).json({message:"Internal server error"});
    }
}

module.exports = loginController;