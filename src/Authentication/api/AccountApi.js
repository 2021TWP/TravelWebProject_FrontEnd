import axios from 'axios';

function headerCheck() {
    axios.defaults.headers = {Authorization: `${localStorage.getItem('Authorization')}`}
}

class AccountApi {
    URL = '/api/accountInfo/'
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
}

export default new AccountApi();