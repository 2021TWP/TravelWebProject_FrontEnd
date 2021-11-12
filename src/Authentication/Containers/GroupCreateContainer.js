import { observer } from 'mobx-react'
import React, { Component } from 'react'
import AccountStore from '../Stores/AccountStore'
import GroupCreateView from '../Views/GroupCreateView';


class GroupCreateContainer extends Component {
    accountStore = AccountStore    
    render() {
        const { handleCreateGroupSubmit, group, setProps} = this.accountStore;
        return (
            <div>
                <GroupCreateView    handleCreateGroupSubmit={handleCreateGroupSubmit}
                                    group={group}
                                    setProps={setProps}/>
            </div>
        )
    }
}

export default observer(GroupCreateContainer)