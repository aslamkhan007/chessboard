import React from 'react';
import { useFormik } from 'formik';

function Class() {
    const formik = useFormik({
        initialValues: {
            Id: '',
            name:'',
            salary:''
        },
        onSubmit: value => {
            alert(JSON.stringify(value));
        },
    });

    return (
        <div>
            <h1><b>Employee details</b></h1>
            <form onSubmit={formik.handleSubmit}>
                <p>
                    <label htmlFor="Id"><b>Employee ID:</b> </label>
                    <input
                        id="Id"
                        name="Id"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.Id}></input>
                    
                </p>
                <p>
                <label htmlFor="name"><b>Employee Name:</b> </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name}></input>
                  

                </p>
                <p>
                <label htmlFor="salary"><b>Employee Salary:</b> </label>
                    <input
                        id="salary"
                        name="salary"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.salary}></input>
                
                </p>
                <button type="submit"><b>submit</b></button>
            </form>
        </div>
    );
}
export default Class;