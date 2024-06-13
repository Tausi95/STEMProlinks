// userController.js
const asyncHandler = require('express-async-handler'); // Import asyncHandler to handle async errors
const User = require('../models/userModel'); // Import the user model
const generateToken = require('../utils/generateToken'); // Import the token generation utility

// Register new user
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body; // Get name, email, and password from request body

  // Check if user already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists'); // If user exists, throw an error
  }

  // Create new user
  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    // If user creation is successful, send user info and token
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id), // Generate token for the user
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data'); // If user creation fails, throw an error
  }
});

// Authenticate user & get token
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body; // Get email and password from request body

  const user = await User.findOne({ email }); // Find user by email

  if (user && (await user.matchPassword(password))) {
    // If user exists and password matches, send user info and token
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id), // Generate token for the user
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password'); // If authentication fails, throw an error
  }
});

module.exports = { registerUser, authUser }; // Export the controller functions
