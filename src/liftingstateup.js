import React from 'react';


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
//   ///else{
//       return this.props.children;
//  // }
      
  
//     }
  
//   }
  

class Ordercompo extends React.Component{
      constructor(props){
          super(props);
          this.state={quantity:'',address:''};

      }

      onchangeproperty=(val)=>{
          this.setState({quantity:val})
      };
      onchangeaddress=(val)=>{
          this.setState({address:val})
      };
      onchangesummery=(val)=>{
          this.setState({quantity:val})
      };

      render(){
          return(
              <div>
                  <h1>Orderinfo production</h1>
                  <Product quantity={this.state.quantity}callbackproperty={this.onchangeproperty}></Product>
                  <Detailsinfo address={this.state.address}callbackaddress={this.onchangeaddress}></Detailsinfo>
                  <Summery quantity={this.state.quantity} callbacksummery={this.onchangesummery} address={this.state.address}></Summery>
              </div>
          )
      }
}

class Product extends React.Component{
    constructor (props){
        super(props);

    }

    handleChange=(e)=>{
        this.props.callbackproperty(e.target.value);
    }

    render(){
        return(
            <div>
                <h1>Product Info:</h1>
                <p>
                    <label>
                        producinformation:
                        <select>
                            <option value="val1">Product1</option>
                            <option value="val2">Product2 </option>
                            <option value="val3">Product3</option>
                            <option value= "val4">Product4</option>
                        </select>
                    </label>
                </p>
                <p>
                    <label>Enter Quantity: <input type="text" value={this.props.quantity} onChange={this.handleChange}></input></label>
                </p>
            </div>
        )
    }

}

class Detailsinfo extends React.Component{
    constructor(props){
        super(props);

    }
    handleChange=(e)=>{
        this.props.callbackaddress(e.target.value);
    }
    render(){
        return(
            <div>
                <h1>Details info:</h1>
                <p>
                    <label>Address: <textarea value={this.props.address} onChange={this.handleChange}></textarea></label>
                </p>
             {/* <CustomErrorBoundary>
             <Errorboundry></Errorboundry>
             </CustomErrorBoundary>
                  */}
                
                
             
            </div>
        )
    }
}

// class Errorboundry extends React.Component{
  
//     constructor(props){
  
//       super(props);
  
//     }
  
//     render(){
//              throw new Error("Not able to Fetch the Addresses at this moment")
//         return (
//    <div>
//     <h2>Your Existing Addresses...</h2>
  
//           <p>
  
//             Office<br></br>
  
//             Marathahalli, Bangalore-560037
  
//           </p>
  
//         </div>     
  
//       );
  
//     }
  
// }


class Summery extends React.Component{
    constructor(props){
        super(props);

    }

    handleChange=(e)=>{
        this.props.callbacksummery(e.target.value);
    }
    render(){
        return(
            <div>
                <h1>Summery Info:</h1>
                <p>
                    <label>Enter Quantity: <input type="text" value={this.props.quantity} onChange={this.handleChange}></input></label>
                </p>
                <p>
                    <label>Adress:<b>{this.props.address}</b></label>
                </p>
            </div>
        )
    }
}

export default Ordercompo;