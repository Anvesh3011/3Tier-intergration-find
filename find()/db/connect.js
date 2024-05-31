var mongoose = require("mongoose");
var dataToDB = require("./model");

async function connectToDB(connection) {
  try {
    await mongoose.connect(connection);

    console.log("Connected to the database");
    // dataToDB();
  } catch (e) {
    console.log("error connecting to db");
  }
}

module.exports = connectToDB;
