// const { faBabyCarriage } = require("@fortawesome/free-solid-svg-icons");
const User = require("../model/user.model")
const bcrypt=require("bcryptjs")
var salt=bcrypt.genSaltSync(10)
var jwt = require('jsonwebtoken')
const JWT_SCRET = "absdtr"

exports.store = async (req, res) => {
    try {
        console.log(req.body)
        const hashedPassword=await bcrypt.hash(req.body.password,salt);
        req.body.password=hashedPassword;
        const user = await User.create(req.body)
        res.json({ message: "User Create Successfully", success: true, status: 200, user })
    }
    catch (err) {
        if(err.code == 11000){
            return res.status(403).json({message:"Email already exist"})
        }
        res.json({message:"Something went wrong",err})
    }
}

exports.login=async(req,res)=>{
try{
    const {email,password}=req.body;
    const user=await User.findOne({email:email})
    if(!user){
        return res.json({status:404,message:"User not found"})
    }
    const userFinded=await bcrypt.compare(password,user.password)
    if(userFinded){
        var token = jwt.sign({ user: user }, JWT_SCRET);

        return res.json({message:"Useer Longin Successfully",success:true,status:200, token})
    }
    else{
        return res.json({message:"Password Incorrect"})
    }
}
catch{
    
}
}

exports.index = async (req, res) => {
    try {
        const users = await User.find()
        res.json({ message: "User Fetched Successfully", sueccess: true, status: 200, users })
    }
    catch (err) {
        console.log(err)
    }
}

exports.get = async (req, res) => {
    try {
        const {id}=req.params;
        const user=await User.findOne({_id:id})
        if(!user){
            return res.json({message:"User not found"})
        }
        res.json({ message: "User Fetched Successfully",success:true,status:200,user })
    }
    catch (err) {
        console.log(err)
    }
}

exports.destroy = async (req, res) => {
    try {
        const {id}=req.params;
        const user=await User.findOneAndDelete({_id:id})
        if(!user){
            return res.json({message:"User not found"})
        }
        res.json({ message: "User Deleted Successfully",success:true })
    }
    catch (err) {
        console.log(err)
    }
}

exports.update = async (req, res) => {
    try {
        const {id}=req.params;
        const user=await User.findOneAndUpdate({_id:id},req.body,{new:true})
        if(!user){
            return res.json({message:"User not found"})
        }
        res.json({ message: "User Updated Successfully",success:true,status:200,user})
    }
    catch (err) {
        console.log(err)
    }
}


exports.forgot=async(req,res)=>{
    try{
const {email}=req.body;
const user=await User.findOne({email:email})

if(!user){
    return res.json({message:"User not found"})
}
const code = Math.floor(100000 + Math.random() * 900000);
user.code=code;
user.save();
return res.json({success:true,message:"Email Send Successfully"})
    }
    catch(err){
        console.log(err)
    }
}

exports.verify=async(req,res)=>{
    try{
const {email,code}=req.body;
const user=await User.findOne({email:email})
if(!user){
    return res.json({message:"User not Found",success:false})
}
if(user.code == code){
    return res.json({message:"User code Verified",success:true})
}
else{
    return res.json({message:"Code not matched"})
}
    }
    catch(err){
        console.log(err);
        
    }
}