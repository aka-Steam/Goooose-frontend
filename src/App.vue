<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComp from './components/HeaderComp.vue';
import FooterComp from './components/Footer.vue';
</script>

<template>
  <HeaderComp /> 
  <RouterView />
  <FooterComp/>
</template>

<style scoped>
</style>
