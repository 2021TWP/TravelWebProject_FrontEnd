import React, { Component } from 'react'
import GroupContainer from './Authentication/Containers/GroupContainer';
import LoginContainer from './Authentication/Containers/LoginContainer';
import RegisterContainer from './Authentication/Containers/RegisterContainer';
import BoardInputContainer from './Board/Containers/BoardInputContainer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ScheduleMainPage from './Schedule/page/ScheduleMainPage';
import ScheduleInputContainer from './Schedule/containers/ScheduleInputContainer';
import ScheduleDetailView from './Schedule/views/ScheduleIDetailView';

class App extends Component {
  render() {
    return (
      <Router>
        
       {/* <Link to='/schedules/'>  */}
          <Switch>
            <Route exact path="/schedules" component={ScheduleMainPage}/>
            <Route exact path="/schedules/create/" component={ScheduleInputContainer}/>
            <Route exact path="/schedules/detail/:id" component={ScheduleDetailView} />
            {/* <Route exact path="/schedules/update/:id" component={ScheduleUpdateView} /> */}
          </Switch>
        
      </Router>
    )
  }
}
export default App;