import axios from 'axios';



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

}

export default new AccountApi();