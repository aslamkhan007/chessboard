import React from 'react';

class Workercomp extends React.Component{
    constructor(props){
        alert("constructor");
        super(props);
        this.state={
            employees:[]
        };
    }
    componentDidMount() {
        alert("compon did");
        debugger;
        
        fetch('https://localhost:44397/api/mytest')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            employees: result
          });
        }
      );
    }
    render(){
        alert("rend");
        return<div>
            <h2>employee details...</h2>
            <table>
                <thead>
                <tr>
              <th>Id</th>
              <th>Name</th>
     
              <th>Salary</th>
            </tr>
                </thead>
            </table>
        </div>
    }
}


export default Workercomp;