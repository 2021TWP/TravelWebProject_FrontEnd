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
        created_date: "",
    }

    groups = [];

    myGroupsId = [];
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
    
    group_error_message = {
        group_name: "",
        pin: "",
        schedules: "",
        created_date: "",
    }


    token_header = {}

    csrftoken = CSRFToken
    
    search = "";


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
        }
    }

    async handleEmailConfirm(key) {
        try {
            const data = await accountApi.emailConfirm(key);
            if ('detail' in data){
                if (data.detail === "ok") {
                alert("이메일 인증 완료")
                } else {
                    alert("잘못된 접근입니다. 다시 시도 부탁드립니다.")
                }
            }else {
                alert("잘못된 접근입니다. 다시 시도 부탁드립니다.")
            }
        }catch(error) {
            runInAction(() => this.message = error.message)
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
            }else if ('non_field_errors' in data) {
                alert("아이디와 비밀번호를 확인해 주세요")
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
                window.location.href='/'
            }else {
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
        }
    }

    async handlePasswordChangeSubmit() {
        try {
            const data = await accountApi.changePassword(this.user)
            if ('detail' in data) {
                alert(data.detail);
            }else{
                runInAction(() => this.error_message = {...this.error_message, ...data})
            }
            window.location.href='javascript:history.back()'

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

    async handleCreateGroupSubmit() {
        try {
            this.group = {
                ...this.group,
                created_date: (new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().replace('T', ' ').substring(0, 19))
            }
            const data = await accountApi.groupCreate(this.group);
            if ("success" in data) {
                alert(data.success)
                this.showAllGroups();
                this.showMyGroups();
                window.location.href='javascript:history.back()'
            } else if ("pin" in data && "group_name" in data) {
                alert(`${data.group_name}\n${data.pin}`)

            } else {
                if ('pin' in data) {
                    alert(data.pin)
                } else {
                    alert(data.group_name)
                }
            }
        }catch(error) {
            runInAction(() => this.message = error.message)
        }
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
            runInAction(() => this.myGroupsId = data['id'])
            runInAction(() => this.myGroups = data['groups'])
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
            this.showMyGroups();
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
            this.showAllGroups();
            this.showMyGroups();
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
    
    async onClickEvent(name) {
        // runInAction(() => this.user = {...this.user, [name]:""}) //클릭시 인풋값 사라지게 했는데 불필요 할 듯.
        runInAction(() => this.error_message = {...this.error_message, [name]:null})
    }

    async setProps(name, value) {
        if (name === 'group_name' || name === 'pin') {
            runInAction(() => this.group = {...this.group, [name]: value});
        } else if (name === 'search') {
            runInAction(() => this.search = value)
            console.log(name, value)
        }else {
            runInAction(() => this.user = {...this.user, [name]: value});
        }
    }
}


export default new AccountStore();