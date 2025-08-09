const hashPass = require("../config/helper");
const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await hashPass(password);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
      date: new Date(),
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully", newUser });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Registration Failed", details: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: "User Not Found" });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      token,
      message: "Login Successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        date: user.date,
        profile: user.profile,
      },
    });
  } catch (err) {
    res.status(500).json({ error: "Login Failed", details: err.message });
  }
};

const verify = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not Found" });
    }
    res.json({ user });
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

const update = async (req, res) => {
  try {
    const user = req.body;

    if (!user || !user.id)
      return res.status(400).json({ message: "Invalid user data" });

    const updated = {
      email: user.email,
    };

    if (user.password) {
      const hashedPassword = await hashPass(user.password);
      updated.password = hashedPassword;
    }

    const updatedUser = await User.findByIdAndUpdate(user.id, updated, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (err) {
    res.status(500).json({ error: "Update Failed", details: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { user } = req.body;

    if (!user || !user.id) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const deletedUser = await User.findByIdAndDelete(user.id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Deletion failed", details: err.message });
  }
};

module.exports = { register, login, verify, update, deleteUser };
