import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose, { connect } from "mongoose";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json())

connect.connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}