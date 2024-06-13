// userModel.js
const mongoose = require('mongoose'); // Import Mongoose

// Define user schema
const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true }, // User name (required)
    email: { type: String, required: true, unique: true }, // User email (required, unique)
    password: { type: String, required: true }, // User password (required)
  },
  {
    timestamps: true, // Add createdAt and updatedAt timestamps
  }
);

// Create user model
const User = mongoose.model('User', userSchema);
module.exports = User; // Export the user model
