import React, { Component } from 'react';
import { observer } from 'mobx-react';
import PasswordChangeView from '../Views/PasswordChangeView';
import AccountStore from '../Stores/AccountStore';


class PasswordChangeContainer extends Component {
  accountStore = AccountStore
  render() {
    const {handlePasswordChangeSubmit, user, setProps, onClickEvent, error_message} = this.accountStore
    return (
      <div>
        <PasswordChangeView handlePasswordChangeSubmit={handlePasswordChangeSubmit}
                            user={user}
                            setProps={setProps}
                            onClickEvent={onClickEvent}
                            message={error_message}/>
      </div>
    );
  }
}

export default observer(PasswordChangeContainer);