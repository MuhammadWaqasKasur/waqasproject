const Store = require("../model/store.model")

exports.store = async (req, res) => {
    try {
        const store = await Store.create(req.body)
        res.json({ message: "Store Create Successfully", success: true, status: 200, store })
    }
    catch (err) {
        console.log(err)
    }
}

exports.index = async (req, res) => {
    try {
        const store = await Store.find()
        res.json({ message: "Store Fetched Successfully", sueccess: true, status: 200, store })
    }
    catch (err) {
        console.log(err)
    }
}

exports.get = async (req, res) => {
    try {
        const {id}=req.params;
        const store=await Store.findOne({_id:id})
        res.json({ message: "Store Fetched Successfully",success:true,status:200,store })
    }
    catch (err) {
        console.log(err)
    }
}

exports.destroy = async (req, res) => {
    try {
        const {id}=req.params;
        const store=await Store.findOneAndDelete({_id:id})
        res.json({ message: "Store Deleted Successfully",success:true })
    }
    catch (err) {
        console.log(err)
    }
}

exports.update = async (req, res) => {
    try {
        const {id}=req.params;
        const store=await Store.findOneAndUpdate({_id:id},req.body,{new:true})
        if(!store){
            return res.json({message:"Store not found"})
        }
        res.json({ message: "Store Updated Successfully",success:true,status:200,store})
    }
    catch (err) {
        console.log(err)
    }
}


