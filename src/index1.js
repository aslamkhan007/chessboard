import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
// import Employee from './state'
//import Worker from './component'


//import EmployeeComponent from './get'



//   const element =<Employee id="1" name="salim" location="phagwara" salary="10000" deptname="101" headName="soft"></Employee>
//  ReactDOM.render(element,document.getElementById("root"));

// //ok
// const element=<Employee id="1" Name="salim" Bs="10000" hra="5000" ></Employee>
// ReactDOM.render(element,document.getElementById("root"));
// const element=<Worker id="1"name="salim" basic="10000" hra="23" ></Worker>
// ReactDOM.render(element,document.getElementById("root"));



 


// import React from 'react';
// import ReactDOM from 'react-dom';

// class Employee extends React.Component {
//     countwe=0;

//     addEmployee = () => {

//         this.countwe=this.countwe+1;
//         // alert('Clicked on addEmployee Method');
//         alert(this.countwe);
//     }
//     render() {
// alert('rendered');

//       return <div>
//           <h2>Employee Component...</h2>
//           <p>{this.countwe}</p>
//           <button onClick={this.addEmployee}>Add Employee</button>
//       </div>
//     }
//   }

//   const element1=<Employee></Employee>
//   ReactDOM.render(element1,document.getElementById("root"));


// import React from 'react';
// import ReactDOM from 'react-dom';

// class Employee extends React.Component {
//     constructor(props)
//     {
//         super(props);
//         this.state = {
//             count:0
//         };
//     }

//     addEmployee = () => {

//         this.setState({count: this.state.count + 1});
//         // alert('Clicked on addEmployee Method');
//         alert(this.state.count);
//     }
//     render() {
// alert('rendered');

//       return <div>
//           <h2>Employee Component...</h2>
//           <p>{this.state.count}</p>
//           <button onClick={this.addEmployee}>Add Employee</button>
//       </div>
//     }
//   }

//   const element1=<Employee></Employee>
//   ReactDOM.render(element1,document.getElementById("root"));

// import React from 'react';
// import ReactDOM from 'react-dom';

// class CountCharacters extends React.Component{

//     constructor(props){

//         super(props);

//         this.state={

//             message:''

    

//         };

//     }

//     onMessageChange = (f) => {
//         this.setState({
//             message: f.target.value.length
//         });
//     }
//     render(){
//         return <div>
//             <h2>Welcome to Count Characters Component...</h2>
//             <p>


       
//                 <label>Enter Message : <input type="text"  name = "moni"
//                             onChange={this.onMessageChange}></input></label>


//             </p>

//             <p>
//                 <label>{this.state.message}</label>
//             </p>
//             <p>
//                 {/* <label>{this.state.counter}</label> */}
//             </p>
//         </div>
//     }
// }


//   const element1=<CountCharacters></CountCharacters>
//   ReactDOM.render(element1,document.getElementById("root"));