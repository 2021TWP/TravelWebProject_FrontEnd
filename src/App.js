import React, { Component } from 'react'
import GroupContainer from './Authentication/Containers/GroupContainer';
import LoginContainer from './Authentication/Containers/LoginContainer';
import RegisterContainer from './Authentication/Containers/RegisterContainer';
import BoardInputContainer from './Board/Containers/BoardInputContainer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './Header'
import EmailConfirmedContainer from './Authentication/Containers/EmailConfirmedContainer';
import PasswordResetContainer from './Authentication/Containers/PasswordResetContainer';
import { withRouter } from 'react-router-dom';
// import mypage_plan from './mypage/pages/MyPage_Plan';
// import mypage_scrap from './mypage/pages/MyPage_Scrap';
// import mypage_group from './mypage/pages/MyPage_Group';
// import mypage_info from './mypage/pages/MyPage_Info';
// import MyPageListContainer from './mypage/Containers/MyPageListContainer';

import BoardListContainer from './Board/Containers/BoardListContainer';
import BoardDetailContainer from './Board/Containers/BoardDetailContainer';
import home from './layout/home';

import BoardItemView from './Board/Views/BoardItemView';
import BoardDetailPage from './Board/Views/BoardDetailPage';
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
          <Route exact path="/" component={home}/>
          <Route exact path="/board/list/" component={BoardListContainer}/>
          <Route exact path="/board/create/" component={BoardInputContainer}/>
          <Route exact path= "/board/detail/:id" component={SeperateBoardList}/>


  }
  export default App;
  