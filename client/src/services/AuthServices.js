import axios from "axios";

const url = "http://localhost:3000/";

class AuthServices {
  login(user) {
    return axios
      .post(url + 'signin', {
        username: user.username,
        password: user.password,
      })
      .then(res => {
        if (res.data.accesstoken) {
          localStorage.setItem('user', JSON.stringify(res.data));
        }
        return res.data;
      });
  }
  logout() {
    localStorage.removeItem('user');
  }
  register(user) {
    return axios.post(url + 'api/user/register', {
      username: user.username,
      email: user.email,
      password: user.password,
    });
  }
}

export default new AuthServices();