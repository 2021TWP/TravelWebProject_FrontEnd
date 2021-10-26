import React, { Component } from 'react';
import { observer } from 'mobx-react'
import ScheduleListView from '../views/ScheduleListView';
import ScheduleStore from '../stores/ScheduleStore';


class ScheduleListContainer extends Component {
  scheduleStore = ScheduleStore;
  
  render() {
    const {scheduleList,selectAll,selectSchedule}=this.scheduleStore;
    return (
      
        <ScheduleListView 
                          scheduleList ={scheduleList}
                          selectAll ={selectAll}
                          selectSchedule ={selectSchedule}/>
    
    );
  }
}

export default observer(ScheduleListContainer);