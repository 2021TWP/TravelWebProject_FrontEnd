import React, { Component } from 'react'
import BoardInputContainer from './Board/Containers/BoardInputContainer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BoardListContainer from './Board/Containers/BoardListContainer';
import BoardDetailContainer from './Board/Containers/BoardDetailContainer';

class App extends Component {
  render() {
    return (
      <div>

        <BoardInputContainer />

        <BoardListContainer />

        <BoardDetailContainer />

      </div>
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