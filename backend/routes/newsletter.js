const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// POST → subscribe
router.post("/", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: "Email is required" });

    const sql = "INSERT INTO newsletter_subscribers (email) VALUES (?)";
    const [result] = await pool.query(sql, [email]);

    res.status(200).json({ success: true, id: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
