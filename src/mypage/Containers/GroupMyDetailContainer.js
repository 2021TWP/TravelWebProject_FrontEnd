import React, { Component } from 'react';
import {observer} from 'mobx-react'
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/core/ButtonUnstyled';
import { styled } from '@mui/system';
/////////////////////////////////Import Account///////////////////////////////////

import { createTheme, ThemeProvider } from '@mui/material/styles';

import GroupMyDetailView from '../Views/GroupMyDetailView';
import ScheduleStore from '../../Schedule/stores/ScheduleStore';
/////////////////////////////////////////Design Started/////////////////////////////////////


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



////////////////////////////////////Design End//////////////////////////////////////////////////

class GroupMyDetailContainer extends Component {
  
  scheduleStore = ScheduleStore;
    componentDidMount() {
      
      this.scheduleStore.getGroupSchedules(this.props.g_id);
         // 모든 그룹
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