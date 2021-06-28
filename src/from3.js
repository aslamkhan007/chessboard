import React from 'react';
import {useFormik} from 'formik';

const validateemp=(data)=>{
  const errors ={};

  if(!data.Id){
    errors.Id ='Please type Employee ID';
  }
  if (!data.Name){
    errors .Name= 'Please type Employee Nmae';
  }
  else if (data.Name.length>20){
    errors.Name ='Please type less then 20';
  }

  return errors;
};

const Works =()=>{
  const abc=useFormik({
    initialValues:{
      Id:'',
      Name:''
     
    },
    validate:validateemp,
    onSubmit:value=>{
      alert(JSON.stringify(value));
    }
  });

  return(
    <div>
    <form onSubmit={abc.handleSubmit}>
    <p>
    <label>Employee Id:</label>
    <input type="text" id="Id" name="Id" onChange={abc.handleChange} value={abc.values.Id} onBlur={abc.handleBlur}></input>
    {abc.touched.Id && abc.errors.Id ?<span style={{color:'green'}}>{abc.errors.Id}</span>:null}
    </p>
     <p>
    <label>Employee Name:</label>
    <input type="text" id="Name" name="Name" onChange={abc.handleChange} value={abc.values.Name} onBlur={abc.handleBlur}></input>
    {abc.touched.Name && abc.errors.Name ?<span style={{color:'green'}}>{abc.errors.Name}</span>:null}
    </p>
    <button type="submit"> Create</button>

    </form>
    </div>
  )
}

export default Works;