var express = require("express");
var connectToDB = require("./db/connect");
var db = require("./db/model");
var cors = require("cors");
var app = express();
var port = 3001;
app.use(cors());

app.get("/employees", async (req, res) => {
  let { country, department, gender } = req.query;
  console.log(country, department, gender);
  console.log(req.query);
  let data = await db.retriveDataFromDB(country, department, gender);
  res.json(data);
});
app.get("/employees/options", async (req, res) => {
  let options = await db.retriveOptionsFromDB();
  res.json(options);
});

function start() {
  let connection =
    "mongodb+srv://anvesh:1130@cluster0.eb87jva.mongodb.net/Corporate?retryWrites=true&w=majority&appName=Cluster0";
  connectToDB(connection);
  app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`);
  });
}

start();
