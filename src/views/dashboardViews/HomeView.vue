 <script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import Menu from '../../components/SidebarMenu.vue'
</script> 
<script>
export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};
</script>

<template>
  <main>
    <Menu></Menu>
    <!-- Здесь будет список устройств и сетей -->
    <div style="margin: 20px; text-align: center; color:var(--color-text);">Home (dashboard) page</div>
    <hr>
    <!-- test -->
   

    <!-- <TheWelcome /> -->
  </main>
</template>
<style scoped>
main {
  margin-left: 300px;
}
</style>
