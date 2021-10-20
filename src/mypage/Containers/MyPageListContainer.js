
import React, { Component } from 'react';
import MyPageGroupView from '../Views/MyPageGroupView';
import MyPageInfoView from '../Views/MyPageInfoView';
import MyPagePlanView from '../Views/MyPagePlanView';
import MyPageScrapView from '../Views/MyPageScrapView';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";

import mypage_plan from '../pages/MyPage_Plan';
import mypage_scrap from '../pages/MyPage_Scrap';
import mypage_group from '../pages/MyPage_Group';
import mypage_info from '../pages/MyPage_Info';
import MyPage_MenuBar from '../layout/mypage_tabBar';

//--------------------material ui
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';
// import { Link } from 'react-router-dom';
//--------------------------------------


//--------------------semantic-ui
// import {Grid, Input, Menu, Segment } from 'semantic-ui-react'



class MyPageListContainer extends Component {
  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  // state = { activeItem: '일정' }
  render() {
    // const { activeItem } = this.state
    return (
      <div>
         <h1 style={{textAlign:"centers"}}>Travel</h1>


<Router>
      <MyPage_MenuBar/>
  {/* <Switch>
            <Route exact path="/mypage/plan" component={mypage_plan} />
            <Route exact path="/mypage/scrap" component={mypage_scrap} />
            <Route exact path="/mypage/group" component={mypage_group} /> 
            <Route exact path="/mypage/info" component={mypage_info} />
  </Switch> */}
</Router>
            {/* <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs  aria-label="basic tabs example">
          <Tab label="일정"><Link to='../Views/MyPagePlanView'>일정</Link>  </Tab> 
          <Tab label="그룹"><Link to='../Views/MyPageGroupView'>그룹</Link></Tab> 
          <Tab label="스크랩"><Link to='../Views/MyPageScrapView'>스크랩</Link></Tab> 
          <Tab label="내정보"><Link to='../Views/MyPageInfoView'>내정보</Link></Tab> 

        </Tabs>
      </Box>
    </Box> */}
    {/* <h1 >TRAVEL</h1> <br/> */}
    
    {/* <Grid>
      
<Menu attached='top' tabular>
  
          <Menu.Item 
            name='일정'
            active={activeItem === '일정'}
            onClick={this.handleItemClick}
          ></Menu.Item>&nbsp;&nbsp;&nbsp;&nbsp;
          <Menu.Item
            name='그룹'
            active={activeItem === '그룹'}
            onClick={this.handleItemClick}
          ></Menu.Item> &nbsp;&nbsp;&nbsp;&nbsp;
          <Menu.Item
            name='스크랩'
            active={activeItem === '스크랩'}
            onClick={this.handleItemClick}
          ></Menu.Item> &nbsp;&nbsp;&nbsp;&nbsp;
          <Menu.Item
            name='내정보'
            active={activeItem === '내정보'}
            onClick={this.handleItemClick}
          ></Menu.Item> &nbsp;&nbsp;&nbsp;&nbsp;


          <Menu.Menu position='right'>
            <Menu.Item>
              <Input
                transparent
                icon={{ name: 'search', link: true }}
                placeholder='Search users...'
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu> */}
       
        <br/>

        {/* <Grid> */}
    
        {/* <Grid.Column width={1}> 
          <Menu fluid vertical tabular>
            <Menu.Item
              name='bio'
              active={activeItem === 'bio'}
              onClick={this.handleItemClick}
            /><br/><br/>
            <Menu.Item
              name='pics'
              active={activeItem === 'pics'}
              onClick={this.handleItemClick}
            /><br/><br/>
            <Menu.Item
              name='companies'
              active={activeItem === 'companies'}
              onClick={this.handleItemClick}
            /><br/><br/>
            <Menu.Item
              name='links'
              active={activeItem === 'links'}
              onClick={this.handleItemClick}
            /><br/><br/>
          </Menu>
        </Grid.Column> */}

        {/* <Grid.Column stretched width={12}>
          <Segment>
            This is an stretched grid column. This segment will always match the
            tab height
          </Segment>
        </Grid.Column>
      </Grid> */}
        {/* <Segment attached='bottom'>
          <img src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Segment> */}



        {/* <MyPagePlanView/> <br/>
         <MyPageGroupView/><br/>
         <MyPageScrapView/><br/>
         <MyPageInfoView/><br/> */}
      </div>
    );
  }
}

export default MyPageListContainer;