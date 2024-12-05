const User = require('../models/User');

exports.registerUser = async (req, res) => {
    const { name, role, email } = req.body;
    try {
        const user = await User.create({ name, role, email });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
