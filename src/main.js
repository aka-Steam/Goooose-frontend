import './assets/main.css'

import { createApp } from 'vue'
import { Vue3Mq } from "vue3-mq";
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(Vue3Mq,{
      preset: 'bootstrap5'
})

app.mount('#app')
