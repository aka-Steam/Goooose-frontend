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

  putDevice(id, newName, newDescription){
    return axios
    .put(API_URL + "/" + id,{name : newName, description : newDescription},{headers: authHeader()})
    .then(responce=>{
      if(responce.status == 200){
        console.log("Successfully updated.")
      }
    })
  }

  deleteDevice(id){
    return axios.delete(API_URL + "/" + id,{headers: authHeader()})
  }

  controlDevice(chip_id, action){
    return axios.post(API_URL + "/" + chip_id + "/control",{action : action},{headers: authHeader()})
  }
}

export default new DeviceService();