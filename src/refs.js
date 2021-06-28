 import React from 'react';
//  import video from '../src/assets/1.mp4';

import React, {Component,useState} from 'react';
// import react from 'react';

class IncreamnetQuantity extends React.Component{
    constructor(props){
        super(props);
    
        this.quantityRef= React.createRef();
    }
    increament=()=>{
     this.quantityRef.current.value++;
    }
    render(){
        alert("msg");
        return(
            <div>
                <p>
                <label> Enter Quantity: <input type="text"  ref={this.quantityRef}></input></label>
                </p>
                <button onClick ={this.increament}>+</button>
            </div>
        )
    }
}



class Login1 extends React.Component{
    constructor(props){
        super(props);
        this.usenameRef=React.createRef();
        this.buttonRef= React.createRef();
    }

    componentDidMount(){
     
        this.buttonRef.current.disabled = true;
    }
    render(){
        return(
            <div>
                <h1>Log In </h1>
                <p>
                    <label>User Name:<input type="text" ref={this.usenameRef}></input></label>
                </p>
                <p>
                    <label>Pasword :<input type="text"></input></label>
                </p>
                <button  ref={this.buttonRef}>Login </button>
            </div>
        )
    }
}

class Login56 extends React.Component{
    constructor(props){
        super(props);
        this.videoRef= React.createRef();
    }
    playvideo=()=>{
     this.videoRef.current.play();
    }
    pause=()=>{
        this.videoRef.current.pause();
    }
    render(){
        return(
            <div>
                <video ref={this.videoRef} height="200" width="300"controls>
                <source src= {video} type="video/mp4"></source>
                </video>
                    <div>
                    <button onClick={this.playvideo}>play</button>
                    </div>




                    <button onClick={this.pause}>pause</button>
                
            </div>
        )
    }
}



class Login3 extends React.Component{
    constructor(props){
        super(props);
        this.state={quatity:0};
    }
    increament=()=>{
        this.setState({quatity:this.state.quatity+1});
    }
    render(){
        alert("msg");
        return(
            <div>
            <h1> IncreamnetQuantity:</h1>
            <p>
            <label> Enter Quantity: <input type="text" value={this.state.quatity}></input>
            </label>
            </p>
            <button onClick={this.increament} >+</button>
            </div>
        )
    }
}


class Login4 extends React.Component{
    constructor(props){
        super(props);
        this.quantityRef=createRef();

    }
    componentDidMount(){
        this.quantityRef.current.disabled=true;
    }
    increament=()=>{
        this.quantityRef.current.disabled= true;
    }
    render(){
        return(
            <div>
            <h2> IncreamnetQuantity:</h2>
            <p>
            <label> Enter Quantity: <input type="text"ref={this.quantityRef}></input></label>
            </p>
            <button onClick={this.increament}>+</button>
            </div>
        )
    }
}

class Login5 extends React.Component{
    constructor(props){
        super(props);
        this.username= createRef();
        this.Pasword=createRef();
    }
    componentDidMount(){
        this.username.current.focus();
        this.Pasword.current.disabled= true;
    }
    render(){
        return(
            <div>
            <p>
            <label> Username: <input type="text" ref={this.username}></input></label>
            </p>
            <p>
            <label>Pasword: <input type="text" ref={this.Pasword}></input></label>
            </p>
            <button>log in </button>
            </div>
        )
    }
}

class Login7 extends React.Component{
    constructor(props){
        super(props);
        this.video=React.createRef();
    }
    play=()=>{
        this.video.current.play();
    }
    pause=()=>{
        this.video.current.pause();
    }
    render(){
        return(
            <div>
            <video ref={this.video} height="720" width="480"controls>
            <source src={video} type="video/mp4"></source>
            </video>
            
            <div>


                 <button onClick={this.play}>play</button>
            <button onClick={this. pasuse}>pause</button>
            </div>

            </div>
        )
    }
}


function Login (){
const [name,setName] = useState();

handleChange=(e)=>{
    setName(e.target.name)

}
return(
    <div>
    <p>
    <label> Enter name:
    <input type="text"> value={name} onChange={handleChange}</input>
    </label>
    </p>
    <p>
    Employee:<b>{name}</b>
    </p>
    </div>
)
}

export default Login;