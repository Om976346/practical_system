import User from "../models/User.js";

// Create a new user
export const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({ name, email, password, role });
    await user.save();

    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error: error.message });
  }
};

// Get all users (Admin only)
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error: error.message });
  }
};































// import User, { findOne, find } from "../models/User.js";

// // Create a new user
// const createUser = async (req, res) => {
//     const { name, email, password, role } = req.body;
//     try {
//         const userExists = await findOne({ email });
//         if (userExists) return res.status(400).json({ message: "User already exists" });

//         const user = new User({ name, email, password, role });
//         await user.save();
//         res.status(201).json({ message: "User created successfully" });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// // Get all users
// const getUsers = async (req, res) => {
//     try {
//         const users = await find();
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// export default { createUser, getUsers };
