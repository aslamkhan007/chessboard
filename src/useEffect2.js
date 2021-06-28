import React, { Component, useState, useEffect } from "react";

function UseEffecttest() {
  //const [employees, setEmployees] = useState([]);
  const [employees, setEmployees] = useState([]);
  //method 1 aync
  //  useEffect(async () => {
  //    // fetch("http://192.168.250.33:81/api/search/")
  //    await fetch("http://192.168.1.6/api/Employee/")
  //      .then((res) => res.json())

  //      .then((resu) => {

  //         console.log("inner", resu)
  //         ,
  //          setEmployees(resu)

  //      });

  //  }, []);

  //method 2 aync
 async function get_api()  {
    alert("We are in useEffect function 2");
    // fetch("http://192.168.250.33:81/api/search/")
    const api = await fetch("http://192.168.1.6/api/Employee/");
    const response = await api.json();
    // setEmployees(response)
    console.log(response);
  };


  useEffect(() => {
    alert("We are in useEffect function 1");
    //get_api();
    // get_api = async () => {
    //   //alert("We are in useEffect function");
    //   // fetch("http://192.168.250.33:81/api/search/")
    //   const api = await fetch("http://192.168.1.6/api/Employee/");
    //   const response = await api.json();
    //   // setEmployees(response)
    //   console.log(response);
    // };
  }, []);

  console.log("outer", employees);
  return (
    <div>
      {/* {console.log("render", employees)} */}
      {console.log("render")}
     { alert("We are in rander 1")}
      <h2> Employee Data</h2>
      <table>
        <thead>
          <tr>
            <th>DepartmentId</th>
            <th>DepartmentName</th>
          </tr>
        </thead>
        {/* <tbody>{employees.map((res,index) => {})}</tbody> */}
      </table>
    </div>
  );
}

export default UseEffecttest;
