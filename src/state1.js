import ReactDOM from "react-dom";
import React,{Component,useState} from 'react';


function Employee(){
    const [name,setName] = useState();
   function handleChange(e){
        setName(e.target.value);
    }
    return(
        <div>
            <h2>Welcome to New Employee Component...</h2>
        <p>
        <label> Employee Details:
        <input type='text' value={name} onChange={handleChange}></input>
        </label>
        </p>
        <p>
        Employee: <b>{name}</b>
        </p>
        </div>
    )
}

export default Employee;