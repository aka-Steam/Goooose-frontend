<script setup>
import Menu from '../../components/SidebarMenu.vue'
import HeaderRoute from '../../components/HeaderRoute.vue'
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
      localStorage.removeItem("user");// костыль. Потому что не отрабатывает logout() из-за за устаревшего токена
      this.$router.push('/login');
    }
  }
};
</script>

<template>
  <main class="dashboard-main">
    <Menu></Menu>

    <section class="dashboard-content">
      <HeaderRoute>Профиль</HeaderRoute>

      <div class="container">
        <article v-if="!(currentUser === null)" class="user-card">
          <div class="jumbotron">
            <h3>
              <strong>{{ currentUser.data.user.username }}</strong>&emsp;&emsp;
              <a class="logout-button" @click.prevent="logOut"><strong>Выйти</strong></a>
            </h3>
          </div>
          <p>
            <strong>Email:</strong>
            {{ currentUser.data.user.email }}
          </p>
          <div class="developer-operations">
            <br>
            <hr>
            <p>
              <strong>Id:</strong>
              {{ currentUser.data.user.id }}
            </p>
            <p>
              <strong>Token:</strong>
              {{ currentUser.data.token.substring(0, 20) }} ... {{
                currentUser.data.token.substr(currentUser.data.token.length
                  -
                  20) }}
            </p>
          </div>
        </article>

      </div>
    </section>
  </main>
</template>

<style scoped>
.container {
  padding: 20px;

}

.user-card{
  padding: 10px;
  background-color:var(--color-sidebar-foreground);
  border-radius: 20px;
}
.logout-button {
  display: inline-block;
  padding: 4px 12px;
  color: var(--color-text-light);
  background-color: var(--color-darck2);
  border-radius: 30px
}

.logout-button:hover {
  background-color: var(--color-accent2);
}
</style>