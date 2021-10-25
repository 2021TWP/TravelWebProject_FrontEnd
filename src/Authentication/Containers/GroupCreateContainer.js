import { observer } from 'mobx-react'
import React, { Component } from 'react'
import AccountStore from '../Stores/AccountStore'
import GroupCreateView from '../Views/GroupCreateView';


class GroupCreateContainer extends Component {
    accountStore = AccountStore    
    render() {
        const { createGroup, group, setProps} = this.accountStore;
        return (
            <div>
                <GroupCreateView    createGroup={createGroup}
                                    group={group}
                                    setProps={setProps}/>
            </div>
        )
    }
}

export default observer(GroupCreateContainer)