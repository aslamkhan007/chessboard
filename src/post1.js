import React from 'react';

class Person extends React.Component{
    constructor(props){
        super(props);
        this.state={
            message:''

        };
    }
    postemployee=()=>{
        let info={
            empid:this.refs.id.value,
            empname:this.refs.name.value,
            salary:this.refs.salary.value
        };
        fetch('https://localhost:44397/api/react',{
            method:"post",
            headers:{'content-type':'application/json'},
            body: JSON.stringify(info)
         } )
         .then(r=>r.json ()).then(
             result=>{
                 if (result =="ok"){
                     debugger;
                     this.setState({message:'New Employee is Created Successfully'});
                     alert(this.state.message);
                 }
             
                });
         
        
    }

    updateemployee=()=>{
        let info={
            empid:this.refs.id.value,
            empname:this.refs.name.value,
            salary:this.refs.salary.value
        };

        fetch('https://localhost:44397/api/react',{
            method:"PUT",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(info)
        })
        .then(r=>r.json())
        .then(result=>{
            if (result=="ok"){
            this.setState({message:'New Employee is update Successfully'});
            alert(this.state.message);
            }
        });
    }

    deleteemployee=()=>{
        let info={
            empid:this.refs.id.value,
            empname:this.refs.name.value,
            salary:this.refs .salary.value
        }

        fetch('https://localhost:44397/api/react',{
            method: "DELETE",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(info)

        })
        .then(r=>r.json())
        .then(result=>{
            if (result=='delete'){
                this.setState({message:'New Employee is deleted Successfully' });
                alert(this.state.message);
            }
        });
    }
    render(){
        return<div>
            <h3>post employee</h3>
            <p>
                <label>Person Id:        <input type ="text" ref="id"></input></label>

            </p>
            <p>
                <label>Person Name:     <input type ="text"ref="name"></input></label>

            </p>
            <p>
                <label>Person Salary:   <input type="text" ref="salary"></input></label>
            </p>
            <button onClick={this.postemployee}>Create</button>
            <button onClick={this.updateemployee}>Update</button>
            <button onClick={this.deleteemployee}>Delete</button>
        </div>
    }
}

export default Person;