const mongoose = require("mongoose");

// Track the connection status
let isConnected = false;

const connectMongoDB = async () => {
  if (isConnected) {
    console.log("Using existing MongoDB connection.");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = db.connections[0].readyState === 1; // 1 means connected
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("MongoDB connection failed");
  }
};

module.exports = connectMongoDB;
