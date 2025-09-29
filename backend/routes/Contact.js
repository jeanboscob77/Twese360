const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// POST /api/contact → submit contact form
router.post("/", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({ error: "Name and message are required" });
  }

  const sql =
    "INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)";
  try {
    const [result] = await pool.query(sql, [
      name,
      email,
      phone || null,
      message,
    ]);
    res.status(200).json({ success: true, id: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
