import React, { useContext } from "react";


import { useState } from "react";

const employeeContext = React.createContext();

function Conte() {
  const [employee, setEmployee] = useState({
    id: 101,
    name: "salim",
    salary: 1100,
    location: "phagwara",
       employementType: "contract",
    //employementType: "permanent",
  });
  return (
    <div>
      <h1>welcome to the Cont component </h1>
      <p>
        <label>
          Employee salary:<b>{employee.salary}</b>
        </label>
      </p>
      <employeeContext.Provider
        value={{ data: employee, updateEmployee: setEmployee }}
      >
        <Employee />
      </employeeContext.Provider>
    </div>
  );
}

function Employee() {
  let context = useContext(employeeContext);
  function updateEmploymentType() {
    context.updateEmployee({ ...context.data, employementType: "permanent" });
  }

  return (
    <div>
      <h1>welocme to the employee component</h1>
      <p>
        <label>
          Employee Id:<b>{context.data.id}</b>
        </label>
      </p>
      <p>
        <label>
          Employee name:<b>{context.data.name}</b>
        </label>
      </p>
      <p>
        <label>
          Employee location:<b>{context.data.location}</b>
        </label>
      </p>
      <p>
        <label>
          Employee salary:<b>{context.data.salary}</b>
        </label>
      </p>
      <employeeContext.Consumer>
        {(value) =>
          value.data.employementType === "permanent" ? (
            <Permanent />
          ) : (
            <Contract />
          )
        }
      </employeeContext.Consumer>
      <button onClick={updateEmploymentType}>Make Permanent</button>
      <Salary />
    </div>
  );
}

function Salary() {
  let context = useContext(employeeContext);

  function updateEmp() {
    context.updateEmployee({ ...context.data, salary: 1500 });
  }
  return (
    <div>
      <h1>welocme to the salary component</h1>
      <p>
        <label>
          Employee Id:<b>{context.data.id}</b>
        </label>
      </p>
      <p>
        <label>
          Employee salary:<b>{context.data.salary}</b>
        </label>
      </p>
      <button onClick={updateEmp}>Update</button>
    </div>
  );
}

function Permanent() {
  return (
    <div>
      <h1>welcome to the permanentComponent</h1>
    </div>
  );
}

function Contract() {
  return <div>
    <h1>welcome to the contractComponent</h1>
  </div>;
}
export default Conte;
