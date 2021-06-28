import React from 'react';
import {useFormik} from 'formik';

function Employee (){
    const formik = useFormik({
        initialValues:{
            id:'',
            name:'',
            salary:''
            
        },
        onSubmit:value=>{

            alert(JSON.stringify(value));

            let empInfo={
 
 
                empid:value.id,
                empname:value.name,
                 salary:value.salary
               
               
                  };
                console.warn(empInfo);
                console.warn(JSON.stringify(empInfo));
            
                fetch('https://localhost:44397/api/mytest',{
                  method: 'POST',
                  headers:{'Content-type':'application/json'},
                    body: JSON.stringify(empInfo) 
                }).then(r=>r.json()).then(res=>{
                  // if(res){
                    
                  //   this.setState({message:'New Employee is Created Successfully'});
                  //   alert(this.state.message);
                  if(res=="ok"){
                    alert("ok");
                    
                    this.setState({message:'New Employee is Created Successfully'});
                    alert(this.state.message);
                  }
                });

        },
    });

    
    return (
        <div>
            <h1>Employee Details...</h1>
            <form onSubmit={formik.handleSubmit}>
                <p>
                    <label>Employee Id..</label>
                    <input
                    id="id"
                    name="id"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.id}
                    ></input>
                </p>
                <p>
                    <label>Emplouee Name:</label>
                    <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    ></input>

                </p>
                <p>
                    <label>Emplouee Salary:</label>
                    <input
                    id="salary"
                    name="salary"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.salary}
                    ></input>

                </p>
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}


export default Employee;