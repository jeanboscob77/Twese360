const express = require("express");
const router = express.Router();
const db = require("../config/db");

// POST /api/service-request
router.post("/", async (req, res) => {
  const {
    serviceName,
    name,
    email,
    phone,
    address,
    idType,
    nationalId,
    passport,
    notes,
  } = req.body;

  const query = `
    INSERT INTO service_requests 
    (service_name, name, email, phone, address, id_type, national_id, passport, notes, status) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  try {
    const [result] = await db.query(query, [
      serviceName,
      name,
      email || null,
      phone,
      address,
      idType,
      nationalId || null,
      passport || null,
      notes || null,
      "pending",
    ]);

    res.json({
      message: "Request submitted successfully",
      id: result.insertId,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Database error" });
  }
});

router.put("/:id/done", async (req, res) => {
  try {
    const { id } = req.params;

    const sql = `UPDATE service_requests SET status = 'done' WHERE id = ?`;
    const [result] = await db.query(sql, [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Request not found" });
    }

    res.status(200).json({ success: true, id, status: "done" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
