const config = require("config");
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(config.get("mongoURL"), {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected!");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
