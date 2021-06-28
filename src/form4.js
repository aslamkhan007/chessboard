import React from 'react';
import {useFormik} from 'formik';

const EmployeeComponent =()=>{
    const formik = useFormik({
        initialValues:{
         Id:'',
         Name: ""
        },
        onSubmit:(value)=>{
            alert(JSON.stringify(value));
        }
    });

    return(
        <div>
        <form onSubmit={formik.handleSubmit}>
        
            <p>
                <label  htmlFor="Id">
                    <input type='text'name="Id" id="Id" value={formik.values.Id} onChange={formik.handleChange} onBlur={formik.handleBlur} ></input>
                </label>
            </p>
            <p>
                <label htmlFor="Name">
                    <input type='text' name="Name" id="Name" value={formik.values.Name} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                </label>
            </p>

            <button type="submit">Create</button>
     
        </form>
           </div>
    )
}
export default EmployeeComponent;