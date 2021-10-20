import React, { Component } from 'react'

export default class LoginView extends Component {
    render() {
        const { user, setProps, handleLoginSubmit, message, onClickEvent, handleLogoutSubmit, test  } = this.props
        return (
            <div>
                <input type="text" name="username" placeholder="아이디" value={user.username} onChange={(e)=>setProps(e.target.name, e.target.value)}/>
                {message.username}<br/>
                <input type="password" name="password1" placeholder="비밀번호" value={user.password1} onChange={(e)=>setProps(e.target.name, e.target.value)}/>
                {message.password}<br/>
                <button onClick={()=>handleLoginSubmit()}>로그인</button>
                <button>회원 가입</button>
                <a onClick={()=>handleLogoutSubmit()}>로그아웃</a>
                <button onClick={()=>{test()}}>테스트</button>
            </div>
        )
    }
}
