const User = require('../models/user.models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your_jwt_secret_key';

async function registerUser(req, res) {
  try {
    const {
      name,
      email,
      password,
      rfid,
      semester,
      schooling,
      schoolingPer,
      intermediate,
      intermediatePer,
      fatherName,
      motherName,
      parentEmail,
      cgpa,
      batches,
      branch
    } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      rfid,
      semester,
      schooling,
      schoolingPer,
      intermediate,
      intermediatePer,
      fatherName,
      motherName,
      parentEmail,
      cgpa,
      batches,
      branch,
      photo: req.file ? req.file.path : null
    });

    await newUser.save();
    res.status(201).json({ message: 'Registration successful', user: newUser });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error during registration' });
  }
}

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
      expiresIn: '1d',
    });

    res.status(200).json({ message: 'Login successful', token, user });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error during login' });
  }
}

async function chat(req, res) {
  res.status(200).json({ mes: "sartajanajksjf" });
}

module.exports = { registerUser, loginUser, chat };