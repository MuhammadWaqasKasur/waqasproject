const mongoose=require("mongoose")

const storeSchema=mongoose.Schema({
    title:{
        type:String
    },
    quantity:{
        type:String
    },
    price:{
        type:String
    },
    item:{
        type:String
    }
})

module.exports=mongoose.model("store",storeSchema)