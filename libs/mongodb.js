const mongoose = require("mongoose");
require("dotenv").config();

let isConnected = false;

const connectMongoDB = async () => {
  if (isConnected) {
    console.log("Using existing MongoDB connection.");
    return;
  }

  try {
    // Connecting to MongoDB using environment variable for URI
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = db.connections[0].readyState === 1; // Ensure connection is established
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("MongoDB connection failed");
  }
};

module.exports = connectMongoDB;
