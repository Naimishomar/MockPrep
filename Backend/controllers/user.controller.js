const User = require('../models/user.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const {customAlphabet} = require('nanoid');
const {sendMail} = require('../controllers/verification.controller.js');

const otpStore = {};
exports.userRegister = async (req, res) => {
    try {
    const { name, username, email, contactNumber, password, profilePicture, otp, step } = req.body;
    if (step === "send") {
      if (!name || !email) {
        return res.status(400).json({ message: "Name and Email required", success: false });
      }
      const alreadyExists = await User.findOne({$or: [{ email }, { username }, {contactNumber}]});
      if (alreadyExists) {
        return res.status(409).json({ message: "User already exists", success: false });
      }
      const nanoid = customAlphabet('0123456789', 6);
      const generatedOtp = nanoid();
      otpStore[email] = generatedOtp;
      await sendMail(email, generatedOtp, name);
      return res.status(200).json({ message: "OTP sent to your email", success: true });
    }

    // Step 2: Verify OTP and Register
    if (step === "register") {
      if (!name || !username || !email || !contactNumber || !password || !profilePicture || !otp) {
        return res.status(400).json({ message: "All fields are required", success: false });
      }

      if (otp !== otpStore[email]) {
        return res.status(401).json({ message: "Invalid OTP", success: false });
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = await User.create({
        name,
        username,
        email,
        contactNumber,
        password: hashedPassword,
        profilePicture,
      });
      delete otpStore[email];
      return res.status(200).json({ message: `Welcome ${user.name}, account created!`, success: true, user });
    }
    return res.status(400).json({ message: "Invalid step", success: false });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error", success: false });
  }
};



exports.userLogin = async(req,res)=>{
    try {
        const {username, contactNumber, password} = req.body;
        if(!username || !contactNumber || !password){
            return res.status(401).json({message: 'All fields are required', success: false});
        }
        else{
            const user = await User.findOne({$or:[{username},{contactNumber}]});
            if(!user){
                return res.status(401).json({message: 'No account found with this email', success: false});
            }
            isPasswordMatch = await bcrypt.compare(password, user.password);
            if(!isPasswordMatch){
                return res.status(401).json({message: 'Incorrect password', success: false});
            }
            const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: '5d'});
            const userDetails = {
                _id: user._id,
                name: user.name,
                username: user.username,
                email: user.email,
                contactNumber: user.contactNumber,
            }
            return res.cookie('token', token,{httpOnly: true, sameSite:'strict', maxAge: 5*24*60*60*1000})
            .json({message: `Logged in successfully, hello ${user.name}`, success: true, token, userDetails});
        }
    } catch (error) {
        console.log(error);  
    }
}

exports.logout = async(req,res)=>{
    try {
        return res.cookie("cookie","",{maxAge:0}).json({message:`Logged out successfully`, success: true});
    } catch (error) {
        console.log(error);    
    }
}