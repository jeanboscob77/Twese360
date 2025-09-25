const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// Get service requests
router.get("/services", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT id, name, email, phone, address, notes, service_name, status, created_at FROM service_requests ORDER BY created_at DESC"
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Get contact form submissions// GET /api/contact → fetch all contact requests

router.get("/contacts", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT id, name, email, phone, message, created_at FROM contacts ORDER BY created_at DESC"
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Get newsletter subscribers
router.get("/subscribers", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT id, email, created_at FROM newsletter_subscribers ORDER BY created_at DESC"
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
