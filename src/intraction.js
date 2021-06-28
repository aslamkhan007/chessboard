import react from 'react';

class Employee extends react.Component{
    constructor(props){
        super(props);
        this.state={
            updatevalue:null
        };
    }

    getpayment=(income)=>{
        this.setState({getupdate:income})
    }

    render(){
        return<div>
            <h1>Employee Details...</h1>
            <p>
                <label>Employee Id:<b>{this.props.id}</b></label>
            </p>
            <p>
                <label>Employee Name:<b>{this.props.name}</b></label>
            </p>
            <p>
                <label>Total Salary<b>{this.state.getupdate}</b></label>
            </p>
            <Salary ba={this.props.basicsalary} hr={this.props.HRA} call={this.getpayment}></Salary>
        </div>
    }
}


class Salary extends react.Component{
    constructor(props){
        super(props);
        // this.state={
        //  basic:this.props.basicsalary,
        //  hra : this.props.HRA
        // };
        this.state={
            basic:this.props.ba,
            hra : this.props.hr
           };
         alert(this.props.ba);
    

    }

    getupdate=()=>{
        let income = parseInt(this.refs.basic.value)+ parseInt(this.refs.hra.value);
        this.props.call(income);
    }
    chan=()=>{
        this.getupdate();
    }


    render(){
        // alert("hi");
        return<div>
            <h1>Salary Details..</h1>
            <p>
                 <label>Basic Salary: <input type = "text"  onChange={this.chan} ref="basic" defaultValue={this.props.ba}></input></label> 
               {/* <label>Basic Salary: <input type = "text" ref="basic" defaultValue={this.state.basic}></input></label>*/}

            </p>    
            <p>
                 <label>HRA:<input type ="text" ref ="hra"defaultValue={this.props.hr}></input></label> 
              {/*  <label>HRA:<input type ="text" ref ="hra" defaultValue={this.state.hra}></input></label>*/}
            </p>
            <button onClick={this.getupdate}>update</button>
        </div>
    }
}



export default Employee;