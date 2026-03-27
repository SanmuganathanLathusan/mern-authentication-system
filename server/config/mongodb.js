import mongoose from "mongoose";

// Connect to MongoDB using the appropriate environment variable
const connectDB = async () => {
  try {
    // Prioritize MONGO_URI as per requirements, fallback to MONGO_URL
    const conn = await mongoose.connect(process.env.MONGO_URI || process.env.MONGO_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;