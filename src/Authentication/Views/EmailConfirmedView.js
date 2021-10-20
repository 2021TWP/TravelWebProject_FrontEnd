import React, { Component } from 'react';

class EmailConfirmedView extends Component {
  render() {
    return (
      <div>
        이메일 인증이 완료되었습니다. 현재 페이지는 닫으셔도 됩니다.
        <br/>
        <button onClick={()=>window.close()}>닫기</button>
      </div>
    );
  }
}

export default EmailConfirmedView;