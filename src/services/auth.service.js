//Служба аутентификации
//Сервис предоставляет три важных метода с помощью axios для HTTP-запросов и ответов:

// - login(): ОТПРАВЬТЕ {имя пользователя, пароль} и сохраните JWT в локальном хранилище
// - logout(): удалить JWT из локального хранилища
// - register(): POST {имя пользователя, электронная почта, пароль}
// - refresh():
// - getUser():

import axios from 'axios';
import authHeader from './auth-header';
// Вынести в отдельный файл c и обращатся через envirement
const API_URL = import.meta.env.VITE_API_URL + '/auth/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'login', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.status == 200) {
          console.log(response.data); 
          localStorage.setItem('user', JSON.stringify(response.data));          
        }
        return response.data;
      });
  }
  logout() {    
    return axios
      .post(API_URL + 'logout', null, {headers: authHeader()})
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
        localStorage.clear();
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      })
         
  }

  register(user) {
    return axios.post(API_URL + 'register', {
      username: user.username,
      email: user.email,
      password: user.password,
      password_confirmation: user.password_confirmation
    });
  }
 
  // refresh(){
  //   return axios.post(API_URL + 'refresh', {
  // });
  // }

  // getUser() {
  //   return axios.get(API_URL + 'user', null, { headers: authHeader() });
  // }
}

export default new AuthService();