import React from 'react';

class Employee extends React.Component{
   constructor (props){
       super(props);
       this.state={
           updatepayment:null
       }

   } 
 getsalary=(income1)=>{
     this.setState({updatesalary:income1});
 }
   render(){
       return <div>

           <h1>Employee details...</h1>

           <p>
               <label>Employee Id :<b>{this.props.id}</b></label>

           </p>
           <p>
               <label>Employee Name:<b>{this.props.name}</b></label>
           </p>
           <p>
               <label>updatevalue:<b>{this.state.updatesalary}</b></label>
           </p>

           <Payment b={this.props.basicpayment}s={this.props.basicsalary}callback={this. getsalary}></Payment>


       </div>
   }
}

class Payment extends React.Component{
    constructor(props){
        super(props);
        this.state={
            basic: this.props.basicpayment,
            salary: this.props.basicsalary
        };
    }


    updatesalary=()=>{
    let income1= parseInt(this.refs.basic.value)+parseInt(this.refs.salary.value);
    this.props.callback(income1);

    }
    render(){
        return <div>

          <h1>payment Details...</h1>

          <p>
              <label>Basic payment:<input type="text"ref="basic" defaultValue={this.props.b}></input></label>

        </p> 
        <p>
            <label>Basic Salary:<input type="text"ref="salary" defaultValue={this.props.s}></input></label>
        </p>
          
          <button onClick={this.updatesalary}>update</button>
        </div>
    }
}

export default Employee;