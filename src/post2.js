import React from 'react';

class Eemployee extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            msg:''
        };
    }
    
componentDidMount() {
    // alert("compon");
   }



    clear(){
   this.refs.Id.value = "";
 }
   
   oncreateEmployee=()=>{
    let empInfo={
   
   
      empid:this.refs.Id.value,
      empname:this.refs.Name.value,
          
          salary:this.refs.Salary.value
     
     
        };

        
    fetch('https://localhost:44397/api/react',{
        method: 'POST',
        headers:{'Content-type':'application/json'},
          body: JSON.stringify(empInfo) 
      }).then(r=>r.json()).then(res=>{
        if(res=="ok"){
            this.setState({msg:'New Employee is Created Successfully'});
          alert(this.state.msg);
        }
      });
  }


  onupdateEmployee=()=>{
    let empInfo={
   
   
      empid:this.refs.Id.value,
      empname:this.refs.Name.value,
          
          salary:this.refs.Salary.value
     
     
        };

        
    fetch('https://localhost:44397/api/react',{
        method: 'PUT',
        headers:{'Content-type':'application/json'},
          body: JSON.stringify(empInfo) 
      }).then(r=>r.json()).then(res=>{
        if(res){
            debugger;
            this.setState({msg:'New Employee is Updated Successfully'});
          alert(this.state.msg);
        }
      });
  }



  ondeleteEmployee=()=>{
    let empInfo={
   
   
      empid:this.refs.Id.value
      
     
     
        };

      
        
    fetch('https://localhost:44397/api/react',{
        method: 'DELETE',
        headers:{'Content-type':'application/json'},
          body: JSON.stringify(empInfo) 
      }).then(r=>r.json()).then(res=>{
        if(res=="delete"){
            
          debugger;
            this.setState({msg:' Employee is Deleted Successfully'});
          alert(this.state.msg);
          
        }
      });
  }


    render(){
        return<div>
            <h1>Employee Details post...</h1>

            <p>
                <label> employee id: <input type ="text" ref="Id"></input></label>
            </p>
            <p>
                <label> employee name: <input type="text" ref="Name"></input></label>
            </p>
            <p>
                <label>employee salary <input type = "text"ref="Salary"></input></label>
            </p>
            <button onClick ={this.oncreateEmployee}>Create</button>
            <button onClick ={this.onupdateEmployee}>Update</button>
            <button onClick ={this.ondeleteEmployee}>Delete</button>
        </div>
    }
}

export default Eemployee;