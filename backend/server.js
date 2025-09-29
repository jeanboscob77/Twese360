const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const serviceRequestRoutes = require("./routes/serviceRequest");
const ContactRoutes = require("./routes/Contact");
const newsletterRoutes = require("./routes/newsletter");
const adminRoutes = require("./routes/admin");
const LoginRoutses = require("./routes/Login");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Routes
app.use("/api/service-request", serviceRequestRoutes);
app.use("/api/contact", ContactRoutes);
app.use("/api/newsletter", newsletterRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/auth", LoginRoutses);

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

const clients = {}; // { socketId: { id, role } }
const messages = {}; // { clientId: [{sender, content, timestamp}] }
let adminOnline = false;
io.on("connection", (socket) => {
  console.log("New connection:", socket.id);

  socket.on("client_join", () => {
    clients[socket.id] = { id: socket.id, role: "client" };
    messages[socket.id] = messages[socket.id] || [];
    console.log("Client joined:", socket.id);

    // Send welcome message to this client
    const welcomeMsg = {
      sender: "system",
      clientId: socket.id,
      content: "👋 Welcome! An admin will be with you shortly.",
      timestamp: new Date().toISOString(),
    };

    // store it
    messages[socket.id].push(welcomeMsg);

    // send it to this client
    io.to(socket.id).emit("receive_message", welcomeMsg);
    // Notify admin of all clients
    const admins = Object.values(clients).filter((c) => c.role === "admin");
    admins.forEach((a) =>
      io.to(a.id).emit("client_list", Object.keys(messages))
    );
  });

  socket.on("admin_join", () => {
    clients[socket.id] = { id: socket.id, role: "admin" };
    console.log("Admin joined:", socket.id);
    adminOnline = true;
    // Notify all clients that admin is online
    io.emit("admin_status", { online: true });
    // Send all client IDs to admin
    socket.emit("client_list", Object.keys(messages));
    // Send all messages to admin
    Object.keys(messages).forEach((clientId) => {
      messages[clientId].forEach((msg) => {
        socket.emit("receive_message", { ...msg, clientId });
      });
    });
  });

  /// typing event
  socket.on("typing", ({ senderId, receiverId }) => {
    if (receiverId) {
      io.to(receiverId).emit("typing", { senderId });
    } else {
      // if no specific receiver, send to all admins
      Object.values(clients)
        .filter((c) => c.role === "admin")
        .forEach((a) => io.to(a.id).emit("typing", { senderId }));
    }
  });

  socket.on("stop_typing", ({ senderId, receiverId }) => {
    if (receiverId) {
      io.to(receiverId).emit("stop_typing", { senderId });
    } else {
      Object.values(clients)
        .filter((c) => c.role === "admin")
        .forEach((a) => io.to(a.id).emit("stop_typing", { senderId }));
    }
  });

  socket.on("send_message", (msg) => {
    if (msg.sender === "client") {
      // store message
      messages[socket.id].push(msg);

      // send to all admins
      Object.values(clients)
        .filter((c) => c.role === "admin")
        .forEach((a) =>
          io.to(a.id).emit("receive_message", { ...msg, clientId: socket.id })
        );
    } else if (msg.sender === "admin" && msg.clientId) {
      // send to specific client
      io.to(msg.clientId).emit("receive_message", msg);

      // store in client's messages
      messages[msg.clientId].push(msg);
    }
  });

  socket.on("disconnect", () => {
    console.log("Disconnected:", socket.id);
    const wasClient = clients[socket.id]?.role === "client";

    // If admin disconnects, notify clients
    if (socket.isAdmin) {
      adminOnline = false;
      io.emit("admin_status", { online: false });
    }
    // remove client from list
    delete clients[socket.id];
    delete messages[socket.id]; // optional: remove stored messages

    // if it was a client, notify admins
    if (wasClient) {
      const admins = Object.values(clients).filter((c) => c.role === "admin");
      const clientIds = Object.keys(messages); // all active clients
      admins.forEach((a) => io.to(a.id).emit("client_list", clientIds));
    }
    delete clients[socket.id];
  });
});

// Start server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
