import React, { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";

function App() {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState(0);
  async function getEmployees(queryCountry, queryDepartment, queryGender) {
    let url = `http://localhost:3001/employees?country=${queryCountry}&department=${queryDepartment}&gender=${queryGender}`;
    let method = {
      method: "GET",
    };
    let response = await fetch(url, method);
    let jsData = await response.json();
    let { data, totalRecords } = jsData;
    console.log(data);
    setData(data);
    setRecords(totalRecords);
  }

  return (
    <div className="App">
      <EmployeeForm getEmployees={getEmployees} data={data} records={records} />
    </div>
  );
}

export default App;
