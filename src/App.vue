<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { SpeedInsights } from "@vercel/speed-insights/vue"
</script>

<template>
  <RouterView />
  <SpeedInsights/>
</template>

<style scoped>
</style>
