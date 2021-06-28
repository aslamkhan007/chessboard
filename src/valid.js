import React from 'react';
import {useFormik} from 'formik';


const validation = (data)=>{
  const errors={};

  if (!data.empid){
    errors.empid='Please Type Employee Id';
  }
  if (!data.empname){
    errors.empname='Please Type Employee Name';
  } else if (data.empname.length >20){
    errors.empname='Please Type less then 20';
  }

  return errors;
};

const Employee =()=>{
  const abc= useFormik({
    initialValues:{
      empid:'',
      empname:''
    },
    validate:validation,
    onSubmit:value=>{
      alert(JSON.stringify(value));
    },
  });

  return (
   
    
    <div>
       
     
      <form onSubmit={abc.handleSubmit}>
        <p>
          <label>Employee Id:</label>
          <input type='text' name='empid' id='empid'onChange={abc.handleChange}value={abc.values.empid} onBlur={abc.handleBlur}></input>
          {abc.touched.empid && abc.errors.empid? <span style={{color:'pink'}}>{abc.errors.empid}</span>:null}
        </p>
        <p>
          <label>Employee Name:</label>
          <input type ='text' id='empname' name='empname'onChange={abc.handleChange} value={abc.values.empname}onBlur={abc.handleBlur}></input>
          {abc.touched.empname && abc.errors.empname? <span style={{color:'pink'}}>{abc.errors.empname}</span>:null}
        </p>

        <button type='submit'>Create</button>

      </form>
     
    </div>
  
  )
  
}

export default Employee;