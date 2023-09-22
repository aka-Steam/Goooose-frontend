//Служба аутентификации
//Сервис предоставляет три важных метода с помощью axios для HTTP-запросов и ответов:

// - login(): ОТПРАВЬТЕ {имя пользователя, пароль} и сохраните JWT в локальном хранилище
// - logout(): удалить JWT из локального хранилища
// - register(): POST {имя пользователя, электронная почта, пароль}

import axios from 'axios';

const API_URL = 'http://95.163.230.29/api/v1/auth/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'login', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'register', {
      username: user.username,
      email: user.email,
      password: user.password,
      password_confirmation: user.password_confirmation
    });
  }
}

export default new AuthService();