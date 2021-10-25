import React, { Component } from 'react';

class EmailConfirmedView extends Component {
  componentDidMount() {
    this.props.handleEmailConfirm(this.props.value);   // 모든 그룹
  }
  render() {
    return (
      <div>
        현재 페이지는 닫으셔도 됩니다.
        <br/>
        <button onClick={()=>window.close()}>닫기</button>
      </div>
    );
  }
}

export default EmailConfirmedView;