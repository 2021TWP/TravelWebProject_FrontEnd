import { observer } from 'mobx-react';
import React, { Component } from 'react';
import ScheduleStore from '../stores/ScheduleStore'
import ScheduleInputView from '../views/ScheduleInputView'

class ScheduleInputContainer extends Component {
  scheduleStore = ScheduleStore
  render() {
    
    return (
      <div>
        <ScheduleInputView/>
      </div>
    );
  }
}

export default observer(ScheduleInputContainer);