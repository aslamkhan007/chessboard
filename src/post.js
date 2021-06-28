
import React from 'react';


class EmployeeComponent extends React.Component {

    constructor(props) {
      alert("cons");
    super(props);
     this.state = {
      message: ''
    };
  }

componentDidMount() {
  alert("compon");
  debugger;



  }



// onCreateEmployee=()=>{
//   let empInfo={
//    "value" :{
//     empid:this.refs.Id.value,
//     empname:this.refs.Name.value,
        
//         salary:this.refs.Salary.value
//    }
  
//       };
  

// onCreateEmployee=()=>{
//   let empInfo={
 
//     empid:this.refs.Id.value,
//     empname:this.refs.Name.value,
        
//         salary:this.refs.Salary.value
   
  
//       };


onCreateEmployee=()=>{
  let empInfo={
 
 
    empid:this.refs.Id.value,
    empname:this.refs.Name.value,
        
        salary:this.refs.Salary.value
   
   
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
}
  render() {
    alert("rend");
    return (
   <div>
        <h2>Please Enter Employee Details...</h2>
        <p>
          <label>Employee ID : <input type="text"  ref="Id"></input></label>
        </p>
        <p>
          <label>Employee Name : <input type="text" ref="Name"></input></label>
        </p>
        <p>
          <label>Employee Location : <input type="text" ref="Location"></input></label>
        </p>
        <p>
          <label>Employee Salary : <input type="text" ref="Salary"></input></label>
        </p>
        <p>
          {/* <label> { alert(this.state.message)}</label> */}

          <label>  {this.state.message }</label>
        </p>
        <button onClick={this.onCreateEmployee}>Create</button>
              </div>
      );
    }
}


export default EmployeeComponent