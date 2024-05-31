import React, { useState, useEffect, useRef } from "react";

function EmployeeForm(props) {
  let { getEmployees, data, records } = props;
  let [country, setCountry] = useState([]);
  let [department, setDepartment] = useState([]);
  let [gender, setGender] = useState([]);

  let queryCountry = useRef();
  let queryDepartment = useRef();
  let queryGender = useRef();
  let tableRef = useRef();
  async function getOptions() {
    let url = "http://localhost:3001/employees/options";
    let method = {
      method: "GET",
    };
    let response = await fetch(url, method);
    let jsData = await response.json();
    const { country, department, gender } = jsData;
    setCountry(country);
    setDepartment(department);
    setGender(gender);
  }

  useEffect(() => {
    getOptions();
  }, []);
  return (
    <div>
      <div className="formDiv">
        <form>
          <div>
            <label>Country</label>
            <select name="country" id="country" ref={queryCountry}>
              <option value="">select country</option>
              {country.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label>Department</label>
            <select name="department" id="department" ref={queryDepartment}>
              <option value="">Select Department</option>
              {department.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label htmlFor="">gender</label>

            <select name="gender" id="gender" ref={queryGender}>
              <option value="">Select gender</option>
              {gender.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <button
            type="button"
            onClick={() => {
              tableRef.current.style.display = "block";
              getEmployees(
                queryCountry.current.value,
                queryDepartment.current.value,
                queryGender.current.value
              );
            }}
          >
            Get Employees
          </button>
        </form>
      </div>
      <div className="dataTable" ref={tableRef}>
        <h3>Total Records: {records}</h3>
        <table>
          <thead>
            <tr>
              <th>SNo</th>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Picture</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>
                    <img src={item.profilePic} alt="profile" />
                  </td>
                  <td style={{ width: "300px" }}>{item.email}</td>
                  <td>{item.gender}</td>
                  <td>{item.age}</td>
                  <td>{item.department}</td>
                  <td>{item.salary}</td>
                  <td>{item.country}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </div>
  );
}

export default EmployeeForm;
