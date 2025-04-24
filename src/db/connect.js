const mongoose = require("mongoose");
require('dotenv').config()

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/chaibasaEngineering", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
