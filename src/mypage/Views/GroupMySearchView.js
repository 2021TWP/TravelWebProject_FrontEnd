import React, { Component } from 'react'
import { Input } from '@mui/material';

export default class GroupMySearchView extends Component {
    render() {
        return (
            <div>
                <Input type="search" name="search" value={this.props.search} onChange={(e)=>this.props.setProps(e.target.name, e.target.value)} ></Input>
                <Input align="end" type="Button" value="생성" onClick={()=>window.location.href='/group/create/'}/>
            </div>
        )
    }
}
