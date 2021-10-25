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
        old_password: "",
        email: "",
        name: "", 
        g_id: null,
    }

    users = [];
    
    group = {
        group_name: "",
        pin: "",
        schedules: [],
    }

    groups = [];

    myGroups = [];

    error_message = {
        username: null,
        password1: null,
        password2: null,
        new_password1: null,
        new_password2: null,
        old_password: null,
        token: null,
        uid: null,
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
        }catch(error) {
            runInAction(() => this.message = error.message)
            // console.log(this.message)
        }
    }

    async handleEmailConfirm(key) {
        try {
            const data = await accountApi.emailConfirm(key);
            if ('detail' in data){
                if (data.datail === "ok") {
                alert("이메일 인증 완료")
                } else {
                    alert("잘못된 접근입니다. 다시 시도 부탁드립니다.")
                }
            }else {
                alert("잘못된 접근입니다. 다시 시도 부탁드립니다.")
            }
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
                window.location.href='javascript:history.back()'
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
            const data = await accountApi.resetPw(this.user.email);
            if ('detail' in data){
                alert(data.detail)
            }
            else {
                runInAction(() => this.error_message = {...this.error_message, ...data})
            }
        }catch(error) {
            runInAction(() => this.message = error.message)
        }
    }

    async handlePasswordResetConfirmSubmit(uid, token) {
        try {
            const data = await accountApi.resetPwConfirm(this.user, uid, token);
            if ('detail' in data){
                alert(data.detail, "창은 자동으로 종료됩니다.");
                window.close();
            }
            else {
                runInAction(() => this.error_message = {...this.error_message, ...data})
                if (this.error_message.uid || this.error_message.token) {
                    alert("잘못된 접근입니다. 다시 시도 부탁드립니다.")
                    window.close();
                }
            }
        }catch(error) {
            runInAction(() => this.message = error.message)
            alert(this.message)
        }
        console.log(this.error_message.password1)
    }

    async handlePasswordChangeSubmit() {
        try {
            const data = await accountApi.changePassword(this.user)
            alert(data)
        }catch(error) {
            runInAction(() => this.message = error.message)
            alert(this.message)
        }
        console.log(this.error_message.password1)
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

    async handleCreateGroupSubmit() {
        try {
            await accountApi.groupCreate(this.group);
        }catch(error) {
            runInAction(() => this.message = error.message)
        }
    }

    
    async handleJoinGroupSubmit() {
        try {
            await accountApi.joinCreate(this.group);
        }catch(error) {
            runInAction(() => this.message = error.message)
        }
    }


    async onClickEvent(name) {
        // runInAction(() => this.user = {...this.user, [name]:""}) //클릭시 인풋값 사라지게 했는데 불필요 할 듯.
        runInAction(() => this.error_message = {...this.error_message, [name]:null})
    }

    async setProps(name, value) {
        if (name === 'group_name' || name === 'pin') {
            runInAction(() => this.group = {...this.group, [name]: value});
        } else {
            runInAction(() => this.user = {...this.user, [name]: value});
            console.log(name, value)
        }
        console.log(name, value)
    }

    async showAllGroups() {
        try {
            const data = await accountApi.groupList();
            runInAction(() => this.groups = data)
        }catch(error) {
            runInAction(() => this.message = error.message)
        }
    }

    async showMyGroups() {
        try {
            const data = await accountApi.myGroupList();
            runInAction(() => this.myGroups = data)
        }catch(error) {
            runInAction(() => this.message = error.message)
        }
    }

    async usersInGroup(g_id) {
        try {
            const data = await accountApi.getGroupUsers(g_id);
            runInAction(() => this.users = data)
            console.log(this.users)
        }catch(error) {
            runInAction(() => this.message = error.message)
        }
    }

    async handleGroupJoinSubmit(g_id, pin) {
        try {
            const data = await accountApi.joinGroup(g_id, pin);
            if ('error' in data){
                alert(data.error);
            }
            else {
                alert(data.success)
                }
            }catch(error) {
            runInAction(() => this.message = error.message)
        }
    }

    async handleGroupWithdrawlSubmit(g_id) {
        try{
            const data = await accountApi.withdrawGroup(g_id);
            if ('error' in data){
                alert(data.error);
            }
            else {
                alert(data.success)
                }
            }catch(error) {
            runInAction(() => this.message = error.message)
        }
    }
    // async schedulesInGroup(g_id) {
    //     try {
    //         const data = await accountApi.getGroupSchedules(g_id);
    //         runInAction(() => this.users = data)
    //         console.log(this.users)
    //     }catch(error) {
    //         runInAction(() => this.message = error.message)
    //     }
    // }
}

export default new AccountStore();