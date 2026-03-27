import mongoose from "mongoose";

// Define the User schema structure
const userSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: [true, "Please add a name"] 
    },
    email: { 
      type: String, 
      required: [true, "Please add an email"], 
      unique: true 
    },
    password: { 
      type: String, 
      required: [true, "Please add a password"] 
    },
  },
  { 
    // Automatically add createdAt and updatedAt timestamps
    timestamps: true 
  }
);

// Prevent mongoose from redefining the model if it already exists
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;