import { createStore } from "vuex";
import { auth } from "./auth.module";
import { devicem } from "./device.module"
import axios from 'axios'
import authHeader from '../services/auth-header';

const API_URL = import.meta.env.VITE_API_URL + '/device';

const store = createStore({
  modules: {
    auth,
    devicem
  }
});

export default store;