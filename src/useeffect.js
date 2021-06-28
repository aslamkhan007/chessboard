
import React, { Component, useState, useEffect } from "react";

function EmployeeComponent1(){
  const [employees,setEmployees]=useState([]);
console.log(document.readyState);
  useEffect(()=>{
    alert('We are in useEffect function');
    fetch('https://localhost:44397/api/mytest')
      .then(res => res.json())
      .then(
        (result) => {
          setEmployees(result);
        }
      );
  },[]);
  
  return(
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
          {employees.map(emp=>(
            <tr key={emp.Id}>
             
              <td>{emp.empid}</td>
              <td>{emp.empname}</td>
      
              <td>{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}


function EmployeeComponent(){
    const [employees,setEmployees]=useState();
  console.log(document.readyState);
    // useEffect(()=>{
    //    alert('We are in useEffect function');
    //   fetch('https://localhost:44397/api/mytest')
    //     .then(res => res.json())
    //     .then(
    //       (result) => {
    //         setEmployees(result);
    //       }
    //     );
    // },[]);
useEffect(()=>{
    alert("msg");
},[]

)
   const abc=(e)=>{
        setEmployees(e.target.value);
    }
    
    return(
      <div>
        <h2>Employees Data...</h2>

        <p>
            <label>Employee: <input type="text" value={employees} onChange={abc}></input></label>
        </p>

             </div>
    )
  }

export default EmployeeComponent ;