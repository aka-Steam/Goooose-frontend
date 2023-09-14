<script setup>
import { ref } from 'vue'
import { MqResponsive } from "vue3-mq";
import BurgerMenuIcon from './icons/IconBurgerMenu.vue'
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
                        <MqResponsive group>
                              <template #dark>
                                    <img alt="Goooose logo" class="logo" src="@/assets/images/logoLight.svg" />
                              </template>
                              <template #light>
                                    <img alt="Goooose logo" class="logo" src="@/assets/images/logoDark.svg" />
                              </template>
                        </MqResponsive>
                  </RouterLink>
                  <MqResponsive target="md+">
                        <!-- <nav class="nav">
                              <RouterLink to="/." class="navLink">О нас</RouterLink>
                              <RouterLink to="/" class="navLink">Документация</RouterLink>
                              <RouterLink to="/." class="navLink">Магазин</RouterLink>
                        </nav> -->
                        <BaseNav/>
                  </MqResponsive>
                  <MqResponsive target="md+">
                        <div class="authorisation">
                              <RouterLink to="/signin" class="authorisation__link authorisation__link--SignUp">Регистрация</RouterLink>
                              <RouterLink to="/login" class="authorisation__link authorisation__link--logIn">Войти</RouterLink>
                        </div>
                  </MqResponsive>
                  <!-- <MqResponsive target="xs-sm" class="burgerMenu">
                         <BurgerMenuIcon @click="burgerClick" /> -->
                        <!-- <div @click="burgerClick" class="header__burger">
                              <span></span>
                        </div>
                  </MqResponsive> -->
                  <MqResponsive target="xs-sm" @click="burgerClick" class="header__burger" v-bind:class="{active:openMenu}">
                              <span></span>
                  </MqResponsive>
            </div>


            <MqResponsive target="xs-sm">
                  <div v-if="openMenu" class="menuWraper">
                        <nav class="nav">
                              <RouterLink to="/about" class="navLink">О нас</RouterLink>
                              <RouterLink to="/doc" class="navLink">Документация</RouterLink>
                              <RouterLink to="/shop" class="navLink">Магазин</RouterLink>
                        </nav>

                        <div class="authorisation">
                              <RouterLink to="/signin" class="authorisation__link authorisation__link--SignUp">Регистрация
                              </RouterLink>
                              <RouterLink to="/login" class="authorisation__link authorisation__link--logIn">Войти</RouterLink>
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
      margin: 0 32px;
      height: 80px;
      display: flex;
      place-items: center;
      justify-content: space-between;
}
.header__burger{
      display: none;
}

.logo {
      display: block;
       margin-right: 15px;
      width: 260px;
      /* height: 51px; */
}

/* .nav {
      width: calc(clamp(424px, calc(0px + 100vw * 0.3), 571px));
      display: flex;
      justify-content: space-between;
} */

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
      position: relative;
      text-decoration: none;
}

.authorisation__link--SignUp{
      margin: 0 19px;
}
.authorisation__link--logIn {
      display: inline-block;
      padding: 4px 18px;
      /* width: 150%; */
      /*height: 40px;
      /* position: absolute;
      top: -5px;
      left: -25%; */
      border: 1px solid var(--color-text);
      border-radius: 30px;
      transition: 0.4s;
}

/* .authorisation__link--logIn::before {
      content: "";
      width: 150%;
      height: 40px;
      position: absolute;
      top: -5px;
      left: -25%;
      border: 1px solid var(--color-text);
      border-radius: 30px;
      transition: 0.4s;
} */

/* .authorisation__link:hover.authorisation__link--logIn::before {
      border-color: var(--color-accent);
} */
.authorisation__link:hover.authorisation__link--logIn {
      border-color: var(--color-accent);
}


@media (max-width: 1200px) {
      .header {
      font-size: 18px;
}
      .header__container{
            height: 70px;
            margin: 0 24px;
           
      }
      .logo {
            width: 220px;
      }

      

      .authorisation__link--SignUp {
            margin: 0 15px;
      }
}

@media (max-width: 991px) 
{
      .header{
            font-size: 16px;
      }

      .header__container{
 
            height: 60px;
    
            margin: 0 12px;
      }
      .logo{
            width: 140px;
      }

      .authorisation__link--SignUp{
            margin-right: 8px;
      }
      .authorisation__link--logIn{
            padding: 4px 12px;
      }
}

/* @media (max-width: 991px) {
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
            width: auto;
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

      .authorisation__link--SignUp {
            margin-left: 0;
      }

      .authorisation__link--logIn {
            padding: 6px 12px;
      }

      /* .authorisation__link--logIn::before {
            height: 44px;
            top: -7px;
      } 
} */

@media (max-width: 768px){
      
      
      .header__container {
      margin: 0 10px;
            height: 52px;
      }
      /* .logo {
            width: 200px;
      } */
      .header__burger{
            display: block;
            position: relative;
            width: 40px;
            height: 40px;
      }

      .header__burger span{
            display: block;
            
            margin-left: auto;
margin-right: auto;
            width: 88%;
            height: 2px;
            position:absolute;      
            left:0;
            right: 0;
text-align: center;
            top: calc(50% - 1px);
            background-color: var(--color-text);
            transition: all 0.3s;
      }

      .header__burger::before,
      .header__burger::after{
            content:'';
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

      .header__burger::before{
            top:24%;
      }
      .header__burger::after{
            bottom: 24%;
      }

.header__burger.active span {
      opacity: 0;
      transform: scale(0);
}
      .header__burger.active::before{
            transform: rotate(45deg);
            top: calc(50% - 1px);
      }
      .header__burger.active::after{
            transform: rotate(-45deg);
            bottom: calc(50% - 1px);
      }
      /* net bios smp - стек протоколов microsoft  */
      




}
</style>