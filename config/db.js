import mongoose from "mongoose";
import dotenv from "dotenv";

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB connected");
    } catch(err) {
        console.error("Failed to connect to MongoDB", err.message)
        process.exit(1)
    }
}

export default connectDB;