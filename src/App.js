import React, { Component } from 'react'
import BoardInputContainer from './Board/Containers/BoardInputContainer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScheduleMainPage from './Schedule/page/ScheduleMainPage';
import ScheduleInputContainer from './Schedule/containers/ScheduleInputContainer';
import ScheduleDetailView from './Schedule/views/ScheduleIDetailView';

import Header from './header';
import EmailConfirmedContainer from './Authentication/Containers/EmailConfirmedContainer';
import PasswordResetContainer from './Authentication/Containers/PasswordResetContainer';
// import { withRouter } from 'react-router-dom';
// import mypage_plan from './mypage/pages/MyPage_Plan';
// import mypage_scrap from './mypage/pages/MyPage_Scrap';
// import mypage_group from './mypage/pages/MyPage_Group';
// import mypage_info from './mypage/pages/MyPage_Info';
// import MyPageListContainer from './mypage/Containers/MyPageListContainer';
import RegisterContainer from './Authentication/Containers/RegisterContainer';
import BoardListContainer from './Board/Containers/BoardListContainer';
import LoginContainer from './Authentication/Containers/LoginContainer'
import home from './layout/home';
import SeperateBoardList from './Board/Views/SeperateBoardList';



class App extends Component {
  render() {
    return (
      <Router>

        {window.location.href !== 'http://localhost:3000/authentication/login' && window.location.href !=="http://localhost:3000/authentication/signup"
        && window.location.href !== 'http://localhost:3000/authentication/login/' && window.location.href !=="http://localhost:3000/authentication/signup/"
        ? <Header/> 
        : null}
        <Switch>
          <Route exact path="/" component={home}/>    
          <Route exact path="/authentication/login/" component={LoginContainer}/>
          <Route exact path="/authentication/signup/" component={RegisterContainer}/>
          <Route exact path="/authentication/emailconfirmed/" component={EmailConfirmedContainer}/>
          <Route exact path="/authentication/password/reset/" component={PasswordResetContainer} />
          <Route exact path="/schedules" component={ScheduleMainPage}/>
          <Route exact path="/schedules/create/" component={ScheduleInputContainer}/>
          <Route exact path="/schedules/detail/:id" component={ScheduleDetailView} />
            {/* <Route exact path="/schedules/update/:id" component={ScheduleUpdateView} /> */}
          <Route exact path="/" component={home}/>
          <Route exact path="/board/list/" component={BoardListContainer}/>
          <Route exact path="/board/create/" component={BoardInputContainer}/>
          <Route exact path= "/board/detail/:id" component={SeperateBoardList}/>
        </Switch>
      </Router>
    )
  }
}
export default App;
