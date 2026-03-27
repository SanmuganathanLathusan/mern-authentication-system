import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // Parses incoming JSON payloads
app.use(express.urlencoded({ extended: false })); // Parses urlencoded payloads
app.use(cors()); // Enables cross-origin requests

// Routes
app.use("/api/auth", authRoutes);

// Base route for sanity check
app.get("/", (req, res) => res.send("MERN Authentication System API is running..."));

// Error handling middleware for catching and formatting errors cleanly
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    success: false,
    message: err.message,
    // Provide stack trace only if not in production
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
