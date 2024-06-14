import DeviceService from '../services/device.service';
import DeviceItemsService from '../services/deviceItems.service';

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
        },
        error => {
          return Promise.resolve(error);
        }
      );
    },
    SET_DEVICES_BY_API({ commit }, chip_id) { 
      return DeviceService.setDevice(chip_id).then(
        response => {
          if (response.status == 201 && !(localStorage.getItem("chip_id") === null)) {
            localStorage.removeItem("chip_id");
          } 
        },
        error => {
          if (error.response.status == 422 && !(localStorage.getItem("chip_id") === null)) {
            let cid = localStorage.getItem("chip_id")
            alert(`Главное устройство с chip_id ${cid} уже добавлено.\nНельзя повторно добавить одно и то же устройство.`);
            localStorage.removeItem("chip_id");
          } 
         } 
      )
    },
    GET_DEVICE_FROM_API({ commit }, id) { },
    UPDATE_DEVICE_FROM_API({ commit }, params) { 
      return DeviceService.putDevice(params.id, params.newName, params.newDescription)
    },
    DELETE_DEVICES_BY_API({ commit }, id) { 
      return DeviceService.deleteDevice(id)
    },
    CONTROL_DEVICES_BY_API({ commit }, params) {
      return DeviceService.controlDevice(params.chip_id, params.action)
    },
    // Actions with device items 
    UPDATE_ITEM_FROM_API({ commit }, item) { 
      return DeviceItemsService.putDeviceItem(item)
    },
    DELETE_ITEM_BY_API({ commit }, id) { 
      return DeviceItemsService.deleteDeviceItem(id)
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