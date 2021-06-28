import React from 'react';
import Employee from './getdata';

class EmployeeComponent extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        Id:''
    };
  
}
changeHandler = e => {
    this.setState({
      Id:e.target.value
    });
}
onCreateEmployee=()=>{
    console.log(this.state.Id);    
  }
    render() {
        return (
            <div>
                <form>
                    <p>
                        <label>Employee ID : <input type="text" name="Id" value={this.state.Id} onChange={this.changeHandler} ></input></label>
                    </p>
                    <button onClick={this.onCreateEmployee}>Create</button>
                </form>
            </div>
        )

    }
}

export default EmployeeComponent;