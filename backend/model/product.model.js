const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    title:{
        type:String
    },
    image:{
        type:String
    },
    price:{
        type:String
    },
    category:{
        type:String
    }
})

module.exports=mongoose.model("product",productSchema)