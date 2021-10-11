import { makeAutoObservable } from 'mobx'
import accountApi from '../api/AccountApi'
import { runInAction } from 'mobx'
import CSRFToken from '../utility/csrftoken'

//Model
class AccountStore {
    user = {
        username: "",
        password1: "",
        password2: "",
        email: "",
        name: "",  
    }
    
    error_message = {
        username: null,
        password1: null,
        password2: null,
        email: null,
        name: null,
    };
    

    csrftoken = CSRFToken
    message = ""

    constructor() {
        makeAutoObservable(this, {}, {autoBind:true})
    }

    // Action
    // async handleLoginButton() {
    //     try {
    //         await accountApi.loginCheck(this.user);
    //     }catch(error) {
    //         console.log(error);
    //         runInAction(this.message = error.message)
    //     }
    // }


    async handleRegisterSubmit() {
        try {
            const data = await accountApi.userCreate(this.user);
            if ('key' in data){
                console.log("registered sucessfully")
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
                console.log("registered sucessfully")
            }else {
                runInAction(()=>this.error_message = {...this.error_message, ...data})
            }
        }catch(error) {
            runInAction(() => this.message = error.message)
        }
    }


    async handleLogoutSubmit() {
        try {
            await accountApi.logout();
        }catch(error) {
            runInAction(() => this.message = error.message)
        }
    }


    async onClickEvent(name) {
        // runInAction(() => this.user = {...this.user, [name]:""}) //클릭시 인풋값 사라지게 했는데 불필요 할 듯.
        runInAction(() => this.error_message = {...this.error_message, [name]:null})
    }

    async setProps(name, value) {
        this.user = {...this.user, [name]: value};
        console.log(name, value)
    }





}

export default new AccountStore();