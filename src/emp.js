import react from 'react';
import React from 'react';


class Employee extends react.Component{
  constructor(props){
    super(props);
    console.log(this.props);
  }
  render(){
    return <div>
      <h2> Employee Details ...</h2>
      <p>
        <lable>Employee Id :<b>{this.props.id}</b></lable>
      </p>
      <p>
      <lable>Employee name :<b>{this.props.name}</b></lable>
      </p>
      <p>
      <lable>Employee location :<b>{this.props.location}</b></lable>
      </p>
      <p>
      <lable>Employee salary :<b>{this.props.salary}</b></lable>
      </p>

      <Department a ={this.props.deptname}
      b={this.props.headName}></Department>

    </div>
  }
}
  class Department extends react.Component{
    render(){
      return<div>
        <h2> Department Details ...</h2>
      <p>
        <lable>dept Id :<b>{this.props.a}</b></lable>
      </p>
      <p>
      <lable>dept name :<b>{this.props.b}</b></lable>
      </p>
    
      </div>
    }
  }
  export default Employee;