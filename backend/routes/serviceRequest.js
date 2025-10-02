// const express = require("express");
// const router = express.Router();
// const db = require("../config/db");

// // POST /api/service-request
// router.post("/", async (req, res) => {
//   const {
//     serviceName,
//     name,
//     email,
//     phone,
//     address,
//     idType,
//     nationalId,
//     passport,
//     notes,
//   } = req.body;

//   const query = `
//     INSERT INTO service_requests
//     (service_name, name, email, phone, address, id_type, national_id, passport, notes, status)
//     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
//   `;
//   try {
//     const [result] = await db.query(query, [
//       serviceName,
//       name,
//       email || null,
//       phone,
//       address,
//       idType,
//       nationalId || null,
//       passport || null,
//       notes || null,
//       "pending",
//     ]);

//     res.json({
//       message: "Request submitted successfully",
//       id: result.insertId,
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Database error" });
//   }
// });

// router.put("/:id/done", async (req, res) => {
//   try {
//     const { id } = req.params;

//     const sql = `UPDATE service_requests SET status = 'done' WHERE id = ?`;
//     const [result] = await db.query(sql, [id]);

//     if (result.affectedRows === 0) {
//       return res.status(404).json({ error: "Request not found" });
//     }

//     res.status(200).json({ success: true, id, status: "done" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();

// Import model
const ServiceRequest = require("../models/ServiceRequest");

// POST /api/service-request → create new request
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

  if (!serviceName || !name) {
    return res
      .status(400)
      .json({ message: "Service name and name are required" });
  }

  try {
    const newRequest = new ServiceRequest({
      service_name: serviceName,
      name,
      email: email || null,
      phone: phone || null,
      address: address || null,
      id_type: idType || null,
      national_id: nationalId || null,
      passport: passport || null,
      notes: notes || null,
      status: "pending",
    });

    const savedRequest = await newRequest.save();

    res.status(201).json({
      message: "Request submitted successfully",
      id: savedRequest._id,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Database error" });
  }
});

// PUT /api/service-request/:id/done → mark request as done
router.put("/:id/done", async (req, res) => {
  try {
    const { id } = req.params;

    const updatedRequest = await ServiceRequest.findByIdAndUpdate(
      id,
      { status: "done" },
      { new: true } // return updated document
    );

    if (!updatedRequest) {
      return res.status(404).json({ error: "Request not found" });
    }

    res.status(200).json({
      success: true,
      id: updatedRequest._id,
      status: updatedRequest.status,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
