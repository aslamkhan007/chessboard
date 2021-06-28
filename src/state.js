 import { render } from '@testing-library/react';
import react from 'react';
import React from 'react';



// class Employee1 extends react.Component{
    // count = 0;
    // addEmployee = ()=>{
    //      this.count= this.count+1;
    //      alert("adding a new employee"+this.count+"times");
        
    // }
    // render(){
    //      alert("hi");
    //     return<div>
    //         <h3>Employee Details..</h3>
    //         <p>
    //             <button onClick={this.addEmployee}> addEmployee</button>
    //         </p>
    //     </div>

// constructor(props){
//     super(props);
//     this.state={
//         count:0
//     }
// }
  
//     addEmployee = ()=>{
//       this.setState({count:this.state.count+1});
//         alert("adding a new employee"+this.state.count+"times");
        
//     }
//     render(){
//          //alert("hi");
//         return<div>
//             <h3>Employee Details..</h3>
//             <p>
//                 <button onClick={this.addEmployee}> addEmployee</button>
//             </p>
//             <p>
//                 <label>addEmployee<b>{this.state.count}</b>times</label>
//             </p>
//         </div>

//     }
// }

// class CountCharacters extends React.Component{

//         constructor(props){
    
//             super(props);
    
//             this.state={
    
//                 message:'hi'
    
        
    
//             };
    
//         }
    
//         onMessageChange = (e) => {
//             this.setState({
//                 message: e.target. value.length
//             });
//         }
//         render(){
//             return <div>
//                 <h2>Welcome to Count Characters Component...</h2>
//                 <p>
    
    
           
//                     <label>Enter Message : <input type="text"  name = "moni"
//                                 onChange={this.onMessageChange}></input></label>
    
    
//                 </p>
    
//                 {/* <p>
//                     <label>{this.state.message}</label>
//                 </p> */}
//                 <p>
//                      <label>{this.state.message}</label> 
//                 </p>
//             </div>
//         }
//     }



// class CountCharacters extends react.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             message:""

//         }
//     }
//     messagechange=(e)=>{
//         this.setState({
//             message:e.target.value.length
//         })
//     }
//     render(){
//         return<div>
//             <h2>employee details....</h2>

//             <p>
//                 <label>enter mas:<input type="text"
//                 onChange={this.messagechange}></input></label>
//             </p>
//             <p>
//                 <label>{this.state.message}</label>
//             </p>
//         </div>
//     }
// }


class Employee extends react.Component{
    constructor(props){
        super(props);
        this.state ={
            updatesalary:null
        }
        
    }
    getupdatesalary=(income)=>{
      this.setState({updatesalary:income});
    }
    render(){
        return<div>
            <h1>Employee Details......Component</h1>
            <p>
                <lable> Employee id:<b>{this.props.id}</b></lable>
            </p>
            <p>
            <lable> Employee name:<b>{this.props.name}</b></lable>
            </p>
            <p>
            <lable> Employee location:<b>{this.props.location}</b></lable>
            </p>
            <p>
            <lable> Employee salary:<b>{this.props.salary}</b></lable>
            </p>
            <p>
                <label>update Total Salary <b>{this.state.updatesalary}</b></label>
            </p>
            <SalaryDetails a={this.props.BasicSalary} b={this.props.HRA} c={this.props.Allowance}callbackproperty={this.getupdatesalary}></SalaryDetails>
        </div>
    }
}

    class SalaryDetails extends react.Component{
        constructor(props){
            super(props);
            this.state={
                ba : this.props.BasicSalary,
                hr : this.props.HRA,
                sa : this.props.sapacialAllowance

               
            

            };
        }
        updatesalary =()=>{
            let income= parseInt(this.refs.ba.value)+parseInt(this.refs.hr.value)+parseInt(this.refs.sa.value);
            this.props.callbackproperty(income);

        }
        render(){
            return<div>
                <h1>SalaryDetails.....</h1>
                 <p>
                <lable> Basic salary:<input type="text" ref ="ba" defaultValue={this.props.a}></input></lable>
            </p>
            <p>
            <lable> HRA:<input type="text" ref ="hr" defaultValue={this.props.b}></input></lable>
            </p>
            <p>
            <lable> spacial Allowance:<input type="text"ref ="sa" defaultValue={this.props.c}></input></lable>
            </p>
            <button onClick={this.updatesalary}>update</button>
                 
            </div>
           
        }
    
    }
    

    export default Employee;