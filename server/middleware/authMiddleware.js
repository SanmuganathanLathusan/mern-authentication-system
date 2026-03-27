import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

// Middleware to protect routes and extract user from JWT token
export const protect = async (req, res, next) => {
  let token;

  // Check for the token in the authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Extract the token from the "Bearer <token>" format
      token = req.headers.authorization.split(" ")[1];

      // Decode and verify the token using the secret key
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Fetch the user from the database and attach it to the request object (excluding the password)
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.error(error);
      return res.status(401).json({ success: false, message: "Not authorized, token failed" });
    }
  }

  // If no token was found
  if (!token) {
    return res.status(401).json({ success: false, message: "Not authorized, no token" });
  }
};
