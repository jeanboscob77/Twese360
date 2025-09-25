import pool from "../config/db";

export const createServiceRequest = async (request) => {
  const {
    service_name,
    name,
    email,
    phone,
    address,
    id_type,
    national_id,
    passport,
    notes,
  } = request;

  const [result] = await pool.query(
    `INSERT INTO service_requests
     (service_name, name, email, phone, address, id_type, national_id, passport, notes)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      service_name,
      name,
      email || null,
      phone,
      address,
      id_type,
      national_id || null,
      passport || null,
      notes || null,
    ]
  );

  return result;
};

export const getAllRequests = async () => {
  const [rows] = await pool.query(
    "SELECT * FROM service_requests ORDER BY created_at DESC"
  );
  return rows;
};
