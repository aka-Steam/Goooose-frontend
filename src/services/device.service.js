//Служба передачи данных о устройсвах
import axios from 'axios';
import authHeader from './auth-header';

const API_URL = import.meta.env.VITE_API_URL + '/device';

class DeviceService {
  getDevices() {
    return axios
    .get(API_URL,{headers: authHeader()})
    .then(response => {
      return response.data;
    })
  }
 
  setDevice(chip_id){
    return axios.post(API_URL,{chip_id : chip_id},{headers: authHeader()});
  }

  getDevice(id){
    return axios
    .get(API_URL + "/" + id,{headers: authHeader()})
    .then(response => {
      return response.data;
    })
  }
  putDevice(id){}
  deleteDevice(id){
    return axios.delete(API_URL + "/" + id,{headers: authHeader()})
  }
}

export default new DeviceService();