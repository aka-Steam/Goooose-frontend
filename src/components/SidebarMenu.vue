<script setup>
import { MqResponsive } from "vue3-mq";
import store from '../storage';
import devices from '../services/device.service.js'
</script>
<template>
      <section class="sidebar-menu">
            <div class="logo-container">
                  <RouterLink to="/">
                  <MqResponsive group >
                        <template class="sdsd" #dark>
                              <img alt="Goooose logo" class="logo" src="@/assets/images/logoLight.svg" />
                        </template>
                        <template #light>
                              <img alt="Goooose logo" class="logo" src="@/assets/images/logoDark.svg" />
                        </template>
                  </MqResponsive>
            </RouterLink>
            </div>
            
            <div class="sidebar-menu__middleground">
                  <nav class="nav">
                        <ul>
                              <li>
                                    <RouterLink to="/home" @click = "devices.getDevices">Гланая</RouterLink>
                              </li>
                              <li>
                                    <RouterLink to="/map" @click = "devices.getDevices" >Карта</RouterLink>
                              </li>
                              <li>
                                    <RouterLink to="/doc">Документация</RouterLink>
                              </li>
                              <li>
                                    <RouterLink to="/shop">Магазин</RouterLink>
                              </li>
                        </ul>
                  </nav>
                  
                  <div class="developer-operations">
                        <div>developer operations</div>
                        <button @click="console.log(store)">Show veux storage</button>    
                        <button @click = "devices.getDevices">getDevices</button>                 
                  </div>

                  <div class="profile">
                        <RouterLink to="/profile">Профиль</RouterLink>
                  </div>
            </div>

      </section>
</template>

<style scoped> 
.sidebar-menu {
       min-width: 300px;
       max-width: 300px;
       height: 100vh;

       position: sticky;
       /* left: 0; */
       top: 0;

       background-color: var(--color-sidebar-background);

 }
 .logo-container{
      padding: 8px 24px;
      height: 61px;
      position: relative;
 }

 .logo-container::before{
      content: "";
      width: calc(100% - 20px);
      height: 1px;
      position: absolute ;
      
      left: 0;
      bottom: 0px;

      background-color: var(--color-text);
 }
 .logo {
       width: auto;
       height: 44px;
 }

 .sidebar-menu__middleground{
      margin-top: 16px;
      padding: 58px 28px;
      height: calc(100vh - 60px); 
      border-radius: 20px 0 0 0;
      background-color: var(--color-sidebar-middleground)
 }

 


 .nav,
 .profile{
background-color: var(--color-sidebar-foreground);
 }

 .nav{
      border-radius: 30px;
 }

 .profile{
      margin-top: 30px;
      border-radius: 40px;
 }

 .developer-operations{
      background-color: var(--color-sidebar-foreground);
      padding: 20px auto;
      margin-top: 30px;
      border-radius: 40px;
      white-space: nowrap;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
 }

</style>