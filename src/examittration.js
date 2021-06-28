import react from "react";

class Student extends react .Component{
    constructor(props){
        super(props);
        this.state={
        updates:null
        };
        alert(this.state.total);

        
    }

getvalue=(total)=>{
    this.setState({update :total})
};

    render (){
        return<div>
            <h5>Student Info</h5>
            <p>
                <label>Student Id.<b>{this.props.id}</b></label>
            </p>
            <p>
                <label>Student Name.<b>{this.props.name}</b></label>
            </p>
            <p>
                <label>Student Class.<b>{this.props.class}</b></label>
            </p>
            <p>
                <label>Total value.<b>{this.state.update}</b></label>
            </p>
            <Marks h={this.props.hindi} e={this.props.english} p={this.props.punjabi} m={this,this.props.math} s={this.props.science} callback={this.getvalue}></Marks>
         
        </div>
    }
}


class Marks extends react.Component{
    constructor(props){
        super(props);
        this.state={
            hindi:this.props.h,
            english:this.props.e,
            punjabi:this.props.p,
            math:this.props.m,
            science:this.props.s
        };
        alert(this.props.h);
    }

    update=()=>{
        let total=parseInt(this.refs.hindi.value)+parseInt(this.refs.english.value)+parseInt(this.refs.punjabi.value)+parseInt(this.refs.math.value)+parseInt(this.refs.science.value);
        this.props.callback(total);
        
    }
   

    render(){
        return<div>
            <h5>Student Marks</h5>
            <p>
                <label>Hindi.<input type="text" ref="hindi" defaultValue= {this.state.hindi} ></input></label>
            </p>
            <p>
                <label>English.<input type="text" ref="english" defaultValue={this.state.english}></input></label>
            </p>
            <p>
                <label>Punjabi.<input type="text" ref="punjabi"defaultValue={this.state.punjabi}></input></label>
            </p>
            <p>
                <label>Maths.<input type="text"ref="math" defaultValue={this.state.math}></input></label>
            </p>
            <p>
                <label>science.<input type="text" ref="science" defaultValue={this.state.science}></input></label>
            </p>
            <button onClick={this.update}>update</button>

            
        </div>
    }
}


export default Student;