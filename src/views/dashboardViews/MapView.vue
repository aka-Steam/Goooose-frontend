<script setup>
import Menu from '../../components/SidebarMenu.vue'
import DeviceMap from '../../components/Map.vue'

</script>


<template>
  <Menu></Menu>
  <main>
    <DeviceMap/>

  </main>
</template>

<style scoped>
  main {
    margin-left: 300px;
  }

  
</style>