const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    mongoose
      .connect(process.env.MONGODB_URI)
      .then(() => console.log("DataBase Connected"));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
