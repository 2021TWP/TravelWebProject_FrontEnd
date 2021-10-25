import { observer } from 'mobx-react';
import React, { Component } from 'react';
import ScheduleStore from '../stores/ScheduleStore';
import ScheduleInputView from '../views/ScheduleInputView';
import ScheduleCreateView from '../views/ScheduleCreateView';

class ScheduleInputContainer extends Component {
  scheduleStore = ScheduleStore
  constructor(){
    super();
    this.state={ check : false };
  }
  //state로 선언 + check바꾸는 이벤트 핸들러 추가//setstate로 값을 변경
  
  checkHandler=()=>{
      this.setState({check: !this.state.check});
  }

  render() {
  
    const {schedule,contentList, content,handlerSetProps_schedule,handlerSetProps_content,
      selectAll_content, addContent,deleteContent,updateContent,
      selectContent,addSchedule,updateSchedule,selectSchedule,deleteSchedule}=this.scheduleStore;
    const id =this.scheduleStore.schedule.id;
    return (
      // 삼항 연산자로  하나만 하던지 아님 
      // 조건을 하나 줘서... state를 줘서 default 는 0으로 
      <div>


        {this.state.check ?  <ScheduleCreateView
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
                           selectSchedule={selectSchedule}
                           deleteSchedule ={deleteSchedule}
                           id={id}
                            />
      :<ScheduleInputView checkHandler ={this.checkHandler}/>}

      </div>
    );
  }
}

export default observer(ScheduleInputContainer);