const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// Get all users
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  if (!users) {
    res.status(404);
    throw new Error('No users found');
  }
  res.status(200).json(users);
});

// Get user by ID
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  console.log(user);
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }
  res.status(200).json(user);
});

// Register a new user
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please fill in all fields');
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({ name, email, password: hashedPassword });
  if (!user) {
    res.status(400);
    throw new Error('Invalid user data');
  }
  res.status(201).json({
    _id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
  });
});

// Login a user

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check if email and password are entered
  if (!email || !password) {
    res.status(400);
    throw new Error('Please fill in all fields');
  }
  const user = await User.findOne({ email });

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

// Check if password is correct, login user and
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token,
      message: 'User logged in successfully!',
    });
  } else {
    res.status(401).json({ message: 'Invalid Credentials' });
  }
});


module.exports = { getUsers, getUserById, registerUser, loginUser };
