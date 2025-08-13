import mongoose from "mongoose";

const connectDB = async()=>{{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("✅ DataBase connected successfully")
    } catch (error) {
        console.log("MongoDB coonection error", error)
    }
}}

export default connectDB