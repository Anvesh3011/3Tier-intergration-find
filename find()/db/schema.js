var mongoose = require("mongoose");

let schema = new mongoose.Schema({
  id: Number,
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  age: Number,
  department: String,
  profilePic: String,
  salary: Number,
  country: String,
});

module.exports = schema;
