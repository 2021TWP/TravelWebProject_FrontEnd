import React, { Component } from 'react';
import { Card, Icon,Button } from 'semantic-ui-react';
import ScheduleDetailView from './ScheduleDetailView';
import ScheduleStore from '../stores/ScheduleStore';

class ScheduleListView extends Component {
  scheduleStore = ScheduleStore;
  componentDidMount(){
    this.scheduleStore.selectAll();
  }
  render() {
    const {}=this.scheduleStore;
    return (
      <div>
        <Button content= 'Create'></Button>
        <Card.Group>
          <ScheduleDetailView/>
        </Card.Group>
      </div>
    );
  }
}

export default ScheduleListView;