import React, { Component } from 'react'

export default class GroupView extends Component {
    render() {
        const { createGroup, group, setProps} = this.props;
        return (
            <div>
                 <input type="text" name="groupName" placeholder="그룹명" value={group.groupname} onChange={(e)=>setProps(e.target.name, e.target.value)}/>
                 <input type="password" name="pin" placeholder="PIN" value = {group.groupname} onChange={(e)=>setProps(e.target.name, e.target.value)}/>
                 <button onClick={()=>createGroup()}>생성</button>
            </div>
        )
    }
}
