import { observer } from 'mobx-react'
import React, { Component } from 'react'
import AccountStore from '../Stores/AccountStore'
import GroupView from '../Views/GroupView';


class GroupContainer extends Component {
    accountStore = AccountStore    
    render() {
        const { createGroup, group, setProps} = this.accountStore;
        return (
            <div>
                <GroupView    createGroup={createGroup}
                                group={group}
                                setProps={setProps}/>
            </div>
        )
    }
}

export default observer(GroupContainer)