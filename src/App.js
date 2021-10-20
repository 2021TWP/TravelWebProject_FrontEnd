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
    </Switch>
  </Router>
        // <Router>
          
        //  {/* <Link to='/schedules/'>  */}
        //     <Switch>
        //       <Route exact path="/schedules" component={ScheduleMainPage}/>
        //       <Route exact path="/schedules/create/" component={ScheduleInputContainer}/>
        //       <Route exact path="/schedules/detail/:id" component={ScheduleDetailView} />
        //     </Switch>
          
        // </Router>
      )
    }
  }
  export default App;
  