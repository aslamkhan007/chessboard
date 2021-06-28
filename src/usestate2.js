import React, {Component, useState} from 'react';

function Usestat(){
    const [employees,setEmployee] = useState({id:"",Name:"",Location:""});

 function handleinfo(e){
    setEmployee({...employees,[e.target.name]: e.target.value });
 }
    return(
        <div>
            <h1>Employee Information:</h1>
            <p>
                <label>
                    <input type="text" name="id" value={employees.id} onChange={handleinfo}></input>
                </label>
            </p>
            <p>
                <label>
                    <input type="text"name="Name" value={employees.Name} onChange={handleinfo}></input>
                </label>
            </p>
            <p>
                <label>
                    <input type="text" name="Location" value={employees.Location} onChange={handleinfo}></input>
                </label>
            </p>
            <button ></button>
        </div>
    )
}

export default Usestat;