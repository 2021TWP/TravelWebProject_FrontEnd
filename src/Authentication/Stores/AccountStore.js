import { makeAutoObservable } from 'mobx'
import accountApi from '../api/AccountApi'
import { runInAction } from 'mobx'
import CSRFToken from '../../utility/csrftoken'

//Model
class AccountStore {
    user = {
        username: "",
        password1: "",
        password2: "",
        email: "",
        name: "", 
    }
    
    group = {
        groupName: "",
        pin: "",
    }

    error_message = {
        username: null,
        password1: null,
        password2: null,
        email: null,
        name: null,
    };
    
    token_header = {}

    csrftoken = CSRFToken
    



    constructor() {
        makeAutoObservable(this, {}, {autoBind:true})
    }


    async handleRegisterSubmit() {
        try {
            const data = await accountApi.userCreate(this.user);
            if ('detail' in data){
                alert("이메일 인증 후 로그인 가능합니다.")
                window.location.href='/'
            }else {
                runInAction(()=>this.error_message = {...this.error_message, ...data})
            }
            console.log(this.error_message.username[0])              
        }catch(error) {
            runInAction(() => this.message = error.message)
            // console.log(this.message)
        }
    }


    async handleLoginSubmit() {
        try{
            const data = await accountApi.login(this.user);
            if ('key' in data){
                sessionStorage.setItem(`Authorization`, `Token ${data.key}`)
                const userData = await accountApi.getUser()
                sessionStorage.setItem('name', `${userData.name}`)
                sessionStorage.setItem('id', `${userData.id}`)
                sessionStorage.setItem('email', `${userData.email}`)
                sessionStorage.setItem('username', `${userData.username}`)
                window.location.href='/'
            }else {
                runInAction(() => this.error_message = {...this.error_message, ...data})
            }
        }catch(error) {
            runInAction(() => this.message = error.message)
        }
    }

    async handlePasswordResetSubmit() {
        try {
            console.log(this.user.email)
            await accountApi.resetPw(this.user.email);
        }catch(error) {
            runInAction(() => this.message = error.message)
        }
    }

    async handleLogoutSubmit() {
        try {
            await accountApi.logout();
            sessionStorage.clear()
            window.location.href='/'
        }catch(error) {
            runInAction(() => this.message = error.message)
        }
    }

    async testAccount() {
        try {
            await accountApi.test();
        }catch(error) {
            runInAction(() => this.message = error.message)
        }
    }

    async createGroup() {
        try {
            await accountApi.groupCreate(this.group);
        }catch(error) {
            runInAction(() => this.message = error.message)
        }
    }



    async onClickEvent(name) {
        // runInAction(() => this.user = {...this.user, [name]:""}) //클릭시 인풋값 사라지게 했는데 불필요 할 듯.
        runInAction(() => this.error_message = {...this.error_message, [name]:null})
    }

    async setProps(name, value) {
        if (name === 'groupName' || name === 'pin') {
            runInAction(() => this.group = {...this.group, [name]: value});
        } else {
            runInAction(() => this.user = {...this.user, [name]: value});
            console.log(name, value)
        }
        
    }





}

export default new AccountStore();