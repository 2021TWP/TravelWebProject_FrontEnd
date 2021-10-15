import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyPageGroupInputContainer from '../Containers/MyPageGroupInputContainer';


class MyPageGroupView extends Component {
  render() {
    return (
      <div>
        {/* <Link to="/">그룹 생성</Link>

        <Link to="/">그룹 관리</Link>
          */}

          그룹생성
<MyPageGroupInputContainer/><br/>

          그룹관리 
      </div>
    );
  }
}

export default MyPageGroupView;