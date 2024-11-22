const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://iincekaan:${process.env.MONGO_PASSWORD}@node.pgrj5.mongodb.net/?retryWrites=true&w=majority&appName=node`
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("An error occurred while connecting to MongoDB:", error);
  }
};

module.exports = connectDB;
