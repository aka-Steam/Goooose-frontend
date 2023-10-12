<script setup>
      import { ref, onMounted, computed } from 'vue'
      import Menu from '../../components/SidebarMenu.vue'
      import { useStore } from 'vuex'
      import { mapGetters, mapActions} from '../../storage/map-state'
      import { startConnect } from '../../services/mqtt'
      import HeaderRoute from '../../components/HeaderRoute.vue'
      import Widget from '../../components/Widget.vue'

      const { GET_DEVICES_FROM_API } = mapActions()
      //const { DEVICES } = mapGetters()

const DEVICES = {
 "data": [
    { "id": 1,
      "chip_id": 1865821,
      "name": "tester",
      "items":[
            {
              "id": 0,
              "item_id": 1234,
              "data": 
              {
                "sensors":{
                  "AIR_TEMPERATURE": 23,
                  "AIR_HUMIDITY": 55,
                  "SOIL_HUMIDITY": 32,
                  "SOIL_TEMPERATURE": 17,
                  "AIR_QUALITY": 550
                }
              }
            }
      ]
  },
     { "id": 2,
      "chip_id": 1000000,
      "name": "tester2",
      "items":[
            {
              "id": 1,
              "item_id": 1034,
              "data": 
              {
                "sensors":{
                  "AIR_TEMPERATURE": 22,
                  "AIR_HUMIDITY": 22,
                  "SOIL_HUMIDITY": 22,
                  "SOIL_TEMPERATURE": 22,
                  "AIR_QUALITY": 222
                }
              }
            }
      ]
  }
  ]
}


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
            // // Думаю стоит преенести в app vue или куда-нибудь в тот раон, чтобы при каждом переходе на страницу не запускалось
            // const autoreload  = setInterval(() => GET_DEVICES_FROM_API()
            // .then((response) => {
            //       if (response.data){
            //             console.log('Data arrived!');
            //       };
            //       if (store.state.auth.status.loggedIn == false){
            //             clearInterval(autoreload);
            //       }; 
            // }), 5000);    
            startConnect();
      })

</script> 

<template>
      <main class="dashboard-main">
            <Menu></Menu>
            <section class="dashboard-content">
                  <HeaderRoute>Главная</HeaderRoute>
                  <div class="devices-space">
                        <div v-if="DEVICES != null" v-for="(device, index) in DEVICES.data" :key="device.id">
                              <div class="device" @click="openItems[index] = !openItems[index]">{{ device.id }}
                                    &emsp;&emsp;&emsp;|&emsp;&emsp;&emsp; {{
                                          device.name }}</div>
                              <div class="device__items">
                                    <div v-if="openItems[index]" v-for="item in device.items" :key="item.id" class="device__item">
                                          <Widget :device-id="device.chip_id" :unit="item"/>
                                    </div>
                              </div>
                        </div>  
                  </div>
            </section>
      </main>
</template>

<style scoped>
      .devices-space {
            padding: 20px;
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
</style>