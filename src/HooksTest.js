import React, { useState, useEffect } from "react";
 
function useList(url){
    const [data,setData]=useState([]);
  
    useEffect(()=>{
      fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            setData(result);
          }
        );
    },[]);
  
    return data;
  }

function Employee() {
    const employee=useList("http://13.233.21.154/reactcrudapi/api/Employee")
//   const [employee, setEmployee] = useState([]);

//   useEffect( async() => {
//    await fetch("http://13.233.21.154/reactcrudapi/api/Employee")
//       .then((res) => res.json())
//       .then((result) => {
//           console.log(result);
//         setEmployee(result);
//       });
//   },[]);
  return (
    <div>
      <h2>Employee Data..</h2>
      <table>
        <thead>
          <tr>
            <th>EmployeeId</th>
            <th>EmployeeName</th>
            <th>Department</th>
            <th>MAilId</th>
            <th>Doj</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((emp,i) => (
              
            //   if(i>1){

                  
            <tr key={i}>
              <td>{emp.EmployeeID}</td>
              <td>{emp.EmployeeName}</td>
              <td>{emp.Department}</td>
              <td>{emp.MAilId}</td>
              <td>{emp.Doj}</td>
            </tr>
            //   }
            
              
  ))}
        </tbody>
      </table>
    </div>
  );
}

function Department() {
    const department=useList("http://13.233.21.154/reactcrudapi/api/Department")
//   const [department, setDepartment] = useState([]);
//   useEffect(async () => {
//    await fetch("http://13.233.21.154/reactcrudapi/api/Department")
//       .then((res) => res.json())
//       .then((result) => {
//         setDepartment(result);
//       });
//   },[]);

  return (
    <div>
      <h2>Department Data...</h2>
      <table>
        <thead>
          <tr>
            
            <th>DepartmentId</th>
            <th>DepartmentName</th>
          </tr>
          </thead>
          <tbody>
            {department.map((dep,index) => (
              <tr key={index}>
                  <td>{dep.DepartmentId}</td>
                <td>{`${dep.DepartmentName} ${index}`}</td>
               
              </tr>
            ))}
          </tbody>
    
      </table>
    </div>
  );
}

function Abc1() {
    return (
      <div>
        <Employee></Employee>
        <Department></Department>
        
      </div>
    );
  }

export default Abc1;
