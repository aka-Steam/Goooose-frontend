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