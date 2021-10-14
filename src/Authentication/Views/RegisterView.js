import React, { Component } from 'react'

class RegisterView extends Component {
    render() {
        const { setProps, handleRegisterSubmit, user, message, onClickEvent } = this.props
        return (
            <div>
                <input type="text" name="username" value={user.username} placeholder="아이디" onChange={(e)=>setProps(e.target.name, e.target.value)} onClick={(e)=>onClickEvent(e.target.name)}/>
                {message.username}<br/>
                <input type="password" name="password1" value={user.password} placeholder="비밀번호" onChange={(e)=>setProps(e.target.name, e.target.value)} onClick={(e)=>onClickEvent(e.target.name)}/>
                {message.password1}<br/>
                <input type="password" name="password2" value={user.password2} placeholder="비밀번호 확인" onChange={(e)=>setProps(e.target.name, e.target.value)} onClick={(e)=>onClickEvent(e.target.name)}/>
                {message.password2}{message.non_field_errors}<br/>
                <input type="text" name="name" value={user.name} placeholder="이름" onChange={(e)=>setProps(e.target.name, e.target.value)} onClick={(e)=>onClickEvent(e.target.name)}/>              
                {message.name}<br/>
                <input type="email" name="email" value={user.email} placeholder="Email" onChange={(e)=>setProps(e.target.name, e.target.value)} onClick={(e)=>onClickEvent(e.target.name)}/>
                {message.email}<br/>
                <button onClick={()=>handleRegisterSubmit()}>회원가입</button>
                <button>돌아가기</button>
            </div>
        )
    }
}
export default RegisterView;