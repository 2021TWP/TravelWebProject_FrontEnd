import React, { Component } from 'react';
// import ScheduleInputContainer from '../containers/ScheduleInputContainer'
import ScheduleListContainer from '../containers/ScheduleListContainer';
import { Grid,Button,Container } from '@mui/material';
// import Button from '@mui/material/Button';
import ScheduleInputContainer from '../containers/ScheduleInputContainer';

function createSchedule(e){
  window.location.href ="/schedules/create/"
}

class ScheduleMainPage extends Component {
  render() {
    return (
      <div>
        <Button onClick={createSchedule}>create</Button>
        
        
        <ScheduleListContainer/>
        
        
      </div>
    );
  }
}

export default ScheduleMainPage;