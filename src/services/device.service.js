//Служба передачи данных о устройсвах
import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://95.163.230.29/api/v1/device';

class DeviceService {
  getDevices() {
    return axios
    .get(API_URL,{headers: authHeader()})
    .then(response => {
      if (response.status == 200) {
        console.log(response.data); 
        localStorage.setItem('devices', JSON.stringify(response.data));          
      }
      return response.data;
    })
  }
 
  setDevice(id){
    return axios.post(API_URL,{chip_id : id},{headers: authHeader()});
  }

  // getDevice(id){}
  // putDevice(id){}
  // delDevice(id){}
}

export default new DeviceService();