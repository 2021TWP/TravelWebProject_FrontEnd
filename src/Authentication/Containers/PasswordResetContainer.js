import { observer } from 'mobx-react'
import React, { Component } from 'react'
import AccountStore from '../Stores/AccountStore'
import PasswordResetView from '../Views/PasswordResetView'

class PasswordResetContainer extends Component {
  accountStore = AccountStore
  render() {
    const { user, setProps, handlePasswordResetSubmit, onClickEvent, error_message } = this.accountStore
    return (
      <div>
        <PasswordResetView  user={user}
                            setProps={setProps}
                            handlePasswordResetSubmit={handlePasswordResetSubmit}
                            onClickEvent={onClickEvent}
                            message={error_message}/>
      </div>
    );
  }
}
export default observer(PasswordResetContainer);