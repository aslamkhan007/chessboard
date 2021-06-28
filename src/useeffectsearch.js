import React, { Component, useState, useEffect } from "react";

function Abc() {
  //console.log("funtion")

 
  const [employees, setemployees] = useState([]);
  const [searchText,setSearchText] = useState('');

  async function search() {
   //alert("use")
    const res = await fetch("http://localhost:81/api/search/"+searchText);
    const response = await res.json();
    setemployees(response);
     //console.log("set",response);
  }

  useEffect(() => {
     
    search();
   
  }, [searchText]);
  
    function onSearchTextChange(e){
    setSearchText(e.target.value);
  }
 
    //console.log(employees);
  return (
    <div>

     
      {console.log("return",employees)}
      <h2> Employee Data</h2>
       <p>
        <label>Search By Name : <input type="text" value={searchText}
                                  onChange={onSearchTextChange}></input></label></p>
      
      <table>
        <thead>
          <tr>
            <th>DepartmentId</th>
            <th>DepartmentName</th>
          </tr>
        </thead>
        <tbody>
            
          {employees.map((emp) => {
            //   alert(emp.DepartmentId);
            // return( <tr key={emp.DepartmentId}>
            //   <td>hi</td>
            //   </tr>)
          return(  <tr key={emp.DepartmentId}>
              <td>{emp.DepartmentId}</td>
              <td>{emp.DepartmentName}</td>
            </tr>
          )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Abc;
