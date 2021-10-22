import { observer } from 'mobx-react'
import React, { Component } from 'react'
import AccountStore from '../Stores/AccountStore'
import PasswordResetConfirmView from '../Views/PasswordResetConfirmView'

class PasswordResetContainer extends Component {
  accountStore = AccountStore
  render() {
    const { user, setProps, handlePasswordResetConfirmSubmit, onClickEvent, error_message } = this.accountStore
    return (
      <div>
        <PasswordResetConfirmView  user={user}
                            setProps={setProps}
                            handlePasswordResetConfirmSubmit={handlePasswordResetConfirmSubmit}
                            onClickEvent={onClickEvent}
                            message={error_message}
                            uid={this.props.match.params.uid}
                            token={this.props.match.params.token}/>
      </div>
    );
  }
}
export default observer(PasswordResetContainer);