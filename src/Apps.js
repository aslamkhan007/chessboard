import Employee from './getdata';
import Post from './postdata2';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
// import EmployeeComponent from './buildform3';
import NewEmployeeComponent from './buildform3';



function App() {
    return (
     <div>
      <h2>Welcome to App Component...</h2>
      <ol>
        <li><Link to="/geting">salary</Link></li>
        <li><Link to="/posting">Employee</Link></li>
      
      </ol>

      {/* <Switch> */}
      {/* <Route exact path="/" component={Person}></Route> */}

      <Route path="/geting" component={Employee}></Route>
      <Route path="/posting" component={Post}></Route>
    
    
    {/* </Switch> */}
    {/* <EmployeeComponent></EmployeeComponent> */}
    <NewEmployeeComponent></NewEmployeeComponent>
      </div>
    );
  }

  
  
  export default App;
  