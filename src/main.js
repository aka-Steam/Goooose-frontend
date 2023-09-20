import '../node_modules/normalize.css/normalize.css'
import './assets/css/main.css'

import { createApp } from 'vue'
import { Vue3Mq } from "vue3-mq";
import App from './App.vue'
import router from './router'
import store from "./store";

const app = createApp(App)

app.use(router)
app.use(store)
app.use(Vue3Mq,{  
      preset: 'bootstrap5'
})

app.mount('#app')
