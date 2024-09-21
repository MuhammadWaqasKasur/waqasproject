const express=require("express")
const app=express();
const PORT=8082;
const connectDb=require("./config/db.config")
const userRoute=require("./routes/user.routes")
const productRoute=require("./routes/product.routes")
const cors=require("cors")
app.use(cors())
connectDb();
app.use(express.json())
app.use("/user",userRoute)
app.use("/product",productRoute)
app.use("/store",productRoute)



app.listen((PORT),()=>{
    console.log(`Server is running on ${PORT}`)
})