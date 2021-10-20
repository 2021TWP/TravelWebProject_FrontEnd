import React, { Component } from 'react'
import AccountStore from './Authentication/Stores/AccountStore'

export default class Header extends Component {
    accountStore = AccountStore
    render() {
        const { handleLogoutSubmit } = this.accountStore
        return (
            <header style={{textAlign:'center'}}>
                <h2>여행가고 싶조 프로젝트</h2>
                {sessionStorage['Authorization']
                ? <div style={{textAlign:'right'}}>환영합니다 {sessionStorage['name']}({sessionStorage['username']})님/<button onClick={()=>handleLogoutSubmit()}>로그아웃</button></div>
                : <div style={{textAlign:'right'}}><a href='/authentication/login'>로그인</a>/<a href='/authentication/signup'>회원가입</a></div>
                }
            </header>
        )
    }
}
