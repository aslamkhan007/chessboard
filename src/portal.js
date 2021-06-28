import React from "react";
import ReactDOM from "react-dom";
class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      showmodal: false,
    };
  }

  async componentDidMount() {
    await fetch("http://13.233.21.154/reactcrudapi/api/Employee")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        this.setState({ employees: result });
      });
  }
  editModal = (e, emp) => {
    this.setState({ showmodal: !this.state.showmodal });
  };

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>EmployeeID</th>
            <th>EmployeeName</th>
            <th>Department</th>
            <th>MAilId</th>
            <th>Doj</th>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {this.state.employees ? (
            this.state.employees.map((emp) => (
              <tr key={emp.EmployeeID}>
                {/* {console.log(emp.EmployeeID)} */}
                <td>{emp.EmployeeID}</td>
                <td>{emp.EmployeeName}</td>
                <td>{emp.Department}</td>
                <td>{emp.MAilId}</td>
                <td>{emp.Doj}</td>

                <td>
                  <button onClick={this.editModal}>edit</button>
                  <Modal open={this.state.showmodal} close={this.editModal}>
                    <EmployeeModal employees={emp}></EmployeeModal>
                  </Modal>
                </td>
              </tr>
            ))
          ) : (
            <h1> loading..</h1>
          )}
        </tbody>
      </table>
    );
  }
}

class EmployeeModal extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.employees);
  }

  render() {
    return (
      <div>
        <h2>Employee Details...</h2>

        <p>
          <label>
            Employee ID :
            {/* <input type="text" value={this.props.employees.EmployeeID} ></input> */}
            <input type="text" value={this.props.employees.EmployeeID}></input>
          </label>
        </p>

        {/* <p>
          <label>
            Employee Name :
            <input type="text" value={this.props.employees.EmployeeName}></input>
          </label>
        </p>

        <p>
          <label>
            Employee Location:
            <input type="text" value={this.props.employees.Department}></input>
          </label>
        </p>

        <p>
          <label>
            Employee Salary :
            <input type="text" value={this.props.employees.MAilid}></input>
          </label>
        </p>
        <p>
          <label>
            Employee Salary :
            <input type="text" value={this.props.employees.Doj}></input>
          </label>
        </p>

        <input type="submit" value="Save"></input> */}
      </div>
    );
  }
}

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.open
      ? ReactDOM.createPortal(
          <div className="modal">
            <button onClick={this.props.close}>X</button>
            {this.props.children}
          </div>,
          document.body
        )
      : null;
  }
}

export default Employee;
