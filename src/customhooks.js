import React from "react";
import { useState, useEffect } from "react";

function Employee() {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    fetch("http://13.233.21.154/reactcrudapi/api/Employee")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setEmployee(result);
      });
  }, []);

  return (
    <div>
      {employee ? (
        <table>
          <thead>
            <tr>
              <th>EmployeeID</th>
              <th>EmployeeName</th>
              <th>Department</th>
              <th>MAilId</th>
              <th>Doj</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((emp) => (
              <tr key={emp.EmployeeID}>
                <td>{emp.EmployeeID}</td>
                <td>{emp.EmployeeName}</td>
                <td>{emp.department}</td>
                <td>{emp.MAilId}</td>
                <td>{emp.Doj}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1>loading....</h1>
      )}
    </div>
  );
}

export default Employee;
