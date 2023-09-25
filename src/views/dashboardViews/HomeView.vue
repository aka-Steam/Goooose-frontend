<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import { ref } from 'vue'
import Menu from '../../components/SidebarMenu.vue'

const devices = ref(JSON.parse(localStorage.getItem('devices')))
const openItems = ref(new Array(devices.length).fill(false))

</script> 


<template>
  <main class="dashboard-main">
    <Menu></Menu>
    <section class="dashboard-content">
      <!-- Здесь будет список устройств и сетей -->
      <div style="margin: 20px; text-align: center; color:var(--color-text);">Home (dashboard) page</div>
      <hr>
      <!-- test -->
      <div v-if="devices != null" v-for="(device, index) in devices.data" :key="device.id">
        <div class="device" @click="openItems[index] = !openItems[index]">{{ device.id }} &emsp;&emsp;&emsp;|&emsp;&emsp;&emsp; {{
          device.name }}</div>
        <div class="device__items">
          <div v-if="openItems[index]" v-for="item in device.items" :key="item.id" class="device__item">
          {{ item.name }}
          <hr>
          <div class="item__sensors">
            {{ item.data }}
          </div>
        </div>
        </div>
      </div>

      <!-- <TheWelcome /> -->
    </section>

  </main>
</template>
<style scoped>
.dashboard-content {
  padding: 0 20px;
}

.device {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  padding: 10px 30px;
  width: 100%;
  height: 64px;
  border-radius: 32px;
  background-color: var(--color-sidebar-foreground);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.device__items{
  margin-bottom: 16px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}
.device__item {

 
  
  padding: 10px 30px;
  width: 480px;
  height: auto;
  border-radius: 32px;
  background-color: var(--color-sidebar-foreground);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
