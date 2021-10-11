import React, { Component } from 'react';
import { observer } from 'mobx-react'
import RegisterView from '../../Views/AccountViews/RegisterView';
import AccountStore from '../../Stores/AccountStore';

class RegisterContainer extends Component {
    accountStore = AccountStore
    render() {
        const { setProps, handleRegisterSubmit, onClickEvent, user, error_message } = this.accountStore;
        return (
            <div>
                <RegisterView   setProps={setProps}
                                handleRegisterSubmit={handleRegisterSubmit}
                                user={user}
                                message={error_message}
                                onClickEvent={onClickEvent}/>
            </div>
        )
    }
}

export default observer(RegisterContainer)