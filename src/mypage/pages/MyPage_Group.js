import React from 'react';
import MyPageGroupInputContainer from '../Containers/MyPageGroupInputContainer';

function mypage_group(props) {
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

export default mypage_group;