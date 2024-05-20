<script setup>
import { ref } from 'vue'
import { MqResponsive } from "vue3-mq";
import BaseNav from './BaseNavigation.vue'

const openMenu = ref(false)

function burgerClick() {
      openMenu.value = !openMenu.value
}
</script>

<template>
      <header class="header">
            <div class="header__container">
                  <RouterLink to="/">
                        <MqResponsive group class="click-area-wrapper">
                              <template #dark>
                                    <img alt="Goooose logo" class="logo" src="@/assets/images/logoLight.svg" />
                              </template>
                              <template #light>
                                    <img alt="Goooose logo" class="logo" src="@/assets/images/logoDark.svg" />
                              </template>
                        </MqResponsive>
                  </RouterLink>
                  <MqResponsive target="md+">
                        <BaseNav class="horisontal" />
                  </MqResponsive>
                  <MqResponsive target="md+">
                        <div class="authorisation">
                              <RouterLink to="/signup" class="authorisation__link authorisation__link--sign-up">Регистрация
                              </RouterLink>
                              <RouterLink to="/login" class="authorisation__link authorisation__link--log-in">Войти
                              </RouterLink>
                        </div>
                  </MqResponsive>
                  <MqResponsive target="xs-sm" @click="burgerClick" class="header__burger"
                        v-bind:class="{ active: openMenu }">
                        <span></span>
                  </MqResponsive>
            </div>

            <MqResponsive target="xs-sm">
                  <div class="vertical-menu-container" v-bind:class="{ active: openMenu }">
                        <BaseNav class="vertical" />
                        <div class="authorisation">
                              <RouterLink to="/signup" class="authorisation__link authorisation__link--sign-up">
                                    Регистрация
                              </RouterLink>
                              <RouterLink to="/login" class="authorisation__link authorisation__link--log-in">
                                    Войти
                              </RouterLink>
                        </div>
                  </div>
            </MqResponsive>
      </header>
</template>

<style scoped>
.header {
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      background-color: var(--color-background-header);
      box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
      font-size: 20px;
      z-index: 100;
}

.header__container {
      margin: 0 32px;
      height: 70px;
      display: flex;
      place-items: center;
      justify-content: space-between;
}

.header__burger {
      display: none;
}

.logo {
      display: block;
      margin-right: 14px;
      width: 260px;
}

.authorisation__link {
      display: inline-block;
      position: relative;
      text-decoration: none;
}

.authorisation__link--sign-up {
      margin: 0 19px;
      padding: 5px 0;
}

.authorisation__link--log-in {
      padding: 4px 18px;
      border: 1px solid var(--color-text);
      border-radius: 30px;
      transition: 0.4s;
}

.authorisation__link:hover.authorisation__link--log-in {
      border-color: var(--color-accent);
}


@media (max-width: 1200px) {
      .header {
            font-size: 18px;
      }

      .header__container {
            height: 70px;
            margin: 0 24px;
      }

      .logo {
            width: 220px;
      }

      .authorisation__link--sign-up {
            margin: 0 14px;
      }
}

@media (max-width: 991px) {
      .header {
            font-size: 16px;
      }

      .header__container {
            height: 60px;
            margin: 0 12px;
      }

      .logo {
            width: 134px;
      }

      .authorisation__link--sign-up {
            margin-right: 8px;
      }

      .authorisation__link--log-in {
            padding: 4px 12px;
      }
}

@media (max-width: 767px) {
      .header__container {
            margin: 0 0px;
            padding: 0 10px;
            height: 52px;
            background-color: var(--color-background-header);
      }

      .header__burger {
            display: block;
            position: relative;
            width: 40px;
            height: 40px;
            cursor: pointer;
      }

      .header__burger span {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 88%;
            height: 2px;
            position: absolute;
            left: 0;
            right: 0;
            text-align: center;
            top: calc(50% - 1px);
            background-color: var(--color-text);
            transition: all 0.3s;
      }

      .header__burger::before,
      .header__burger::after {
            content: '';
            width: 88%;
            height: 2px;
            margin-left: auto;
            margin-right: auto;
            position: absolute;
            left: 0;
            right: 0;
            text-align: center;
            background-color: var(--color-text);
            transition: all 0.3s;
      }

      .header__burger:hover span {
            background-color: var(--color-accent);
      }

      .header__burger:hover::before,
      .header__burger:hover::after {
            background-color: var(--color-accent);
      }

      .header__burger::before {
            top: 24%;
      }

      .header__burger::after {
            bottom: 24%;
      }

      .header__burger.active span {
            opacity: 0;
            transform: scale(0);
      }

      .header__burger.active::before {
            transform: rotate(45deg);
            top: calc(50% - 1px);
      }

      .header__burger.active::after {
            transform: rotate(-45deg);
            bottom: calc(50% - 1px);
      }

      .vertical-menu-container {
            background-color: var(--color-background-header);
            padding: 12px;
            padding-left: calc(clamp(12px, calc(-12px + 62 * (100vw / 992)), 50px));
            min-height: 200px;

            width: 100%;
            position: absolute;
            top: -300px;
            box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
            transition: 0.2s;
            z-index: -1000;
      }

      .vertical-menu-container.active {
            top: 52px
      }

      .vertical-menu-container::before {
            content: '';
            width: 100%;
            height: 1px;
            position: absolute;
            top: 0;
            left: 0;
            background-color: var(--color-text);
      }

      .authorisation {
            margin-top: 10px;
            padding-top: 16px;
            height: 40px;
            display: flex;
            align-items: center;
            position: relative;
      }

      .authorisation::before {
            content: '';
            width: calc(100% - calc(clamp(12px, calc(-12px + 62 * (100vw / 992)), 50px)) + 12px);
            height: 1px;
            position: absolute;
            top: 0;
            left: 0;
            background-color: var(--color-text);
      }

      .authorisation__link--sign-up::before,
      .authorisation__link--log-in::before {
            content: '';
            margin: auto;
            width: 100%;
            height: 40px;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
      }
}</style>