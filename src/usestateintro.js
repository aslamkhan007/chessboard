import ReactDOM from "react-dom";
import React, { Component, useState } from "react";

function NewEmployee(){

const [name,setName]=useState();

 function changeName(e){

    setName(e.target.value);

  }

 

  return(

    <div>

      <h2>Welcome to New Employee Component...</h2>

      <p>

        <label>Employee Name : 

                <input type="text" value={name} 

                onChange={changeName}></input>

        </label>

      </p>

      <p>

        Entered Name is : <b>{name}</b>

      </p>

    </div>

  )


  

}

export default NewEmployee;