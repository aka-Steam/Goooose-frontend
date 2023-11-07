//Операции над датчиками устройства
import axios from 'axios';
import authHeader from './auth-header';

const API_URL = import.meta.env.VITE_API_URL + '/device/item';

class DeviceItemsService {
      putDeviceItem(item){
            return axios.put(API_URL + item.id,
            {
                  name: item.name,
                  description: item.description,
            },
            {headers: authHeader()})
            .catch((err) => {
                  console.log("AXIOS ERROR: ", err);
            });
      }
}

export default new DeviceItemsService();