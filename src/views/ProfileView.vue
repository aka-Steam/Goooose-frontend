<script setup>
  import Menu from '../components/SidebarMenu.vue'
</script>

<script>
export default {
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>

<template>
   <Menu></Menu>
   <div style="margin: 20px; text-align: center; color:var(--color-text);">Profile page</div>
    <hr>  
    <a class="nav-link" @click.prevent="logOut">LogOut</a>
</template>