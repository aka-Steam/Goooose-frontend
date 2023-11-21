//Операции над датчиками устройства
import axios from 'axios';
import authHeader from './auth-header';

const API_URL = import.meta.env.VITE_API_URL + '/device/item';

class DeviceItemsService { 
      getDeviceItem(device_id){
            // GET/device/{device}/item        
      }
     
      putDeviceItem(item){
            return axios.put(API_URL + "/" + item.id,
            {
                  name: item.name,
                  description: item.description,
                  humidityThreshold: item.humidityThreshold,
                  autoMode: item.autoMode
            },
            {headers: authHeader()})
            .catch((err) => {
                  console.log("AXIOS ERROR: ", err);
            });
      }

      deleteDeviceItem(id){
            return axios.delete(API_URL + "/" + id,{headers: authHeader()}) 
      }

}

export default new DeviceItemsService();