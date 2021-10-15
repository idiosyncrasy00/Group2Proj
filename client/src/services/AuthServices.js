import axios from "axios";

const url = "http://localhost:8080/";

class AuthServices {
  login(user) {
    return axios
      .post(url + 'signin', {
        username: user.username,
        password: user.password,
      })
      .then(res => {
        if (res.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(res.data));
        }
        return res.data;
      });
  }
  logout() {
    localStorage.removeItem('user');
  }
  register(user) {
    return axios.post(url + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password,
    });
  }
}

export default new AuthServices();