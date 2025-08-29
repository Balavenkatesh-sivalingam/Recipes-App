
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.Mongo_Uri);
    console.log("mongodb connected successfully");
  } catch (error) {
    console.log("failed to connect to DB");
  }
};

module.exports = connectDB;
