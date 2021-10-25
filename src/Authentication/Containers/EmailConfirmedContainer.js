import React, { Component } from 'react';
import { observer } from 'mobx-react';
import EmailConfirmedView from '../Views/EmailConfirmedView';
import AccountStore from '../Stores/AccountStore';

class EmailConfirmedContainer extends Component {
  accountStore = AccountStore;
  render() {
    return (
      <div>
        <EmailConfirmedView value={this.props.match.params.key}
                            handleEmailConfirm={this.accountStore.handleEmailConfirm}/>
      </div>
    );
  }
}

export default observer(EmailConfirmedContainer);
