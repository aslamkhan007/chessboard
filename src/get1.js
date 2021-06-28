import React from 'react';
import reactDom from 'react-dom';


class Work extends React.Component{
    constructor(props){
        super(props);
        this.state={
            msg:[]
        };
    }
   

    componentDidMount(){
        fetch('https://localhost:44397/api/react')
        .then(res=>res.json())
        .then(
            (result)=>{
                this.setState({msg:result})
            }
        )
    }
    render(){
        return<div>
            <h2>worker data..</h2>
            <table>
                <thead>
                    <tr>
                        <td>Work Id:</td>
                        <td>Work Name:</td>
                        <td>Work Salary</td>
                    </tr>
                </thead>
                <tbody>
                    {
                    this.state.msg.map(a=>(

                    <tr key ={a.empid}>
                        <td>{a.empid}</td>
                        <td>{a.empname}</td>
                        <td>{a.salary}</td>


                    </tr>

                    ))}
                    
                </tbody>
            </table>
        </div>
    }
}
export default Work;