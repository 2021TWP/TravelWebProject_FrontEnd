import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ScheduleStore from '../stores/ScheduleStore';
import ScheduleDetailView from '../views/ScheduleDetailView';
import ScheduleInputContainer from './ScheduleInputContainer';
import ScheduleUpdateView from '../views/ScheduleUpdateView';

class ScheduleDetailContainer extends Component {
  scheduleStore = ScheduleStore;
  
  constructor(){
    super();
    this.state={
      create: false,
      update:false,
      normal :true

    };
  }

  createHandler =()=>{
    this.setState({create:!this.state.create, normal : !this.state.normal})
  }

  updateHandler =()=>{
    this.setState({update:!this.state.update, normal : !this.state.normal})
  }
  
  render() {
    const {schedule,contentList, content,handlerSetProps_schedule,handlerSetProps_content,
      selectAll_content, addContent,deleteContent,updateContent,
      selectContent,addSchedule,updateSchedule,selectSchedule}=this.scheduleStore;
    return (
      <div>
        <ScheduleDetailView
                          schedule ={schedule}
                          contentList ={contentList}
                          content={content}
                          handlerSetProps_schedule ={handlerSetProps_schedule}
                          selectAll_content ={selectAll_content}
                          addContent ={addContent}
                          deleteContent={deleteContent}
                          updateContent ={updateContent}
                          selectContent ={selectContent}
                          addSchedule ={addSchedule}
                          selectSchedule={selectSchedule}

                          createHandler ={this.createHandler}
                          updateHandler ={this.updateHandler}
        />
       
      
        
      </div>
    );
  }
}

export default observer(ScheduleDetailContainer);