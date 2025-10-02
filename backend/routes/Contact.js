// const express = require("express");
// const router = express.Router();
// const pool = require("../config/db");

// // POST /api/contact → submit contact form
// router.post("/", async (req, res) => {
//   const { name, email, phone, message } = req.body;

//   if (!name || !message) {
//     return res.status(400).json({ error: "Name and message are required" });
//   }

//   const sql =
//     "INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)";
//   try {
//     const [result] = await pool.query(sql, [
//       name,
//       email,
//       phone || null,
//       message,
//     ]);
//     res.status(200).json({ success: true, id: result.insertId });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();

// Import the Contact model
const Contact = require("../models/Contact");

// POST /api/contact → submit contact form
router.post("/", async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Basic validation
  if (!name || !message || !email) {
    return res
      .status(400)
      .json({ error: "Name, Email and message are required" });
  }

  try {
    // Create a new contact document
    const newContact = new Contact({
      name,
      email,
      phone: phone || null,
      message,
    });

    // Save to MongoDB
    const savedContact = await newContact.save();

    res.status(200).json({ success: true, id: savedContact._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// POST /api/contact → submit contact form
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "id is required" });
  }
  try {
    // Create a new contact document
    const deletedContact = await Contact.findByIdAndDelete(id);

    res
      .status(200)
      .json({ success: true, message: "Contact deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
