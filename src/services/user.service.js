//Служба передачи данных
import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://95.163.230.29/api/v1/auth/';

class UserService {
  // getPublicContent() {
  //   return axios.get(API_URL + 'all');
  // }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  // getModeratorBoard() {
  //   return axios.get(API_URL + 'mod', { headers: authHeader() });
  // }

  // getAdminBoard() {
  //   return axios.get(API_URL + 'admin', { headers: authHeader() });
  // }
}

export default new UserService();