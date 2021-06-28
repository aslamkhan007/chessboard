import react from 'react';

class Post extends react.Component{
    constructor(props){
        super(props);
        this.state={
            msg:''
        };
    }

    componentDidMount() {
        alert("compon");
       }
    
       clear()
       {
           this.refs.Id.value = "";
           this.refs.name.value = "";
           this.refs.salary.value = "";
       }
      
 
     
    insertemployee=()=>{
        let info={
            id:this.refs.id.value,
            name:this.refs.name.value,
            salary:this.refs.salary.value
        }
       

        fetch("https://localhost:44386/api/crud",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(info)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result=="posting succesfully"){
                this.setState({msg:"posting succesfully"})
                alert(this.state.msg);

                
            }
        });
      
    }
   
    onupdate=()=>{
        let info={
            id: this.refs.id.value,
            name:this.refs.name.value,
            salay:this.refs.salary.value
        }
        fetch("https://localhost:44386/api/crud",{
            method:"put",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(info)

        })
        .then(res=>res.json())
        .then(result=>{
            if(result=="updated"){
                this.setState({msg:"update succesfully"})
                alert(this.state.msg);
            }
        });
    }
    deleteemp=()=>{
        let info={
            id: this.refs.id.value,
            name:this.refs.name.value,
            salay:this.refs.salary.value
        }
        fetch("https://localhost:44386/api/crud",{
            method:"delete",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(info)

        })
        .then(res=>res.json())
        .then(result=>{
            if(result=="deleted"){
                this.setState({msg:"delete succesfully"})
                alert(this.state.msg);
            }
        });
    }
  
    render(){
        return<div>
            <h1>Insert Data</h1>
           

            <p>
                <label><b>Employee ID: <input type="text" ref="id"></input></b></label>
            </p>
            <p>
                <label><b>Employee Name:<input type ="text" ref="name"></input></b></label>
            </p>
            <p>
                <label><b>Employee Salary:<input type="salary" ref="salary"></input></b></label>
            </p>
            <button onClick={this.insertemployee}>Insert</button>
            <button onClick={this.onupdate}>Update</button>
            <button onClick={this.deleteemp}>Delete</button>

        </div>
    }
}

export default Post;