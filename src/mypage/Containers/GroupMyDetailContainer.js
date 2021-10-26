import React, { Component } from 'react';
import {observer} from 'mobx-react'
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/core/ButtonUnstyled';
import { styled } from '@mui/system';
/////////////////////////////////Import Account///////////////////////////////////
import AccountStore from '../../Authentication/Stores/AccountStore';
import GroupMyListView from '../Views/GroupMyListView';
import GroupMySearchView from '../Views/GroupMySearchView';
import axios from 'axios';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import GroupMyDetailView from '../Views/GroupMyDetailView';
import ScheduleStore from '../../Schedule/stores/ScheduleStore';
/////////////////////////////////////////Design Started/////////////////////////////////////
function createBoard(e) {
    window.location.href = '/board/create/';
}

function GoHome(e) {
  window.location.href = '/';
}


const CustomButtonRoot = styled('span')(`
  background-color: #007fff;
  padding: 15px 20px;
  border-radius: 10px;
  color: #fff;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;
  &:hover {
    background-color: #0059b2;
  }
  &.${buttonUnstyledClasses.active} {
    background-color: #004386;
  }
  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }
  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`);

function CustomButton(props) {
    return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
  }

////////////////////////////////////Design End//////////////////////////////////////////////////

class GroupMyDetailContainer extends Component {
  
  scheduleStore = ScheduleStore;
    componentDidMount() {
      
      this.scheduleStore.getGroupSchedules(this.props.g_id);
         // 모든 그룹
    }
    
    constructor(){
      super();
      this.state={ check : false };
    }
    //state로 선언 + check바꾸는 이벤트 핸들러 추가//setstate로 값을 변경
    
    checkHandler=()=>{
        this.setState({check: !this.state.check});
    }
  

    render() {

      const {scheduleList,selectAll,selectSchedule} =this.scheduleStore;
  
      const theme = createTheme();
        
        return (
            
          <ThemeProvider theme={theme}>
            
                  <GroupMyDetailView
                          g_id ={this.props.g_id}
                          scheduleList ={scheduleList}
                          selectAll ={selectAll}
                          selectSchedule ={selectSchedule} />
                  
          </ThemeProvider> 
        );
    }
}

export default observer(GroupMyDetailContainer);