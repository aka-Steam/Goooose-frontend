<script setup>
import Menu from '../components/SidebarMenu.vue'

  // const name = computed(()=>{let user = JSON.parse(localStorage.getItem('user'));
  // return user.data.username;})
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
  },

  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>

<template>
  <main>
    <Menu></Menu>
    <div style="margin: 20px; text-align: center; color:var(--color-text);">Profile page</div>
    <hr>
    
    
    <div class="container">
      <div class="jumbotron">
        <h3>
          <strong>{{ currentUser.data.user.username }}</strong> Profile&emsp;&emsp;
          <a class="logout-button" @click.prevent="logOut"><strong>Выйти</strong></a>
        </h3>
      </div>
      <p>
        <strong>Token:</strong>
        {{ currentUser.data.token.substring(0, 20) }} ... {{ currentUser.data.token.substr(currentUser.data.token.length -
          20) }}
      </p>
      <p>
        <strong>Id:</strong>
        {{ currentUser.data.user.id }}
      </p>
      <p>
        <strong>Email:</strong>
        {{ currentUser.data.user.email }}
      </p>
    </div>

  </main>
</template>

<style scoped>
main {
  margin-left: 300px;
}
.container{
  margin-top: 30px;
}
.logout-button{
  display: inline-block;
  padding: 4px 12px;
  color: var(--color-text-light);
  background-color: var(--color-darck2);
  border-radius: 30px
}
.logout-button:hover{
  background-color: var(--color-accent2);
}

</style>