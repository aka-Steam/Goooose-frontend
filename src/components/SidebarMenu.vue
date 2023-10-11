<script setup>
import { ref, computed } from 'vue'
import { MqResponsive } from "vue3-mq";
import store from '../storage';
import devices from '../services/device.service.js'

function isNarrow(){
      console.log(window.innerWidth);
      if (window.innerWidth >= 1200) {
            return false;
    } else {
            return true;
    }}

const narrowMenu = ref(isNarrow());

</script>

<template>
      <aside class="sidebar" v-bind:class="{ narrow: narrowMenu }">
            <div class="sidebar-menu" v-bind:class="{ narrow: narrowMenu }">
                  <div class="logo-container">
                        <RouterLink to="/">
                              <MqResponsive group v-if="!narrowMenu">
                                    <template #dark>
                                          <img alt="Goooose logo" class="logo" src="@/assets/images/logoLight.svg" />
                                    </template>
                                    <template #light>
                                          <img alt="Goooose logo" class="logo" src="@/assets/images/logoDark.svg" />
                                    </template>
                              </MqResponsive>
                              <MqResponsive group v-else>
                                    <template #dark>
                                          <img alt="Goooose logo mini" class="logo" src="@/assets/images/logoLightMini.svg" />
                                    </template>
                                    <template #light>
                                          <img alt="Goooose logo mini" class="logo" src="@/assets/images/logoDarkMini.svg" />
                                    </template>
                              </MqResponsive>
                        </RouterLink>
                        <div @click="narrowMenu = !narrowMenu" class="indicator"></div>
                  </div>

                  <div class="sidebar-menu__middleground">
                        <nav class="nav">
                              <ul class="nav__list">
                                    <li class="nav__list-item">
                                          <RouterLink to="/home" @click="devices.getDevices" class="nav-link">
                                                <div class="nav-link__icon">
                                                      <svg class="svg-icon" width="24" height="25" viewBox="0 0 24 25"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                  d="M0.40244 7.79237C-0.246112 9.14518 -0.0184477 10.7274 0.43688 13.8919L0.771404 16.2167C1.3563 20.2817 1.64875 22.3141 3.05883 23.5283C4.4689 24.7424 6.53684 24.7424 10.6727 24.7424H13.3273C17.4631 24.7424 19.5311 24.7424 20.9412 23.5283C22.3512 22.3141 22.6436 20.2817 23.2286 16.2167L23.5631 13.8919C24.0185 10.7274 24.2461 9.14518 23.5975 7.79237C22.949 6.43955 21.5686 5.61724 18.8077 3.9726L17.1458 2.98268C14.6388 1.48918 13.3852 0.742432 12 0.742432C10.6148 0.742432 9.36125 1.48918 6.8541 2.98268L5.19229 3.9726C2.43142 5.61724 1.05099 6.43955 0.40244 7.79237ZM13.74 18.1538C12.7706 17.1077 11.2297 17.1077 10.2604 18.1538C9.92256 18.5185 9.35312 18.5402 8.98849 18.2024C8.62387 17.8645 8.60214 17.2951 8.93995 16.9306C10.6217 15.1154 13.3787 15.1154 15.0604 16.9306C15.3982 17.2951 15.3764 17.8645 15.0119 18.2024C14.6472 18.5402 14.0778 18.5185 13.74 18.1538ZM7.86034 15.563C10.1551 13.0861 13.8451 13.0861 16.1399 15.563C16.4778 15.9277 17.0472 15.9494 17.4118 15.6116C17.7764 15.2738 17.7982 14.7043 17.4604 14.3398C14.4532 11.0939 9.54708 11.0939 6.53994 14.3398C6.20213 14.7043 6.22386 15.2738 6.58848 15.6116C6.9531 15.9494 7.52253 15.9277 7.86034 15.563ZM18.5399 12.9728C14.9196 9.06528 9.08059 9.06528 5.46032 12.9728C5.12251 13.3375 4.55307 13.3592 4.18845 13.0214C3.82383 12.6836 3.8021 12.1141 4.13991 11.7496C8.47255 7.07306 15.5276 7.07306 19.8604 11.7496C20.1982 12.1141 20.1764 12.6836 19.8118 13.0214C19.4472 13.3592 18.8777 13.3375 18.5399 12.9728Z" />
                                                      </svg>

                                                </div>
                                                <span class="nav-link__text">Гланая</span>
                                          </RouterLink>
                                    </li>
                                    <li class="nav__list-item">
                                          <RouterLink to="/map" @click="devices.getDevices" class="nav-link">
                                                <div class="nav-link__icon">
                                                      <svg class="svg-icon" width="24" height="25" viewBox="0 0 24 25" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                  d="M11.9998 0.742432C7.3607 0.742432 3.59994 4.24242 3.59994 8.55988C3.59994 12.8435 6.28089 17.842 10.4637 19.6297C11.4388 20.0463 12.5608 20.0463 13.5359 19.6297C17.7187 17.842 20.3997 12.8435 20.3997 8.55988C20.3997 4.24242 16.6389 0.742432 11.9998 0.742432ZM14.3998 9.1423C14.3998 10.4678 13.3253 11.5423 11.9998 11.5423C10.6743 11.5423 9.59985 10.4678 9.59985 9.1423C9.59985 7.81684 10.6743 6.74234 11.9998 6.74234C13.3253 6.74234 14.3998 7.81684 14.3998 9.1423Z" />
                                                            <path
                                                                  d="M23.9996 19.3425C23.9996 22.3248 18.6271 24.7424 11.9998 24.7424C5.3725 24.7424 0 22.3248 0 19.3425C0 17.8226 1.39552 16.4492 3.64144 15.468C5.01191 17.9829 7.10182 20.1507 9.75645 21.2852C11.1833 21.895 12.8163 21.895 14.2432 21.2852C16.8978 20.1507 18.9877 17.9829 20.3582 15.468C22.604 16.4492 23.9996 17.8226 23.9996 19.3425Z" />
                                                      </svg>
                                                </div>
                                                <span class="nav-link__text">Карта</span>
                                          </RouterLink>
                                    </li>
                                    <li class="nav__list-item">
                                          <RouterLink to="/doc" class="nav-link">
                                                <div class="nav-link__icon">
                                                      <svg class="svg-icon" width="24" height="25" viewBox="0 0 24 25" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <g clip-path="url(#clip0_815_470)">
                                                                  <path
                                                                        d="M18.2645 20.0293H18.8217C20.7674 20.0293 21.7403 19.0376 21.7403 17.0635V7.9585H16.1393C15.157 7.9585 14.5997 7.40123 14.5997 6.41895V0.742432H9.69774C7.75203 0.742432 6.76974 1.73419 6.76974 3.70819V4.171H7.9976C9.32939 4.171 10.3967 4.54879 11.4545 5.60667L16.8099 10.9809C17.8772 12.0482 18.2645 13.1438 18.2645 14.4284V20.0293ZM16.3282 6.77787H21.2868C21.2302 6.4756 21.0319 6.21113 20.7013 5.88057L16.6777 1.78137C16.3565 1.45082 16.0732 1.243 15.7804 1.19582L15.7898 6.23003C15.7898 6.61729 15.941 6.77787 16.3282 6.77787ZM4.92796 24.7424H14.0519C15.9976 24.7424 16.9799 23.7507 16.9799 21.7767V14.1733H10.1417C8.92323 14.1733 8.35653 13.5972 8.35653 12.3883V5.45552H4.92796C2.98229 5.45552 2 6.44727 2 8.42132V21.7767C2 23.7601 2.98229 24.7424 4.92796 24.7424ZM10.1322 12.8794H16.4793C16.3849 12.511 16.1298 12.171 15.7048 11.7365L10.7934 6.74007C10.3778 6.31506 10.0094 6.06002 9.65051 5.95613V12.3977C9.65051 12.7188 9.81106 12.8794 10.1322 12.8794Z" />
                                                            </g>
                                                            <defs>
                                                                  <clipPath id="clip0_815_470">
                                                                        <rect width="24" height="24" fill="white"
                                                                              transform="translate(0 0.742432)" />
                                                                  </clipPath>
                                                            </defs>
                                                      </svg>
                                                </div>
                                                <span class="nav-link__text">Документация</span>
                                          </RouterLink>
                                    </li>
                                    <li class="nav__list-item">
                                          <RouterLink to="/shop" class="nav-link">
                                                <div class="nav-link__icon">
                                                      <svg class="svg-icon" width="24" height="25" viewBox="0 0 24 25" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                  d="M23.0648 8.74243H19.5945L18.855 4.08243C18.5514 2.64603 17.5243 1.50143 16.1812 1.10243C15.5188 0.877632 14.8289 0.756432 14.1332 0.742432H9.88545C9.18969 0.756432 8.49982 0.877632 7.83744 1.10243C6.49429 1.50143 5.46725 2.64603 5.16365 4.08243L4.42409 8.74243H0.953857C0.430287 8.73903 0.00323972 9.18403 1.60013e-05 9.73643C-0.00055289 9.84023 0.0140487 9.94343 0.043631 10.0424L3.60868 22.6424C3.98112 23.8916 5.07889 24.7416 6.3204 24.7424H17.6982C18.9327 24.733 20.0206 23.8846 20.391 22.6424L23.956 10.0424C24.1132 9.51563 23.8356 8.95423 23.3361 8.78843C23.2483 8.75923 23.1569 8.74383 23.0648 8.74243ZM6.35832 8.74243L7.04099 4.40243C7.19402 3.67743 7.74945 3.12343 8.44426 3.00243C8.91132 2.84723 9.39601 2.75983 9.88545 2.74243H14.1332C14.6289 2.75803 15.1202 2.84543 15.5933 3.00243C16.2881 3.12343 16.8436 3.67743 16.9966 4.40243L17.6603 8.74243H6.28247H6.35832Z" />
                                                      </svg>

                                                </div>
                                                <span class="nav-link__text">Магазин</span>
                                          </RouterLink>
                                    </li>
                              </ul>
                        </nav>

                        <RouterLink to="/profile" class="profile">
                              <div class="profile__icon">
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path opacity="0.7"
                                                d="M12 22.01C17.5228 22.01 22 17.5329 22 12.01C22 6.48716 17.5228 2.01001 12 2.01001C6.47715 2.01001 2 6.48716 2 12.01C2 17.5329 6.47715 22.01 12 22.01Z"
                                                fill="#1F1E2E" />
                                          <path d="M12 6.93994C9.93 6.93994 8.25 8.61994 8.25 10.6899C8.25 12.7199 9.84 14.3699 11.95 14.4299C11.98 14.4299 12.02 14.4299 12.04 14.4299C12.06 14.4299 12.09 14.4299 12.11 14.4299C12.12 14.4299 12.13 14.4299 12.13 14.4299C14.15 14.3599 15.74 12.7199 15.75 10.6899C15.75 8.61994 14.07 6.93994 12 6.93994Z"
                                                fill="#0F0F0F" />
                                          <path d="M18.7807 19.36C17.0007 21 14.6207 22.01 12.0007 22.01C9.3807 22.01 7.0007 21 5.2207 19.36C5.4607 18.45 6.1107 17.62 7.0607 16.98C9.7907 15.16 14.2307 15.16 16.9407 16.98C17.9007 17.62 18.5407 18.45 18.7807 19.36Z"
                                                fill="#0F0F0F" />
                                    </svg>
                              </div>
                              <span class="profile__text">Профиль</span>
                        </RouterLink>
                  </div>
            </div>
      </aside>
</template>
<style>
      :root {
            --sidebar-menu-expanded-width: 300px;
            --sidebar-menu-narrow-width: 60px;
      }
</style>

<style scoped> 
      
      .sidebar{
            content: "";
            min-width:  var(--sidebar-menu-expanded-width);
            max-width: var(--sidebar-menu-expanded-width);
            
            height: 100px;
      }


      .sidebar-menu {
            width: var(--sidebar-menu-expanded-width);
            height: 100vh;

            position: fixed;
            left: 0;
            top: 0;

            background-color: var(--color-sidebar-background);
      }
      
      .logo-container {
            padding: 8px 24px;
            height: 61px;
            position: relative;
      }

      .logo-container::before {
            content: "";
           
            width: calc(100% - 20px);
            height: 1px;
           
            position: absolute;
            left: 0;
            bottom: 0px;

            background-color: var(--color-text);
      }

      .logo {
            width: auto;
            height: 44px;
      }

      .indicator{
            content: "";
           
            width: 20px;
            height: 20px;
           
            position: absolute;
            right: -10px;
            bottom: -9px;
            border: 1px solid var(--color-text);
            border-radius: 100%;
            background-color: transparent;
      }

      .sidebar-menu__middleground {
            margin-top: 16px;
            padding: 58px 28px;
            width: 300px;
            height: calc(100vh - 60px);

            border-radius: 20px 0 0 0;
            background-color: var(--color-sidebar-middleground);

            display: flex;
            flex-direction: column;
            justify-content: space-between;
      }

      .nav,
      .profile {
            background-color: var(--color-sidebar-foreground);
      }

      .nav {
            padding: 32px 0 72px 0;
            border-radius: 30px;
            height: 300px;
      }

      .nav__list {
            padding: 0;
            width: 100%;
            list-style: none;
            display: block;
      }

      .nav__list-item {
            position: relative;

      }

      .nav-link {
            padding: 0 12px;

            width: 100%;
            height: 48px;

            display: flex;
            align-items: center;
            gap: 0 16px;

            text-decoration: none;
            font-size: 20px;
      }

      .nav-link.router-link-exact-active {
            color: var(--color-accent);
      }

      .nav-link.router-link-exact-active::after {
            content: '';

            position: absolute;
            top: 0;
            left: -28px;

            display: block;
            width: 300px;
            height: 48px;

            background-color: var(--color-sidebar-active);
            z-index: 0;
      }

      .nav-link__icon {
            display: inline-block;
            width: 24px;
            height: 24px;
            z-index: 100;
      }


      .svg-icon {
            fill: var(--color-text);
            transition: fill .4s ease;
      }

      .nav-link.router-link-exact-active .svg-icon {
            fill: var(--color-accent);
      }

      .nav-link:hover .svg-icon {
            fill: var(--color-accent);
      }

      .nav-link__text {
            z-index: 100;
      }

      .profile {
            margin-top: 30px;
            padding: 10px;
            border-radius: 40px;
            height: 80px;
            display: flex;
            justify-content: left;
            align-items: center;
            gap: 14px;

            font-size: 20px;
            text-decoration: none;
      }

      .profile.router-link-exact-active {
            color: var(--color-accent);
            background-color: var(--color-sidebar-active);
      }

      .profile__icon {
            width: 60px;
            height: 60px;
            background-color: var(--color-accent);
            border-radius: 30px;
      }

      .developer-operations {
            background-color: var(--color-sidebar-foreground);
            padding: 20px auto;
            margin-top: 30px;
            height: 100px;
            border-radius: 40px;
            white-space: nowrap;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
      }



      /* narrow menu */
      .sidebar.narrow{
            min-width:  var(--sidebar-menu-narrow-width);
            max-width: var(--sidebar-menu-narrow-width);
      }
      
      .sidebar-menu.narrow{
            width:  var(--sidebar-menu-narrow-width);
      }
      .narrow .logo-container {
            padding: 12px 8px;
           
      }

      .narrow .logo {
            width: 44px;
            height: auto;
      }

      .narrow .sidebar-menu__middleground {
            margin-top: 16px;
            padding: 58px 8px;
            width:  var(--sidebar-menu-narrow-width);
      }

      .narrow  .nav-link {
            padding: 0 10px;
      }

      .narrow .nav-link.router-link-exact-active::after {
            width: var(--sidebar-menu-narrow-width);      
            left: -8px;
      }

      .narrow .nav-link__text {
            display: none;
      }

      .narrow .profile {
            padding: 0px;
      }

      .narrow .profile__icon {
            width: 44px;
            height: 44px;
      }

      .narrow .profile__text{
            display: none;
      }

      .narrow .developer-operations {
            display: none;
      }
</style>