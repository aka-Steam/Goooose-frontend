<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { useStore } from 'vuex'
import Menu from '../../components/SidebarMenu.vue'
import DeviceMap from '../../components/Map.vue'
import HeaderRoute from '../../components/HeaderRoute.vue'

const store = useStore();

let autoreloadIntervalID;

onMounted(() => {
    autoreloadIntervalID = setInterval(() => {
        if (store.state.auth.status.loggedIn == false) {
            clearInterval(autoreloadIntervalID);
        };
        store.dispatch('devicem/GET_ALL_DEVICES_FROM_API').then(console.log('Data arrived from Map page!'));
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