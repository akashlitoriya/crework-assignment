const User = require('../models/User');
const bcrypt = require('bcryptjs');
const uuid = require('uuid4');

const signupController = async(req,res)=>{
    try{
        const {name, email, password} = req.body;
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({message:"User already exists"});
        }

        const hashedPassword = await bcrypt.hash(password,12);
        const user_id = uuid();
        const user = new User({name,email,password:hashedPassword,user_id});
        await user.save();
        res.status(201).json({message:"User created successfully"});
    }catch(err){
        res.status(500).json({message:"Internal server error"});
    }
};

module.exports = signupController;