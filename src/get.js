
import React from 'react';


class EmployeeComponent extends React.Component {

    constructor(props) {
      alert("cons");
    super(props);
    this.state = {
      employees: []
    };
  }

componentDidMount() {
  alert("compon");
  debugger;
fetch('https://localhost:44397/api/mytest')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            employees: result
          });
        }
      );
  }

  render() {
    alert("rend");
    return (
      <div>
        <h2>Employees Data...</h2>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
     
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
          {this.state.employees.map(emp => (
            <tr key={emp.empid}>
              <td>{emp.empid}</td>
              <td>{emp.empname}</td>
      
              <td>{emp.salary}</td>
              </tr>
  ))}         
          </tbody>
        </table>
      </div>
      );
    }
}


export default EmployeeComponent