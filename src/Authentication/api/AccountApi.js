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

    groupCreate(group) {
        return axios.post(this.URL + 'group/create/', group)
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
}

export default new AccountApi();