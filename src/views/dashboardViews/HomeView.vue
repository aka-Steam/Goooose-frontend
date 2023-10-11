<script setup>
      import { ref, onMounted, computed } from 'vue'
      import Menu from '../../components/SidebarMenu.vue'
      import { onPump } from '../../services/mqtt'
      import { useStore } from 'vuex'
      import { mapGetters, mapActions} from '../../storage/map-state'

      const { GET_DEVICES_FROM_API } = mapActions()
      const { DEVICES } = mapGetters()

      const store = useStore()  
      const openItems = ref([])

      GET_DEVICES_FROM_API()
            .then((response) => {
                  if (response.data){
                        console.log('Initial data arrived!');
                        openItems.value = new Array(store.state.devices.length).fill(false);
                  };
            }); 

      onMounted(()=>{   
            const autoreload  = setInterval(() => GET_DEVICES_FROM_API()
            .then((response) => {
                  if (response.data){
                        console.log('Data arrived!');
                  };
                  if (store.state.auth.status.loggedIn == false){
                        clearInterval(autoreload);
                  }; 
            }), 5000);    
      })
</script> 

<template>
      <main class="dashboard-main">
            <Menu></Menu>
            <section class="dashboard-content">
                  <div style="margin: 20px; text-align: center; color:var(--color-text);">Home (dashboard) page</div>
                  <hr>

                  <div v-if="DEVICES != null" v-for="(device, index) in DEVICES.data" :key="device.id">
                        <div class="device" @click="openItems[index] = !openItems[index]">{{ device.id }}
                              &emsp;&emsp;&emsp;|&emsp;&emsp;&emsp; {{
                                    device.name }}</div>
                        <div class="device__items">
                              <div v-if="openItems[index]" v-for="item in device.items" :key="item.id" class="device__item">
                                    <article class="widget">
                                          <div class="widget__controller widget__controller--watering">
                                                <div class="widget__title">{{ item.name }}</div>
                                                <hr>
                                                <div class="widget__group widget__group--watering">

                                                      <button class="widget__button widget__button--pump"
                                                            @click="onPump(device.chip_id, item.item_id)">Полить</button>

                                                      <!-- <label class="toggle">
                                                            <input type="checkbox"> class="toggle__input"
                                                            <input type="checkbox" <?= $user['automode'] ?> class="toggle__input"
                                                            onclick="autoModClick(this)">
                                                            <img src="img/valve.svg" alt="valve" class="autoValve"> 
                                                            <span class="toggle__slider">

                                                            </span>

                                                            <span class="toggle__text">автомод</span>
                                                      </label>  -->
                                                      <hr>
                                                      <div class="widget__group widget__group--sensors">
                                                            <div class="sensor">Температура воздха:
                                                                  <span id="temp"
                                                                        class="sensor_data">{{ item.data.sensors.AIR_TEMPERATURE
                                                                              + "&deg;C" }}</span>
                                                            </div>
                                                            <div class="sensor">Влажность воздуха:
                                                                  <span id="airHum"
                                                                        class="sensor_data">{{ item.data.sensors.AIR_HUMIDITY +
                                                                              "%" }}</span>
                                                            </div>
                                                            <div class="sensor">Влажность почвы:
                                                                  <span id="temp"
                                                                        class="sensor_data">{{ item.data.sensors.SOIL_HUMIDITY
                                                                              + "%" }}</span>
                                                            </div>
                                                            <div class="sensor">Температура почвы:
                                                                  <span id="tempSoil"
                                                                        class="sensor_data">{{ item.data.sensors.SOIL_TEMPERATURE
                                                                              + "&deg;C" }}</span>
                                                            </div>
                                                            <div class="sensor">Содержание CO2:
                                                                  <span id="co2"
                                                                        class="sensor_data">{{ item.data.sensors.AIR_QUALITY +
                                                                              "ppm" }} </span>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </article>
                              </div>
                        </div>
                  </div>                     
            </section>
      </main>
</template>

<style scoped>
      .dashboard-content {
            padding: 0 20px;
      }

      .device {
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 16px;
            padding: 10px 30px;
            width: 100%;
            height: 64px;
            border-radius: 32px;
            background-color: var(--color-sidebar-foreground);
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }

      .device__items {
            margin-bottom: 16px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 16px;
      }

      .device__item {

            padding: 10px 30px;
            width: 480px;
            height: auto;
            border-radius: 32px;
            background-color: var(--color-sidebar-foreground);
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }

      .soil-hum__value {
            display: block;
            line-height: 72px;
            font-size: 72px;
            color: var(--color-accent);
      }

      .sensor_data {
            color: var(--color-accent);
      }
</style>
