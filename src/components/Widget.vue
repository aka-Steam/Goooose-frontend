<script setup>
import { onPump, autoModClick, onHumidityThreshold} from '../services/mqtt'
import Switch from './Switch.vue'
import RangeSlider from './RangeSlider.vue'

const props = defineProps({
      device_index:{
            type: Number,
            default: 0
      },
      item_index:{
            type: Number,
            default: 0
      },
      deviceId:{
            type: Number,
            default: 0
      },
      unit:{
            type: Object
      }
}) 

function onAutoModClick(status, device_chipId, item, device_state_index, item_state_index,){
      //вызвать изменение state по  id
 //state не обновляесм, сам обновится и индексы не нужны соответственно
      autoModClick(status, device_chipId, item)
}

function onMoistureThresholdChange(value, device_chipId, item){
       //state не обновляесм, сам обновится и индексы не нужны соответственно
      onHumidityThreshold(value, device_chipId, item)
}

</script>

<template>
       <article class="widget">
            <div class="widget__controller">
                  <div class="widget__title">{{ unit.name }}</div> 
                  <hr>
                  <div class="widget__group">
                        <div class="sensor">Температура воздха:
                              <span id="temp"
                                    class="sensor__data">{{ unit.data.sensors.AIR_TEMPERATURE
                                          + "&deg;C" }}</span>
                        </div>
                        <div class="sensor">Влажность воздуха:
                              <span id="airHum"
                                    class="sensor__data">{{ unit.data.sensors.AIR_HUMIDITY +
                                          "%" }}</span>
                        </div>
                        <div class="sensor">Влажность почвы:
                              <span id="temp"
                                    class="sensor__data">{{ unit.data.sensors.SOIL_HUMIDITY
                                          + "%" }}</span>
                        </div>
                        <div class="sensor">Температура почвы:
                              <span id="tempSoil"
                                    class="sensor__data">{{ unit.data.sensors.SOIL_TEMPERATURE
                                          + "&deg;C" }}</span>
                        </div>
                        <div class="sensor">Содержание CO2:
                              <span id="co2"
                                    class="sensor__data">{{ unit.data.sensors.AIR_QUALITY +
                                          "ppm" }} </span>
                        </div>
                  </div>
                  <hr>
                  <div class="widget__group">
                        <div class="widget__group--control">
                              <button class="widget__button"
                              @click="onPump(deviceId, unit.item_id)">Полить</button>
                              <!-- unit.autoMode cange vuex.state variable -->
                              <Switch :checked="unit.data.autoMode" @update:checked="(status)=>onAutoModClick(status, deviceId, unit, device_index, item_index)" label="Автополив"/>      
                        </div> 
                        <RangeSlider
                              :disabled="false" 
                              :elementId="unit.item_id" 
                              :modelValue="unit.data.humidityThreshold" 
                              @update:modelValue="(value)=>onMoistureThresholdChange(value, deviceId, unit)">
                              Порог влажности для начала полива в автоматическом режиме
                        </RangeSlider>
                  </div>  
            </div>
      </article>
      <!-- {{"di " + device_index + "; ii " +  item_index}} -->
</template>

<style scoped>
      .widget{
            padding: 10px 18px;
            max-width: 340px;
            min-width: 280px;
            height: auto;
            border-radius: 32px;
            background-color: var(--color-sidebar-foreground);
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }

      .sensor__data {
            color: var(--color-accent);
      }
      
      .widget__group{
            margin: 8px 0;
      }
      .widget__group--control{
            display:flex;
      }

      .widget__button{
            cursor:pointer;
            width: 100px;
            height: 30px;
            text-decoration: uppercase;
            color: var(--color-text-light);
            border: 1px solid var(--color-text);
            border-radius: 15px;
            background-color: var(--color-darck)
      }
      .widget__button:hover{
            background-color: var(--color-darck2)
      }
</style>