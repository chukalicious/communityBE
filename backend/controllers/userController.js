const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  if (!users) {
    res.status(404);
    throw new Error('No users found');
  }
  res.status(200).json(users);
});

const getUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    console.log(user);
    if (!user) {
      res.status(404);
      throw new Error('User not found');
    }
    res.status(200).json(user);
}
);


module.exports = { getUsers, getUserById }
