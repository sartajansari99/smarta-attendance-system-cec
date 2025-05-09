const User = require('../models/user.models'); // Adjust path as per your folder structure

// Get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find(); // Fetch all users
        res.status(200).json(users);

        const students = await User.find();
  
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
};

// Get a single user by ID
const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error: error.message });
    }
};



module.exports = {
    getAllUsers,
    getUserById,
};
