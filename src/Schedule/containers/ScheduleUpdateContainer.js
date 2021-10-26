import React, { Component } from 'react';
import ScheduleDetailView from '../views/ScheduleDetailView';
import ScheduleUpdateView from '../views/ScheduleUpdateView';
import ScheduleStore from '../stores/ScheduleStore';
import { observer } from 'mobx-react'

class ScheduleUpdateContainer extends Component {
  scheduleStore = ScheduleStore;
  render() {
    const {schedule,contentList, content,handlerSetProps_schedule,handlerSetProps_content,
      selectAll_content, addContent,deleteContent,updateContent,
      selectContent,addSchedule,updateSchedule,selectSchedule}=this.scheduleStore;
    return (
      <div>
        <ScheduleUpdateView
                           schedule ={schedule}
                           contentList ={contentList}
                           content={content}
                           handlerSetProps_content={handlerSetProps_content}
                           handlerSetProps_schedule ={handlerSetProps_schedule}
                           selectAll_content ={selectAll_content}
                           addContent ={addContent}
                           deleteContent={deleteContent}
                           updateContent ={updateContent}
                           selectContent ={selectContent}
                           addSchedule ={addSchedule}
                           updateSchedule ={updateSchedule}
                           selectSchedule={selectSchedule} />
      </div>
    );
  }
}

export default observer(ScheduleUpdateContainer);