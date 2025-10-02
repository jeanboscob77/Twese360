// const express = require("express");
// const router = express.Router();
// const pool = require("../config/db");

// // POST → subscribe
// router.post("/", async (req, res) => {
//   try {
//     const { email } = req.body;
//     if (!email) return res.status(400).json({ error: "Email is required" });

//     const sql = "INSERT INTO newsletter_subscribers (email) VALUES (?)";
//     const [result] = await pool.query(sql, [email]);

//     res.status(200).json({ success: true, id: result.insertId });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const Subscriber = require("../models/Subscriber");

// POST → subscribe to newsletter
router.post("/", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: "Email is required" });

    // Check if email already exists
    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(400).json({ error: "Email already subscribed" });
    }

    const newSubscriber = new Subscriber({ email });
    const savedSubscriber = await newSubscriber.save();

    res.status(200).json({ success: true, id: savedSubscriber._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// POST → subscribe to newsletter
router.post("/", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: "Email is required" });

    // Check if email already exists
    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(400).json({ error: "Email already subscribed" });
    }

    const newSubscriber = new Subscriber({ email });
    const savedSubscriber = await newSubscriber.save();

    res.status(200).json({ success: true, id: savedSubscriber._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// POST → subscribe to newsletter
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "ID is required" });
    const deleted = await Subscriber.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: "Subscriber not found" });
    }

    res.status(200).json({ success: true, message: "Subscriber deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
