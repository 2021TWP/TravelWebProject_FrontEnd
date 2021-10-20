import React, { Component } from 'react'
import GroupContainer from './Authentication/Containers/GroupContainer';
import LoginContainer from './Authentication/Containers/LoginContainer';
import RegisterContainer from './Authentication/Containers/RegisterContainer';
import BoardInputContainer from './Board/Containers/BoardInputContainer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './Header'
import EmailConfirmedContainer from './Authentication/Containers/EmailConfirmedContainer';
import PasswordResetContainer from './Authentication/Containers/PasswordResetContainer';


class App extends Component {
  render() {
    return (
      <Router>
        {window.location.href !== 'http://localhost:3000/authentication/login' && window.location.href !=="http://localhost:3000/authentication/signup"
        && window.location.href !== 'http://localhost:3000/authentication/login/' && window.location.href !=="http://localhost:3000/authentication/signup/"
        ? <Header/> 
        : null}
        <Switch>
          <Route exact path="/authentication/login/" component={LoginContainer}/>
          <Route exact path="/authentication/signup/" component={RegisterContainer}/>
          <Route exact path="/authentication/emailconfirmed/" component={EmailConfirmedContainer}/>
          <Route exact path="/authentication/password/reset/" component={PasswordResetContainer} />


        </Switch>
      </Router>
      // <Router>
      //   <div>
      //     <nav>
      //       <ul>
      //         <li>
      //           <Link to = '/'/>
      //         </li>
      //         <li>
      //           <Link to = '/Home/'/>
      //         </li>
      //         <li>
      //           <Link to = '/authentication/'/>
      //         </li>
      //         <li>
      //           <Link to = '/schedule/'/>
      //         </li>
      //         <li>
      //           <Link to = '/MyPage/'/>
      //         </li>
      //         <li>
      //           <Link to = '/Board/'/>
      //         </li>
      //       </ul>
      //     </nav>
      //     <Switch>
      //       <Route path="/home/">
      //         {/* <Home /> */}
      //       </Route>
      //       <Route path="/home/">
      //         {/* <Home /> */}
      //       </Route>
      //       <Route path="/home/">
      //         {/* <Home /> */}
      //       </Route>
      //       <Route path="/home/">
      //         {/* <Home /> */}
      //       </Route>
      //     </Switch>
      //   </div>
      // </Router>
    )
  }
}
export default App;