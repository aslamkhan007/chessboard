import react from 'react';

class Employee extends react.Component{
    constructor (props){
        // alert("constructor");
        super(props);
        this.state = {
            Employee:[]
        };
    }

    componentDidMount () {
        // alert("compo");
        fetch("https://itunes.apple.com/search?term=a")
        .then(response=>response.json())
        .then(
            (result)=>{
                this.setState({Employee:result});
            }
        )

    }


    render (){
        // alert("rend");
        return <div>
            <h1>Employee Get Data ...</h1>
            <table>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee Name</th>
                        <th>Employee Salary</th>
                    </tr>

                </thead>

                <tbody>
                    {this.state.Employee.map(worker=>(
                      <tr key={worker.id}>
                          <td>{worker.id}</td>
                      <td>{worker.name}</td> 
                      <td>{worker.salary}</td> 
                      </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>

    }
}


export default Employee;