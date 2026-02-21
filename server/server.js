import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import authRouter from './routes/authRoutes.js'

const app = express();
const port = process.env.PORT || 4000;
import connectDB from "./config/mongodb.js";

app.use(express.json());   // ✅ fixed here
app.use(cookieParser());
connectDB();
app.use(cors({ credentials: true }));

//Api End point
app.get("/" , (req,res) => res.send("API Workking "));
app.use('/api/auth',authRouter)
app.listen(port, () => console.log(`Server started on PORT: ${port}`));
