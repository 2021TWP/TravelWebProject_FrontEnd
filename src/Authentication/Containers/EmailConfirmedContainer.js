import React, { Component } from 'react';
import { observer } from 'mobx-react';
import EmailConfirmedView from '../Views/EmailConfirmedView';

class EmailConfirmedContainer extends Component {
  render() {
    return (
      <div>
        <EmailConfirmedView />
      </div>
    );
  }
}

export default observer(EmailConfirmedContainer);
