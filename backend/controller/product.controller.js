const Product = require("../model/product.model")

exports.store = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.json({ message: "Product Create Successfully", success: true, status: 200, product })
    }
    catch (err) {
        console.log(err)
    }
}

exports.index = async (req, res) => {
    try {
        const products = await Product.find()
        res.json({ message: "Product Fetched Successfully", sueccess: true, status: 200, products })
    }
    catch (err) {
        console.log(err)
    }
}

exports.get = async (req, res) => {
    try {
        const {id}=req.params;
        const product=await Product.findOne({_id:id})
        res.json({ message: "Product Fetched Successfully",success:true,status:200,product })
    }
    catch (err) {
        console.log(err)
    }
}

exports.destroy = async (req, res) => {
    try {
        const {id}=req.params;
        const product=await Product.findOneAndDelete({_id:id})
        res.json({ message: "Product Deleted Successfully",success:true })
    }
    catch (err) {
        console.log(err)
    }
}

exports.update = async (req, res) => {
    try {
        const {id}=req.params;
        const product=await Product.findOneAndUpdate({_id:id},req.body,{new:true})
        if(!product){
            return res.json({message:"Product not found"})
        }
        res.json({ message: "Product Updated Successfully",success:true,status:200,product})
    }
    catch (err) {
        console.log(err)
    }
}



