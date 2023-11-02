import { createStore } from "vuex";
import { auth } from "./auth.module";
import axios from 'axios'
import authHeader from '../services/auth-header';

const API_URL = import.meta.env.VITE_API_URL + '/device';

const store = createStore({
  state: {
    devices: []
  },
  mutations: {
    SET_DEVICES_TO_STATE: (state, devices) => {
      state.devices = devices;
    }
  },
  actions: {
    GET_DEVICES_FROM_API({commit}) {
      return axios
      .get(API_URL,{headers: authHeader()})
      .then((devices) => {
        commit('SET_DEVICES_TO_STATE', devices.data)
        return devices;
      })
      .catch((error) => {
        console.log('все чикибрякнулось')
        return error;
      }
      )

    //   commit('SET_DEVICES_TO_STATE', [
    //     {
    //         "id": 2,
    //         "chip_id": "13871010",
    //         "items": [
    //             {
    //                 "id": 6,
    //                 "item_id": 1211,
    //                 "name": null,
    //                 "description": null,
    //                 "data": {
    //                     "sensors": {
    //                         "AIR_TEMPERATURE": "5",
    //                         "AIR_HUMIDITY": "21",
    //                         "SOIL_TEMPERATURE": "26",
    //                         "SOIL_HUMIDITY": "0",
    //                         "AIR_QUALITY": "271"
    //                     },
    //                     "coordinate": {
    //                         "LONGITUDE": 45.240543,
    //                         "LATITUDE": 54.270219
    //                     },
    //                     "autoMode": false,
    //                     "humidityThreshold": 0
    //                 },
    //                 "created_at": "2023-10-03T07:23:08.000000Z"
    //             }
    //         ],
    //         "name": "Хачатур",
    //         "description": "Я продаю мячики",
    //         "created_at": "2023-09-24T18:22:44.000000Z"
    //     },
    //     {
    //         "id": 3,
    //         "chip_id": "265453245",
    //         "items": [
    //             {
    //                 "id": 4,
    //                 "item_id": 2645,
    //                 "name": "Балабай",
    //                 "description": "СынБхатачура",
    //                 "data": {
    //                     "sensors": {
    //                         "AIR_TEMPERATURE": 26,
    //                         "AIR_HUMIDITY": 38,
    //                         "SOIL_TEMPERATURE": 54,
    //                         "SOIL_HUMIDITY": 0,
    //                         "AIR_QUALITY": 634
    //                     },
    //                     "coordinate": {
    //                         "LONGITUDE": 45.140343,
    //                         "LATITUDE": 54.160119
    //                     },
    //                     "autoMode": true,
    //                     "humidityThreshold": 23
    //                 },
    //                 "created_at": null
    //             },
    //             {
    //                 "id": 5,
    //                 "item_id": 1654,
    //                 "name": "Каравай",
    //                 "description": "Сын Хачатура",
    //                 "data": {
    //                     "sensors": {
    //                         "AIR_TEMPERATURE": 26,
    //                         "AIR_HUMIDITY": 38,
    //                         "SOIL_TEMPERATURE": 54,
    //                         "SOIL_HUMIDITY": 0,
    //                         "AIR_QUALITY": 634
    //                     },
    //                     "coordinate": {
    //                         "LONGITUDE": 45.140543,
    //                         "LATITUDE": 54.170219
    //                     },
    //                     "autoMode": false,
    //                     "humidityThreshold": 2
    //                 },
    //                 "created_at": null
    //             }
    //         ],
    //         "name": "Хачатур",
    //         "description": "Я продаю шшарики",
    //         "created_at": null
    //     }
    // ]);

    }
  }, 
  getters: {
    DEVICES(state) {
      return state.devices;
    }
  },
  modules: {
    auth,
  },
 
});

export default store;