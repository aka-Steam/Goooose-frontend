<script setup>
import Menu from '../../components/SidebarMenu.vue'
import DeviceMap from '../../components/Map.vue'
import HeaderRoute from '../../components/HeaderRoute.vue'


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