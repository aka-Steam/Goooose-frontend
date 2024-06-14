<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import Menu from '../../components/SidebarMenu.vue'
import DeviceMap from '../../components/Map.vue'
import HeaderRoute from '../../components/HeaderRoute.vue'

const router = useRouter()
const store = useStore();

let autoreloadIntervalID;

onMounted(() => {
    autoreloadIntervalID = setInterval(() => {
        if (store.state.auth.status.loggedIn == false) {
            clearInterval(autoreloadIntervalID);
        };
        store.dispatch('devicem/GET_ALL_DEVICES_FROM_API').then(obj => {
            if (obj["data"] !== undefined){
                console.log('Data success arrived from Map page!')
            }
            // No data received. The obj is an error
            else if (obj.response.status == 500 && obj.response.data.message == "Token has expired") {
                console.log("LOGOUT. Token has expired")
                store.dispatch('auth/logout');
                localStorage.removeItem("user");// Костыль. Потому что не отрабатывает logout() из-за за устаревшего токена
                router.push('/login');
            }            
        });
    }, 3000);
})

onBeforeUnmount(()=>{
    clearInterval(autoreloadIntervalID);
})

</script>


<template>
 
  <main class="dashboard-main">
    <Menu></Menu>
    <section class="dashboard-content">
      <HeaderRoute>Карта</HeaderRoute>
      <DeviceMap/> 
    </section>
  </main>
</template>