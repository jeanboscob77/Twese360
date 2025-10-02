// models/ServiceRequest.js
const mongoose = require("mongoose");

const serviceRequestSchema = new mongoose.Schema(
  {
    service_name: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String },
    phone: { type: String },
    address: { type: String },
    id_type: { type: String }, // e.g., National ID or Passport
    national_id: { type: String },
    passport: { type: String },
    notes: { type: String },
    status: {
      type: String,
      enum: ["pending", "done"],
      default: "pending",
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = mongoose.model("ServiceRequest", serviceRequestSchema);
