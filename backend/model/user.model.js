const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
        
    },
    password:{
        type:String
    },
    code:{
        type:Number
    }
})

module.exports=mongoose.model("user",userSchema)