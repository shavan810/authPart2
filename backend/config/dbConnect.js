const mongoose = require("mongoose");

const dbCon = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/userNew");
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("Connection Error:", error);
  }
};

module.exports = dbCon;
