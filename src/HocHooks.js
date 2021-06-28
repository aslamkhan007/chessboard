import React, { component } from "react";

function reportsHoc(inputComponent, inputData) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      // alert("hi");
      console.log(inputData);
     let datao ;
      // console.log(inputData.header);
      this.state = {
        data1: [],
        columns: inputData.columns,
        header: inputData.header,
      };

    }

    // let data2 = [];
    
    async  componentDidMount() {
      // let data3 = [];
      // await  fetch(inputData.url)
    // await  fetch("http://13.233.21.154/reactcrudapi/api/Employee")
    await  fetch(inputData.url)
        .then((res) => res.json())
        .then((result) => {
          //  console.log(result);
          //  console.log(this.state.data);
          this.setState({
            data1: result
          }),
         // datao = result;



          // console.log(this.state.data);
        );
    }
    
    render() {
      // return <Data data="1"></Data>;
     
      //console.log(this.state.data1) 
     // console.log(datao)
      return(
       
      <Data data={this.state.data1}></Data>
       
      )
        
      
      // return <Data data={this.state}></Data>;
      // return <Data ></Data>;
    //  return <div>hi</div>;
    }
  };
}

class Data extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    console.log('hi');
    
    // console.log(this.props.data.data);
    // console.log(this.props.header);
    console.log(this.props.data);
  }
  render() {
    return (
      <div>
        <h2>{this.props.header}...</h2>
        {/* <table>
          <tr>
            {this.props.data.columns.map((c) => {
              <th>{c}</th>;
            })}
          </tr>
          <tbody>
            {this.props.data.data.map((r) => {
              <tr key={r.EmployeeID}>
                {this.props.data.columns.map((c) => {
                  <td key={r[c]}></td>;
                })}
              </tr>;
            })}
          </tbody>
        </table> */}
      </div>
    );
  }
}

class Reports extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div></div>;
  }
}

const EmployeeReports = reportsHoc(Reports, {
  url: "http://13.233.21.154/reactcrudapi/api/Employee",
  columns: ["EmployeeID", "EmployeeName", "Department", "MAilId", "Doj"],
  header: "Employee Data",
});

// const DepartmentReports = reportsHoc(Reports, {
//   url: "http://13.233.21.154/reactcrudapi/api/Department",
//   columns: ["DepartmentId", "DepartmentName"],
//   header: "Department Data",
// });

// class Employee extends React.Component {
//   constructor(props) {
//     alert("hi");
//     super(props);
//     this.state = {
//       employee: [],
//     };
//   }

//   componentDidMount() {
//     alert("compo");
//     fetch("http://13.233.21.154/reactcrudapi/api/Employee")
//       .then((res) => res.json())

//       .then((results) => {
//         console.log(results);
//         this.setState({ employee: results });
//       });
//   }

//   render() {
//     const { employee } = this.state;
//     alert("hlo");
//     return (
//       <div>
//         <h2>Employee Data ...</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>EmployeeId</th>
//               <th>EmployeeName</th>
//               <th>Department</th>
//               <th>MAilId</th>
//               <th>Doj</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employee.map((emp) => (
//               <tr key={emp.EmployeeID}>
//                 <td>{emp.EmployeeID}</td>
//                 <td>{emp.EmployeeName}</td>
//                 <td>{emp.Department}</td>
//                 <td>{emp.MAilId}</td>
//                 <td>{emp.Doj}</td>
//               </tr>
//             ))}
//                 {/* {employee.map((emp,i) => (

//               //   if(i>1){

//               <tr key={i}>
//                 <td>{emp.EmployeeID}</td>
//                 <td>{emp.EmployeeName}</td>
//                 <td>{emp.Department}</td>
//                 <td>{emp.MAilId}</td>
//                 <td>{emp.Doj}</td>
//               </tr>
//               //   }

//     ))} */}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// class Department extends React.Component {
//   constructor(props) {
//     alert("hi");
//     super(props);
//     this.state = {
//       department: [],
//     };
//   }

//   componentDidMount() {
//     alert("compo");
//     fetch("http://13.233.21.154/reactcrudapi/api/Department")
//       .then((res) => res.json())

//       .then((results) => {
//         console.log(results);
//         this.setState({ department: results });
//       });
//   }

//   render() {
//     const { department } = this.state;
//     alert("hlo");
//     return (
//       <div>
//         <h2>Employee Data ...</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>DepartmentId</th>
//               <th>DepartmentName</th>
//             </tr>
//           </thead>
//           <tbody>
//             {department.map((dep, index) => (
//               <tr key={index}>
//                 <td>{dep.DepartmentId}</td>
//                 <td>{`${dep.DepartmentName} ${index}`}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

export class Abc extends React.Component {
  render() {
    return (
      <div>
        <EmployeeReports></EmployeeReports>
        {/* <DepartmentReports></DepartmentReports> */}
      </div>
    );
  }
}

export default Abc;
