import logo from './logo.svg';
import './App.css';

// import  EmployeeComponent from './get'
import Work from './get1'
import Person from './post1'
import Salary from './salary';
// import Employee from './post2'
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';


function App() {
  return (
   <div>
    <h2>Welcome to App Component...</h2>
    <ol>
      <li ClassName="testClass"><Link to="/geting">GETSS</Link></li>
      <li><Link to="/posting">possts</Link></li>
      <li><Link to ="/pay">payment</Link></li>
    </ol>
    <Switch>
    <Route exact path="/" component={Person}></Route>
    <Route path="/geting" component={Work}></Route>
    <Route path="/posting" component={Person}></Route>
    <Route path="/posting" component={Salary}></Route>
    <Route path="/pay" component={Salary}></Route>
  </Switch>
    </div>
  );
}

export default App;
