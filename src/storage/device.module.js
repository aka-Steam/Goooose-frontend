import DeviceService from '../services/device.service';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = {
  devices: []
};

export const devicem = {
  namespaced: true,
  state: initialState,
  actions: {
    GET_ALL_DEVICES_FROM_API({ commit }) {
      return DeviceService.getDevices().then(
        devices => {
          commit('SET_DEVICES_TO_STATE', devices);
          return Promise.resolve(devices);
        }
      );
    },
    SET_DEVICES_BY_API({ commit }, chip_id) { 
      return DeviceService.setDevice(chip_id).then(
        response => {
          if (response.status == 200 && !(localStorage.getItem("chip_id") === null)) {
            localStorage.removeItem("chip_id");
          }
        }
      )
    },
    GET_DEVICE_FROM_API({ commit }, id) { },
    UPDATE_DEVICE_FROM_API({ commit }, id) { },
    DELETE_DEVICES_BY_API({ commit }, id) { 
      return DeviceService.deleteDevice(id)
    },
  },
  mutations: {
    SET_DEVICES_TO_STATE: (state, devices) => {
      state.devices = devices;
    },


  },
  getters: {
    DEVICES(state) {
      return state.devices;
    }
  }
};