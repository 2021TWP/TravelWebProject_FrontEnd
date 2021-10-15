import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MyPageInfoView extends Component {
  render() {
    return (
      <div>
        {/* <Link to="/">내 정보</Link>
        <Link to="/">작성한 글</Link>
        <Link to="/">작성한 댓글</Link>
  */}

  내 정보 <br/>
  작성한 글<br/>
  작성한 댓글 <br/>
      </div>
    );
  }
}

export default MyPageInfoView;