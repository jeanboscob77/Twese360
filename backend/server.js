const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const serviceRequestRoutes = require("./routes/serviceRequest");
const ContactRoutes = require("./routes/Contact");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/service-request", serviceRequestRoutes);
app.use("/api/contact", ContactRoutes);

const newsletterRoutes = require("./routes/newsletter");
app.use("/api/newsletter", newsletterRoutes);
//admin routes
const adminRoutes = require("./routes/admin");
app.use("/api/admin", adminRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
