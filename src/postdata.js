import react from 'react';


class Posting extends react.Component{
    constructor(props){
        alert("componen");
        super(props);
        this.state={
            msg:''
        };
    }

    componentDidMount() {
        alert("comp");
       }
    postingemployee=()=>{
        let info ={
            id:this.refs.id.value,
            name:this.refs.name.value,
            salary:this.refs.salary.value
        };

        fetch('https://localhost:44386/api/crud',{
            method: "POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(info)

        }).then(res=>res.json())
          .then(
            result=>{
                if (result=="posting succesfully"){
                    this.setState({msg:"posting succesfully"})
                    alert(this.state.msg);
                }
            });
    }


updateemployee=()=>{
    let info={
        id:this.refs.id.value,
        name:this.refs.name.value,
        salary:this.refs.salary.value
    };

    fetch("https://localhost:44386/api/crud",{
        method:"PUT",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(info)

    }).then(res=>res.json())
    .then(
        result=>{
        if(result=="updated"){
            this.setState({msg:"update succesfully"})
            alert(this.state.msg);
        }
    });

}

deleteemployee=()=>{
    let info={
        id:this.refs.id.value,
        name:this.refs.name.value,
        salary:this.refs.salary.value
    }
    fetch("https://localhost:44386/api/crud",{
        method:"delete",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(info)

    }).then(res=>res.json())
    .then(result=>{
        if (result=="deleted"){
            this.setState({msg:"delete succesfully"})
            alert(this.state.msg);
        }
    });
}
render(){
    alert("hi");
    return<div>
        <h1>posting Data</h1>
        <p>
            <label><b>Employee Id:<input type="text" ref="id"></input></b></label>

        </p>
        <p>
            <label><b>Employee Name: <input type="text" ref="name"></input></b></label>
        </p>
        <p>
            <label><b>Employee Salary :<input type="text"ref="salary"></input></b></label>

        </p>
        <button onClick={this.postingemployee}>post</button>
        <button onClick={this.updateemployee}>update</button>
        <button onClick={this.deleteemployee}>delete</button>
    </div>
}


}

 
export default Posting;