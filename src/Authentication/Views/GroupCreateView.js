import React, { Component } from 'react'

export default class GroupView extends Component {
    render() {
        const { handleCreateGroupSubmit, group, setProps} = this.props;
        return (
            <div>
                 <input type="text" name="group_name" placeholder="그룹명" value={group.group_name} onChange={(e)=>setProps(e.target.name, e.target.value)}/>
                 <input type="password" name="pin" placeholder="PIN" value = {group.pin} onChange={(e)=>setProps(e.target.name, e.target.value)}/>
                 <button onClick={()=>handleCreateGroupSubmit()}>생성</button>
            </div>
        )
    }
}
