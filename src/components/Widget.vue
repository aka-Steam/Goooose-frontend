<script setup>
import { onPump, autoModClick} from '../services/mqtt'
import Switch from './Switch.vue'

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
                  <div class="widget__group widget__group--control">
                        <button class="widget__button"
                              @click="onPump(deviceId, unit.item_id)">Полить</button>
                              <Switch :checked="false" @update:checked="(status)=>autoModClick(deviceId, unit.item_id, status)" label="Автополив"/>
                  </div> 
                  <hr>
                  <div class="widget__group">
                        <div class="widget__group widget__group--sensors">
                              <div class="sensor">Температура воздха:
                                    <span id="temp"
                                          class="sensor_data">{{ unit.data.sensors.AIR_TEMPERATURE
                                                + "&deg;C" }}</span>
                              </div>
                              <div class="sensor">Влажность воздуха:
                                    <span id="airHum"
                                          class="sensor_data">{{ unit.data.sensors.AIR_HUMIDITY +
                                                "%" }}</span>
                              </div>
                              <div class="sensor">Влажность почвы:
                                    <span id="temp"
                                          class="sensor_data">{{ unit.data.sensors.SOIL_HUMIDITY
                                                + "%" }}</span>
                              </div>
                              <div class="sensor">Температура почвы:
                                    <span id="tempSoil"
                                          class="sensor_data">{{ unit.data.sensors.SOIL_TEMPERATURE
                                                + "&deg;C" }}</span>
                              </div>
                              <div class="sensor">Содержание CO2:
                                    <span id="co2"
                                          class="sensor_data">{{ unit.data.sensors.AIR_QUALITY +
                                                "ppm" }} </span>
                              </div>
                        </div>
                  </div>
            </div>
      </article>
</template>

<style scoped>
      .sensor_data {
            color: var(--color-accent);
      }

      .widget__group--control{
            padding: 8px 0;
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

      .toggle {
            display: inline-block;
            width: 154px;
            height: 52px;
            position: relative;
      }

      .toggle__input {
            width: 0;
            height: 0;
            opacity: 0;
      }

      .toggle__slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: var(--color-background-dashboard);
            border-radius: 30px;
            transition: .6s;
      }

      .toggle__slider::before {
            content: "";   
            position: absolute;
            cursor: pointer;

            height: 52px;
            width: 52px;
      
            background-color: var(--color-sidebar-active);
            border-radius: 50%;
            transition: .4s;
      }

      .autoValve{
            position: absolute;
            left: -6px;
            top: -7px;
            width: 64px;
            cursor: pointer;
            z-index: 1;
            transition: .4s;
      }

      .toggle__input:checked~.toggle__slider {
            background-color: var(--color-accent);
      }
      .toggle__input:checked~.toggle__slider::before {
            transform: translateX(102px);
      }

      .toggle__input:checked~.autoValve {
            transform: translateX(100px) rotate(300deg);    
      }

      .widget__input {
            width: 114px;
            height: 2.5rem;
            padding: 0 12px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;

            -webkit-appearance: none;
            -moz-appearance: none;
            -ms-appearance: none;
            appearance: none;

            font-style: normal;
            font-weight: 400;
            font-size: 1.5rem;
            text-align: center;

            letter-spacing: 0.1em;
            color: var(--color-accent2);
            outline: 0;
            outline-offset: 0;
            background-color: var(--color-main-background);
            border: 0px;
            border-radius: 20px;
      }  

      .widget__input:focus {
            border-color: var(--color-accent1);
            background-color: var(--color-main-background);
            outline: 0;
            outline-offset: 0;
      }

      .toggle__text {
            display: block;
            position: absolute;
            cursor: pointer;
            top: 60px;
            left: 0;
            right: 0;
            font-style: normal;
            font-weight: 400;
            font-size: 1.5rem;
            line-height: 2rem;
            text-align: center;
            letter-spacing: 0.1em;
      }
      .widget__group--wateringTreshold {
      display: inline-block;
      font-size: 1.5rem;

      }

      .widget__input--wateringTreshold {
            font-size: inherit;
      }

      .percent {
            display: inline-block;
            margin-right: 16px;
            font-size: inherit;
            color: inherit;
      }
</style>