import React, { Component } from 'react'
import BoardInputContainer from './Board/Containers/BoardInputContainer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EmailConfirmedContainer from './Authentication/Containers/EmailConfirmedContainer';
import PasswordResetContainer from './Authentication/Containers/PasswordResetContainer';
import PasswordResetConfirmContainer from './Authentication/Containers/PasswordResetConfirmContainer';
// import { withRouter } from 'react-router-dom';
// import mypage_plan from './mypage/pages/MyPage_Plan';
// import mypage_scrap from './mypage/pages/MyPage_Scrap';
// import mypage_group from './mypage/pages/MyPage_Group';
// import mypage_info from './mypage/pages/MyPage_Info';
// import MyPageListContainer from './mypage/Containers/MyPageListContainer';
import RegisterContainer from './Authentication/Containers/RegisterContainer';
import ScheduleDetailView from './Schedule/views/ScheduleDetailView';
import ScheduleInputContainer from './Schedule/containers/ScheduleInputContainer';
import ScheduleMainPage from './Schedule/page/ScheduleMainPage';
import BoardListContainer from './Board/Containers/BoardListContainer';
import LoginContainer from './Authentication/Containers/LoginContainer'
import home from './layout/home';
import SeperateBoardList from './Board/Views/SeperateBoardList';
import ScheduleUpdateView from './Schedule/views/ScheduleUpdateView';

///////////////Header, Footer/////////////////////////
import Header from './layout/Header';
import Footer from './layout/Footer';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//////////////////////////////////////////////////////
import BoardStore from './Board/Stores/BoardStore';

import MypageListContainer from './mypage/Containers/MyPageListContainer' 

class App extends Component {
  boardStore = BoardStore
  render() {
    const sections = [
      { title: '여행일정', url: '/travel/' },
      { title: '게시판', url: '/board/list/' },
      { title: '마이페이지', url: '/mypage/' },    
    ];
    const theme = createTheme();
    // const {board} = this.boardStore
    return (
      <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
        {window.location.href.includes('authentication')
        ? null
        : <Header title="Travel" sections={sections}/> }
        </Container>

        <Switch>
          <Route exact path="/" component={home}/>    
          <Route exact path="/authentication/login/" component={LoginContainer}/>
          <Route exact path="/authentication/signup/" component={RegisterContainer}/>
          <Route exact path="/authentication/emailconfirmed/" component={EmailConfirmedContainer}/>
          <Route exact path="/authentication/password/reset/" component={PasswordResetContainer} />
          <Route exact path="/authentication/password/reset/:uid/:token" component={PasswordResetConfirmContainer} />
          <Route exact path="/schedules" component={ScheduleMainPage}/>
          <Route exact path="/schedules/create/" component={ScheduleInputContainer}/>
          <Route exact path="/schedules/detail/:id" component={ScheduleDetailView} />
          <Route exact path="/schedules/update/:id" component={ScheduleUpdateView} />
          <Route exact path="/board/list/" component={BoardListContainer}/>
          <Route exact path="/board/create/" component={BoardInputContainer}/>
          <Route exact path= "/board/detail/:id" component={SeperateBoardList}/>
          <Route exact path="/mypage/:id"component={MypageListContainer}/>
        </Switch>
        <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
      </Router>
    )
  }
}
  export default App;
  