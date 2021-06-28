import React from 'react';

class EmployeeComponent extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        employee:{
        Id:'',
        Name:'',
        Location:'',
        Salary:''
        }
    };
  
  
}
onchangeHandler = e => {
    const name = e.target.name;
    this.setState({
        
        employee:{
            ...this.state.employee,
            [name]: e.target.value
          }
      
    });

    console.log(this.state.employee);
}
onCreateEmployee=()=>{
    console.log(this.state.employee);    
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
        return (
           <div>
                <form>
                    <p>
                        <label>Employee ID : <input type="text" name="Id" value={this.state.employee.Id}
                            onChange={this.onchangeHandler} ></input>
                        </label>
                    </p>
                    <p>
                        <label>Employee Name : <input type="text" name="Name"
                            value={this.state.employee.Name}
                            onChange={this.changeHandler}></input>
                        </label>
                    </p>
                    <p>
                        <label>Employee Location : <input type="text" name="Location"
                            value={this.state.employee.Location}
                            onChange={this.changeHandler}></input>
                        </label>
                    </p>
                    <p>
                        <label>Employee Salary : <input type="text" name="Salary"
                            value={this.state.employee.Salary}
                            onChange={this.changeHandler}></input>
                        </label>
                    </p>
                    
                </form>
                <button onClick={this.onCreateEmployee}>Create</button>
                </div>
               
            
        )

    }
}


export default EmployeeComponent;