import React, { Component } from 'react'
import BoardInputContainer from './Board/Containers/BoardInputContainer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EmailConfirmedContainer from './Authentication/Containers/EmailConfirmedContainer';
import PasswordResetContainer from './Authentication/Containers/PasswordResetContainer';
import PasswordResetConfirmContainer from './Authentication/Containers/PasswordResetConfirmContainer';
import GroupListContainer from './Authentication/Containers/GroupListContainer';
import GroupCreateContainer from './Authentication/Containers/GroupCreateContainer';
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
import BoardUpdateView from './Board/Views/BoardUpdateView';
import BoardFreeListContainer from './Board/Containers/BoardFreeListContainer';
import BoardReviewListContainer from './Board/Containers/BoardReviewListContainer';
import BoardImpromptuListContainer from './Board/Containers/BoardImpromptuListContainer';
import PrivateRoute from './PrivateRoute';


///////////////Header, Footer/////////////////////////
import Header from './layout/Header';
import Footer from './layout/Footer';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//////////////////////////////////////////////////////
import BoardStore from './Board/Stores/BoardStore';
import Dashboard from './mypage/layout/DashBoard';
import MyPageBoardDashBoard from './mypage/Page/MyPageBoardDashBoard';
import MyPageListDashBoard from './mypage/Page/MyPageListDashBoard';
import MyPageGroupDashBoard from './mypage/Page/MyPageGroupDashBoard';
import MyPageGroupDetailDashBoard from './mypage/Page/MyPageGroupDetailDashBoard';
import PasswordChangeContainer from './Authentication/Containers/PasswordChangeContainer';
import MyPageGroupSchedule from './mypage/Page/MyPageGroupSchedule';
import MyPageScheduleUpdate from './mypage/Page/MyPageScheduleUpdate';
import MyPageScheduleDetail from './mypage/Page/MyPageScheduleDetail';
import MypageListContainer from './mypage/Containers/MyPageListContainer' 

class App extends Component {
  boardStore = BoardStore
  render() {
    const sections = [
      { title: '여행일정', url: '/schedules/' },
      { title: '게시판', url: '/board/list/' },
      { title: '그룹', url: '/group/' },
      { title: '마이페이지', url: '/mypage/list/' },    
    ];
    const theme = createTheme();
    // const {board} = this.boardStore
    return (
      <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
        {window.location.href.includes('authentication') || window.location.href.includes('mypage')
        ? null
        : <Header title="Travel" sections={sections}/> }
        </Container>

        <Switch>
          <Route exact path="/" component={home}/>    
          <Route exact path="/authentication/login/" component={LoginContainer}/>
          <Route exact path="/authentication/signup/" component={RegisterContainer}/>
          <Route exact path="/authentication/emailconfirmed/:key/" component={EmailConfirmedContainer}/>
          <Route exact path="/authentication/password/reset/" component={PasswordResetContainer} />
          <Route exact path="/authentication/password/reset/:uid/:token/" component={PasswordResetConfirmContainer} />
          <Route exact path="/authentication/password/change/" component={PasswordChangeContainer}/>
          <Route exact path="/group/" component={GroupListContainer} />
          <Route exact path="/group/create/" component={GroupCreateContainer} />
          <Route exact path="/group/myGroup/details/:gid/" component={GroupCreateContainer} />
          <Route exact path="/schedules" component={ScheduleMainPage}/>
          {/* <Route exact path="/schedules/create/:g_id" component={ScheduleInputContainer}/> */}
           <Route exact path="/schedules/detail/:id" component={ScheduleDetailView} />
          {/* <Route exact path="/schedules/update/:id" component={ScheduleUpdateView} /> */} 
          <Route exact path="/board/list/" component={BoardListContainer}/>

          <PrivateRoute exact path="/board/create/" component={BoardInputContainer}/>
          <Route exact path= "/board/detail/:id" component={SeperateBoardList}/>
          <Route exact path="/board/update/:id" component={BoardUpdateView}/>

          <Route exact path="/board/free/" component={BoardFreeListContainer}/>
          <Route exact path="/board/review/" component={BoardReviewListContainer}/>
          <Route exact path="/board/impromptu/" component={BoardImpromptuListContainer}/>

          <Route exact path="/mypage/list/" component={MyPageListDashBoard}/>  
          <Route exact path="/mypage/myboard/" component={MyPageBoardDashBoard}/>
          <Route exact path="/mypage/mygroup/" component={MyPageGroupDashBoard}/>
          <Route exact path="/mypage/mygroup/detail/:id/" component={MyPageGroupDetailDashBoard}/>
          <Route exact path="/mypage/mygroup/create/:g_id/" component={MyPageGroupSchedule}/>
          <Route exact path="/mypage/mygroup/detail/:g_id/:id/" component={MyPageScheduleDetail} />
          <Route exact path="/mypage/mygroup/update/:g_id/:id/" component={MyPageScheduleUpdate} />



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
  