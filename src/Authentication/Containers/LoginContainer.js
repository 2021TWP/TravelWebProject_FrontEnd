import React, { Component } from 'react'
import LoginView from '../Views/LoginView'
import { observer } from 'mobx-react'
import AccountStore from '../Stores/AccountStore'


class LoginContainer extends Component {
    accountStore = AccountStore
    render() {
        const { user, setProps, handleLoginSubmit, onClickEvent, error_message, handleLogoutSubmit, testAccount  } = this.accountStore
        return (
            <div>
                <LoginView  user={user}
                            setProps={setProps}
                            handleLoginSubmit={handleLoginSubmit}
                            onClickEvent={onClickEvent}
                            message={error_message}
                            handleLogoutSubmit={handleLogoutSubmit}
                            test={testAccount}/>
            </div>
        )
    }
}

export default observer(LoginContainer)