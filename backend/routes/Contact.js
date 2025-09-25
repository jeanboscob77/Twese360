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
  await pool.query(
    sql,
    [name, email, phone || null, message],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Server error" });
      }
      res.status(200).json({ success: true, id: result.insertId });
    }
  );
});

// GET /api/contact → fetch all contact requests
router.get("/", async (req, res) => {
  const sql =
    "SELECT id, name, email, phone, message, created_at FROM contacts ORDER BY created_at DESC";
  await pool.query(sql, (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Server error" });
    }
    res.status(200).json(rows);
  });
});

module.exports = router;
