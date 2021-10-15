import React, { Component } from 'react';
import Icon from '@mui/material/Icon';


class MyPagePlanView extends Component {
  render() {
    return (
      <div>
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
        <Icon color="primary">add_circle</Icon>  <br/> <br/> {/* +아이콘 파란색 */}

        {/* <button> + </button>  <br/>  {/* 추후 +버튼 아이콘으로 바꾸는 것 고려 , 일정 add 기능  */}

        일정 목록  <br/>

      </div>
    );
  }
}

export default MyPagePlanView;