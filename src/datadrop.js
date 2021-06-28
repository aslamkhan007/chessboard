import React from 'react';
import {useFormik} from 'formik';

function Data (){
    const abc=useFormik({
        initialValues:{
            id:'',
            name:''
        },
        
        onSubmit:value=>{
            alert(JSON.stringify(value));
        },

    });

    return(
     <di>
         <h1>Data Details..</h1>
         <form onSubmit={abc.handleSubmit}>
             <p>
                 <label>Employee Id..</label>
                 <input type="text"
                 id="id"
                 name="id"
                 onChange={abc.handleChange}
                 value={abc.values.id}>
                     
                 </input>
             </p>
             <p>
                 <label>Employee Name..</label>
             <input
             type="text"
             id="name"
             name="name"
             onChange={abc.handleChange}
             value={abc.values.name}
             ></input>
             </p>
             <button type="submit">submit</button>

         </form>
     </di>
    );
}


export default Data;