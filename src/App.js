import React, { Component } from 'react'
import GroupContainer from './Authentication/Containers/GroupContainer';
import LoginContainer from './Authentication/Containers/LoginContainer';
import RegisterContainer from './Authentication/Containers/RegisterContainer';
import BoardInputContainer from './Board/Containers/BoardInputContainer';
import { BrowserRouter as Router, Switch, Route, Link ,  } from "react-router-dom";
import { withRouter } from 'react-router-dom';
//----------------------------------
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
//---------------------------------
  

  class App extends Component {

    render() {
    
      return (

//         <div>
// {/* <MyPageListContainer/>  */}
//       <BoardInputContainer />

//       <BoardListContainer />

//     </div>
  <Router>
    <Switch>
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
  