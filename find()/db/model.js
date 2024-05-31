var mongoose = require("mongoose");
var PlayerSchema = require("./schema");
let employee = mongoose.model("employee", PlayerSchema);

async function retriveDataFromDB(queryCountry, queryDepartment, queryGender) {
  try {
    let data = await employee
      .find({})
      .and([
        { country: queryCountry },
        { department: queryDepartment },
        { gender: queryGender },
      ]);
    // let totalRecords = await employee
    //   .find({})
    //   .and([
    //     { country: queryCountry },
    //     { department: queryDepartment },
    //     { gender: queryGender },
    //   ])
    //   .count();
    let totalRecords = data.length;
    return { data, totalRecords };
  } catch (e) {
    console.log("Error retrieving data");
  }
}

async function retriveOptionsFromDB() {
  try {
    let country = await employee.distinct("country");
    let department = await employee.distinct("department");
    let gender = await employee.distinct("gender");
    return { country, department, gender };
  } catch {
    console.log("Error retrieving options");
  }
}

module.exports = { retriveDataFromDB, retriveOptionsFromDB };
