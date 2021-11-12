import React, { Component } from 'react'
import { Input } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default class GroupMySearchView extends Component {
    render() {
        return (
            <div>
                <Input type="search" name="search" value={this.props.search} onChange={(e)=>this.props.setProps(e.target.name, e.target.value)} ></Input>
                <AddIcon fontSize="large" style={{float:"right"}} onClick={()=>window.location.href='/group/create/'}/>
            </div>
        )
    }
}
