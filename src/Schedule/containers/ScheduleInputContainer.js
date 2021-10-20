import { observer } from 'mobx-react';
import React, { Component } from 'react';
import ScheduleStore from '../stores/ScheduleStore'
import ScheduleInputView from '../views/ScheduleInputView'

class ScheduleInputContainer extends Component {
  scheduleStore = ScheduleStore
  render() {
    
    return (
      // 삼항 연산자로  하나만 하던지 아님 
      // 조건을 하나 줘서... state를 줘서 default 는 0으로 
      <div>
        <ScheduleInputView/>
      </div>
    );
  }
}

export default ScheduleInputContainer;