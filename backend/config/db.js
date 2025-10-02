// const mysql = require("mysql2/promise");
// const dotenv = require("dotenv");

// dotenv.config();

// const db = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "your_password",
//   database: "your_database",
//   charset: "utf8mb4", // supports Kinyarwanda characters
// });

// module.exports = db;

// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
//   charset: "utf8mb4",
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });

// module.exports = pool;

const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    // Do NOT exit the process, just log error
  }
};

module.exports = connectDB;
