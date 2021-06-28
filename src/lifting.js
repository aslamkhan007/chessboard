import react from 'react';

// class CustomErrorBoundary extends React.Component {

//     constructor(props) {
  
//       super(props);
  
//       this.state = { hasError: null };
  
//     }
  
  
  
//     static getDerivedStateFromError(error) {
  
//       return { hasError: true };
  
//     }
  
  
  
//     componentDidCatch(error, errorInfo) {
  
//       console.log(error);
  
//       console.log(errorInfo);
  
//     }
  
  
  
//     render() {
  
//       if (this.state.hasError) {
  
//         // Error path
  
//         return (
  
//           <div>
  
//             <h2>We are having Problems to Load your Preferred Addresses. Please Select...</h2>
  
            
  
//           </div>
  
//         );
  
//       }
  
//       // Normally, just render children
  
//       return this.props.children;
  
//     }
  
//   }
  

class Orderinfoclass extends react.Component{
    constructor(props){
        super(props);
        this.state={quanity:'',address:''};

    }
    onchangeproduct=val=>{
        this.setState({quanity:val});
    }
    onchangeaddres=val=>{
        this.setState({address:val});
    }
    onchnagesummery=val=>{
        this.setState({quanity:val});
    }
    render(){
        return(
        <div>
            <h2>product oreder </h2>
            <Productinfo quanity={this.state.quanity} onchangeproduct={this.onchangeproduct}></Productinfo>
            <Addressino address={this.state.address}onchangeaddres={this.onchangeaddres}></Addressino>
            <Summeryinfo quanity={this.state.quanity} onchnagesummery={this.onchnagesummery} address={this.state.address}></Summeryinfo>
            <button>create</button>
         </div>
        )
       
    }
}

class Productinfo extends react.Component{
constructor(props){
    super(props);

}
handlechange=(e)=>{
    this.props.onchangeproduct(e.target.value);
}
render(){
    return(
        <div style={{border:'4px solid red'}}>
            <h2>Product info..</h2>
            <p>
                <label> producinformation:
                    <select>
                        <option value='val1'>Product1</option>
                        <option value='val2'>Product2</option>
                        <option value='val3'>Product3</option>
                    </select>

                </label>
            </p>
            <p>
                <label>enter quantity: <input type="text" value={this.props.quanity} onChange={this.handlechange}></input></label>
            </p>
        </div>
    )
}
}



class Addressino extends react.Component{
    constructor(props){
        super(props);

    }
    handlechange=(e)=>{
        this.props.onchangeaddres(e.target.value);
    }
    render(){
        return(
            <div style={{border:'4px solid green'}}>
                <h2>Addressino details:</h2>
                <p>
                    <label>Address info:<textarea value={this.props.address} onChange={this.handlechange}></textarea></label>
                </p>
             
                    <UserPreferredAddressList></UserPreferredAddressList>
          
            </div>
        )
    }
}

class UserPreferredAddressList extends React.Component{
  
    constructor(props){
  
      super(props);
  
    }
  
    render(){
        // throw new Error("Not able to Fetch the Addresses at this moment");
        return (
  
        <div>
  
          <h2>Your Existing Addresses...</h2>
  
          <p>
  
            Office<br></br>
  
            Marathahalli, Bangalore-560037
  
          </p>
  
        </div>     
  
      );
  
    }
  
}


  
  
class Summeryinfo extends react.Component{
    constructor(props){
        super(props);

    }
    handlechange=(e)=>{
        this.props.onchnagesummery(e.target.value);
    }
    render(){
        return(
            <div style={{border:'4px solid yellow'}}>
                <h2>Summery info:</h2>
                <p>
                    <label>product name:<b>Product1</b></label>
                </p>
                <label>Enter Quantity:<input type="text" value={this.props.quanity} onChange={this.handlechange}></input></label>
                <p>
            <label>Adress:<b>{this.props.address}</b></label>
            </p>
            <button>create</button>
            </div>

        )
    }
}

export default Orderinfoclass;