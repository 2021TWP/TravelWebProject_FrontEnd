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
            if ('key' in data){
                alert("회원가입 완료")
                await accountApi.logout();
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
                localStorage.setItem(`Authorization`, `Token ${data.key}`)
                runInAction(() => this.token_header = {'Authorization': `Token ${data.key}`})
            }else {
                runInAction(() => this.error_message = {...this.error_message, ...data})
            }
        }catch(error) {
            runInAction(() => this.message = error.message)
        }
    }


    async handleLogoutSubmit() {
        try {
            await accountApi.logout();
            localStorage.removeItem('Authorization')
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