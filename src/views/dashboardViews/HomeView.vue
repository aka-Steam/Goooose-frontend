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
        {
            "id": 2,
            "chip_id": "13871010",
            "items": [
                {
                    "id": 6,
                    "item_id": 1211,
                    "name": null,
                    "description": null,
                    "data": {
                        "sensors": {
                            "AIR_TEMPERATURE": "5",
                            "AIR_HUMIDITY": "21",
                            "SOIL_TEMPERATURE": "26",
                            "SOIL_HUMIDITY": "0",
                            "AIR_QUALITY": "271"
                        },
                        "coordinate": {
                            "LONGITUDE": 45.240543,
                            "LATITUDE": 54.270219
                        },
                        "autoMode": false,
                        "humidityThreshold": 0
                    },
                    "created_at": "2023-10-03T07:23:08.000000Z"
                }
            ],
            "name": "Хачатур",
            "description": "Я продаю мячики",
            "created_at": "2023-09-24T18:22:44.000000Z"
        },
        {
            "id": 3,
            "chip_id": "265453245",
            "items": [
                {
                    "id": 4,
                    "item_id": 2645,
                    "name": "Балабай",
                    "description": "СынБхатачура",
                    "data": {
                        "sensors": {
                            "AIR_TEMPERATURE": 26,
                            "AIR_HUMIDITY": 38,
                            "SOIL_TEMPERATURE": 54,
                            "SOIL_HUMIDITY": 0,
                            "AIR_QUALITY": 634
                        },
                        "coordinate": {
                            "LONGITUDE": 45.140343,
                            "LATITUDE": 54.160119
                        },
                        "autoMode": true,
                        "humidityThreshold": 23
                    },
                    "created_at": null
                },
                {
                    "id": 5,
                    "item_id": 1654,
                    "name": "Каравай",
                    "description": "Сын Хачатура",
                    "data": {
                        "sensors": {
                            "AIR_TEMPERATURE": 26,
                            "AIR_HUMIDITY": 38,
                            "SOIL_TEMPERATURE": 54,
                            "SOIL_HUMIDITY": 0,
                            "AIR_QUALITY": 634
                        },
                        "coordinate": {
                            "LONGITUDE": 45.140543,
                            "LATITUDE": 54.170219
                        },
                        "autoMode": false,
                        "humidityThreshold": 2 
                    },
                    "created_at": null
                }
            ],
            "name": "Хачатур",
            "description": "Я продаю шшарики",
            "created_at": null
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
</style>