import React,{Component,useState,useEffect} from 'react'
import ReactDOM from 'react-dom';

function Employee() {
   const [employeeCount,setEmployeeCount]=useState(0);
    useEffect(()=>{
 var handle=  setInterval(getEmployeeCount,5000);    

    return ()=>{
      clearInterval(handle);
    }
  });
     
     
   function getEmployeeCount(){
         alert('Getting the Employees Count');
       fetch("")
       .then(res=>res.json())
       .then(
           result=>{
               setEmployeeCount(result.length);
           }
       )
   }
    function navigateToDepartment(){
    ReactDOM.render(<Departments></Departments>,document.getElementById("root"));
  }

    return (
        <div>
        <h1>EmployeeCount...</h1>
        <p>label EmployeeCount: <b>{employeeCount}</b>
        </p>
           <button onClick={navigateToDepartment}>Departments</button> 
        </div>
    )
}


function Departments(){
  return(
    <div>
      <h2>Welcome to Departments Component...</h2>
    </div>
  )
}

export default Employee;
