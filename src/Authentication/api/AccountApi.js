import axios from 'axios';

function headerCheck() {
    axios.defaults.headers = {Authorization: `${sessionStorage.getItem('Authorization')}`}
}

class AccountApi {
    URL = '/api/authentication/'
    userCreate(user) {
        return axios.post(this.URL + 'signup/', user)
                    .then((response)=>response.data)
                    .catch(error => error.response.data)
    }

    emailConfirm(key) {
        return axios.post(this.URL + 'signup/verify-email/', {key: `${key}`})
                    .then(response => response.data)
                    .catch(error => error.response.data)
    }

    login(user) {
        return axios.post(this.URL + 'login/', {username: user.username, password: user.password1})
                    .then(response => response.data)
                    .catch(error => error.response.data)
    }

    logout() {
        return axios.post(this.URL + 'logout/')
                    .then(response => response.data)
                    .catch(error => error.response.data)
    }

    test() {
        return axios.post(this.URL + 'test/', headerCheck())
                    .then(response => response.data)
                    .catch(error => error.response.data)
    }

    getUser() {
        return axios.get(this.URL + `userinfo/`)
                    .then(response => response.data)
                    .catch(error => error.response.data)
    }

    resetPw(email) {
        return axios.post(this.URL+ `password/reset/`, {email: email})
                    .then(response => response.data)
                    .catch(error => error.response.data)
    }

    resetPwConfirm(user, uid, token) {
        return axios.post(this.URL+ `password/reset/confirm/${uid}/${token}/`, { new_password1: `${user.password1}`,
                                                                            new_password2: `${user.password2}`,
                                                                            uid: `${uid}`,
                                                                            token: `${token}`})
                    .then(response => response.data)
                    .catch(error => error.response.data)                                                   
    }

    changePassword(user) {
        return axios.post(this.URL + `password/change/`, {  new_password1: `${user.password1}`,
                                                            new_password2: `${user.password2}`,
                                                            old_password: `${user.old_password}` }, headerCheck())
                    .then(response => response.data)
                    .catch(error => error.response.data)
    }

    groupCreate(group) {
        return axios.post(this.URL + 'group/create/',   {group_name: group.group_name,
                                                        pin: group.pin,
                                                        created_date: group.created_date})
                    .then(response => response.data)
                    .catch(error => error.response.data)
    }

    groupList() {
        return axios.get(this.URL + 'group/')  
                    .then(response => response.data)
    }

    myGroupList() {
        return axios.get(this.URL + 'group/myGroups/')  
                    .then(response => response.data)
    }

    getGroupUsers(g_id) {
        return axios.get(this.URL + `group/usersInGroup/${g_id}`)
                    .then(response => response.data)
    }

    joinGroup(g_id, pin) {
        return axios.put(this.URL +`group/join/`, {g_id: g_id, pin: `${pin}`})
                    .then(response => response.data)
                    .catch(error => error.response.data)
    }

    withdrawGroup(g_id) {
        return axios.put(this.URL +`group/withdraw/`, {g_id: g_id})
                    .then(response => response.data)
                    .catch(error => error.response.data)
    }
    
    getGroupSchedules(g_id) {
        return axios.get(this.URL + `group/schedulesInGroup/${g_id}`)
                    .then(response => response.data)
    }


}

export default new AccountApi();