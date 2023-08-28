<script setup>
import { ref } from 'vue'
import { MqResponsive } from "vue3-mq";
import BurgerMenuIcon from './icons/IconBurgerMenu.vue'

const openMenu = ref(false)

function burgerClick() {
      openMenu.value = !openMenu.value
}
</script>

<template>
      <header class="header">
            <div class="header__container">
                  <RouterLink to="/">
                        <MqResponsive group>
                              <template #dark>
                                    <img alt="Goooose logo" class="logo" src="@/assets/logoLight.svg" />
                              </template>
                              <template #light>
                                    <img alt="Goooose logo" class="logo" src="@/assets/logoDark.svg" />
                              </template>
                        </MqResponsive>
                  </RouterLink>
                  <MqResponsive target="lg+">
                        <nav class="nav">
                              <RouterLink to="/." class="navLink">О нас</RouterLink>
                              <RouterLink to="/" class="navLink">Документация</RouterLink>
                              <RouterLink to="/." class="navLink">Магазин</RouterLink>
                        </nav>
                  </MqResponsive>
                  <MqResponsive target="lg+">
                        <div class="authorisation">
                              <RouterLink to="/" class="authorisation__link authorisation__link--SignIn">Регистрация
                              </RouterLink>
                              <RouterLink to="/" class="authorisation__link authorisation__link--logIn">Войти</RouterLink>
                        </div>
                  </MqResponsive>
                  <MqResponsive target="xs-md" class="burgerMenu">
                        <BurgerMenuIcon @click="burgerClick" />
                  </MqResponsive>
            </div>
            <MqResponsive target="xs-md">
                  <div v-if="openMenu" class="menuWraper">
                        <nav class="nav">
                              <RouterLink to="/." class="navLink">О нас</RouterLink>
                              <RouterLink to="/." class="navLink">Документация</RouterLink>
                              <RouterLink to="/." class="navLink">Магазин</RouterLink>
                        </nav>

                        <div class="authorisation">
                              <RouterLink to="/." class="authorisation__link authorisation__link--SignIn">Регистрация</RouterLink>
                              <RouterLink to="/." class="authorisation__link authorisation__link--logIn">Войти</RouterLink>
                        </div>
                  </div>
            </MqResponsive>
      </header>
</template>

<style scoped>
.header {
      width: 100%;
      top: 0;
      left: 0;
      background-color: var(--color-background-header);
      box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
      font-size: 20px;
}

.header__container {
      margin: 0 12px;
      height: 80px;
      display: flex;
      place-items: center;
      justify-content: space-around;
}

.logo {
      display: block;
      width: 260px;
      height: 51px;
}

.nav {
      width: calc(clamp(424px, calc(0px + 100vw * 0.3), 571px));
      display: flex;
      justify-content: space-between;
}

.navLink {
      margin: 0 8px;
      position: relative;
      text-decoration: none;
}

.navLink.router-link-exact-active::before {
      content: "";
      width: calc(100% + 40px);
      height: 40px;
      position: absolute;
      top: -4px;
      left: -20px;
      border: 1px solid var(--color-text);
      border-radius: 30px;
      transition: 0.4s;
}

.navLink:hover.router-link-exact-active::before {
      border-color: var(--color-accent);
}

.authorisation__link {
      margin: 0 19px;
      position: relative;
      text-decoration: none;
}

.authorisation__link--logIn::before {
      content: "";
      width: 150%;
      height: 40px;
      position: absolute;
      top: -5px;
      left: -25%;
      border: 1px solid var(--color-text);
      border-radius: 30px;
      transition: 0.4s;
}

.authorisation__link:hover.authorisation__link--logIn::before {
      border-color: var(--color-accent);
}


@media (max-width: 1100px) {
      .nav {
            width: 400px;
      }

      .logo {
            margin-right: 15px;
      }

      .navLink.router-link-exact-active::before {
            content: "";
            width: calc(100% + 28px);
            position: absolute;
            top: -4px;
            left: -14px;

      }

      .authorisation__link {
            margin: 0 15px;
      }
}

@media (max-width: 991px) {
      .burgerMenu {
            height: 44px;
      }

      .header__container {
            height: 60px;
            justify-content: space-between;
      }

      .menuWraper {
            padding: 12px;
            padding-left: calc(clamp(12px, calc(-12px + 62 * (100vw / 992)), 50px));
      }

      .menuWraper::before {
            content: "";
            width: 100%;
            height: 1px;
            position: absolute;
            top: 60px;
            left: 0;
            background-color: var(--color-text);
      }

      .logo {
            width: 200px;
            height: auto;
      }

      .nav {
            display: block;
      }

      .navLink {
            height: 44px;
            margin: 0;
            display: block;
      }

      .navLink.router-link-exact-active::before {
            display: none;
      }

      .authorisation {
            height: 44px;
      }

      .authorisation__link {
            height: 44px;
      }

      .authorisation__link--SignIn {
            margin-left: 0;
      }

      .authorisation__link--logIn::before {
            height: 44px;
            top: -7px;
      }
}
</style>