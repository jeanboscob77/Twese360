// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const pool = require("../config/db");

// const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

// // Admin login
// router.post("/login", async (req, res) => {
//   const { username, password } = req.body;

//   if (!username || !password)
//     return res.status(400).json({ message: "Username and password required" });

//   try {
//     const [rows] = await pool.query("SELECT * FROM admins WHERE username = ?", [
//       username,
//     ]);

//     if (!rows.length)
//       return res.status(401).json({ message: "Invalid credentials" });

//     const admin = rows[0];
//     const isMatch = await bcrypt.compare(password, admin.password);

//     if (!isMatch)
//       return res.status(401).json({ message: "Invalid credentials" });

//     // Create JWT token
//     const token = jwt.sign(
//       { id: admin.id, username: admin.username },
//       JWT_SECRET,
//       {
//         expiresIn: "1h",
//       }
//     );

//     res.json({ token });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// router.post("/register", async (req, res) => {
//   const { username, password } = req.body;

//   if (!username || !password)
//     return res.status(400).json({ message: "Username and password required" });

//   try {
//     // Check if username already exists
//     const [existing] = await pool.query(
//       "SELECT * FROM admins WHERE username = ?",
//       [username]
//     );
//     if (existing.length > 0) {
//       return res.status(400).json({ message: "Username already taken" });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Insert into DB
//     const [result] = await pool.query(
//       "INSERT INTO admins (username, password) VALUES (?, ?)",
//       [username, hashedPassword]
//     );

//     // Generate JWT token
//     const token = jwt.sign({ id: result.insertId, username }, JWT_SECRET, {
//       expiresIn: "1d",
//     });

//     res.status(201).json({ message: "Admin registered successfully", token });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Import User model
const User = require("../models/User");

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

// Admin login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(400).json({ message: "Username and password required" });

  try {
    const admin = await User.findOne({ username });

    if (!admin)
      return res.status(401).json({ message: "Invalid credentials username" });

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch)
      return res
        .status(401)
        .json({ message: "Invalid credentials invalid password" });

    // Create JWT token
    const token = jwt.sign(
      { id: admin._id, username: admin.username, role: admin.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Admin register
router.post("/register", async (req, res) => {
  const { username, password, role } = req.body;

  if (!username || !password)
    return res.status(400).json({ message: "Username and password required" });

  try {
    const existing = await User.findOne({ username });
    if (existing) {
      return res.status(400).json({ message: "Username already taken" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new admin/user
    const newUser = new User({
      username,
      password: hashedPassword,
      role: role || "admin",
    });

    const savedUser = await newUser.save();

    // Generate JWT token
    const token = jwt.sign(
      { id: savedUser._id, username: savedUser.username, role: savedUser.role },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(201).json({ message: "Admin registered successfully", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
