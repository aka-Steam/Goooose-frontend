<script setup>
import { onPump, autoModClick, onHumidityThreshold} from '../services/mqtt'
import Switch from './Switch.vue'
import RangeSlider from './RangeSlider.vue'

const props = defineProps({
      deviceId: Number,
      unit: Object
}) 

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
                              <Switch :checked="unit.autoMode" @update:checked="(status)=>autoModClick(deviceId, unit.item_id, status)" label="Автополив"/>        
                        </div> 
                        <RangeSlider
                              :disabled="false" 
                              :elementId="unit.item_id" 
                              :modelValue="unit.humidityThreshold" 
                              @update:modelValue="(value)=>onHumidityThreshold(deviceId, unit.item_id, value)">
                              Порог влажности для начала полива в автоматическом режиме
                        </RangeSlider>
                  </div>  
            </div>
      </article>
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