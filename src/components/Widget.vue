<script setup>
import { useStore } from 'vuex'
import { onPump, autoModClick, onHumidityThreshold } from '../services/mqtt'
import Switch from './Switch.vue'
import Tooltip from './Tooltip.vue'
import RangeSlider from './RangeSlider.vue'

const store = useStore();

const props = defineProps({
      device_index: {
            type: Number,
            default: 0
      },
      item_index: {
            type: Number,
            default: 0
      },
      deviceId: {
            type: String,
            default: "0"
      },
      unit: {
            type: Object
      }
})

function generateAction(item_addr, interfaceMqtt, value){
      return ~~(item_addr / 256) + ":" + (item_addr % 256) + ":" + interfaceMqtt + ":" + value;
}


function onAutoModClick(status, device_chipId, item_addr) {
      store.dispatch('devicem/UPDATE_ITEM_FROM_API',
            {
                  id: props.unit.id,
                  name: props.unit.name,
                  description: props.unit.description,
                  humidityThreshold: props.unit.data.humidityThreshold >= 1 ? props.unit.data.humidityThreshold : 1,
                  autoMode: status
            })

      // autoModClick(status, device_chipId, item_addr)

      store.dispatch('devicem/CONTROL_DEVICES_BY_API', 
            {
                  chip_id: props.deviceId,
                  action: generateAction(item_addr, "autoMode", status)
            })
}


function automodOff(device_chipId, item_addr) {
      store.dispatch('devicem/UPDATE_ITEM_FROM_API',
            {
                  id: props.unit.id,
                  name: props.unit.name,
                  description: props.unit.description,
                  humidityThreshold: props.unit.data.humidityThreshold >= 1 ? props.unit.data.humidityThreshold : 1,
                  autoMode: false
            })

      //autoModClick(false, device_chipId, item_addr)

      store.dispatch('devicem/CONTROL_DEVICES_BY_API', 
            {
                  chip_id: props.deviceId,
                  action: generateAction(item_addr, "autoMode", false)
            })
}

function onMoistureThresholdChange(value, device_chipId, item_addr) {

      store.dispatch('devicem/UPDATE_ITEM_FROM_API',
            {
                  id: props.unit.id,
                  name: props.unit.name,
                  description: props.unit.description,
                  humidityThreshold: value,
                  autoMode: props.unit.data.autoMode
            })

      // onHumidityThreshold(value, device_chipId, item_addr)

      store.dispatch('devicem/CONTROL_DEVICES_BY_API', 
            {
                  chip_id: props.deviceId,
                  action: generateAction(item_addr, "soilHumThreshold", value)
            })
}


function onPumpAPI(item_addr){
      store.dispatch('devicem/CONTROL_DEVICES_BY_API', 
            {
                  chip_id: props.deviceId,
                  action: generateAction(item_addr, "pump", "on")
            })
}

function onClickEdit(type, id, name, description) {
      store.state.editable = {
            type: type,
            id: id,
            name: name,
            description: description,
            humidityThreshold: props.unit.data.humidityThreshold,
            //autoMode: props.unit.data.autoMode
            autoMode: (props.unit.data.autoMode === 'true')
      }
}

function onClickDelete(item_id, item_name) {
      //Are you sure you want to delete network No. ""?
      item_name = item_name === null ? "" : item_name;
      if (confirm("Вы уверены, что хотите удалить устройство " + item_name + "?")) {
            store.dispatch('devicem/DELETE_ITEM_BY_API', item_id);
      }
}

function nullConvert(value) {
      return value === null ? "" : value;
}

</script>

<template>
      <article class="widget">
            <div class="widget__controller">
                  <div class="widget__title">{{ unit.name }}</div>
                  <hr>
                  <div class="widget__group">
                        <div class="sensor">Температура воздха:
                              <span id="temp" class="sensor__data">{{ unit.data.sensors.AIR_TEMPERATURE
                                    + "&deg;C" }}</span>
                        </div>
                        <div class="sensor">Влажность воздуха:
                              <span id="airHum" class="sensor__data">{{ unit.data.sensors.AIR_HUMIDITY +
                                    "%" }}</span>
                        </div>
                        <div class="sensor">Влажность почвы:
                              <span id="temp" class="sensor__data">{{ unit.data.sensors.SOIL_HUMIDITY
                                    + "%" }}</span>
                        </div>
                        <div class="sensor">Температура почвы:
                              <span id="tempSoil" class="sensor__data">{{ unit.data.sensors.SOIL_TEMPERATURE
                                    + "&deg;C" }}</span>
                        </div>
                        <div class="sensor">Содержание CO2:
                              <span id="co2" class="sensor__data">{{ unit.data.sensors.AIR_QUALITY +
                                    "ppm" }} </span>
                        </div>
                  </div>
                  <hr>
                  <div class="widget__group">
                        <div class="widget__group--control">
                              <button class="widget__button" @click="onPumpAPI(unit.item_id)">Полить</button>
                              
                              <label class="container">
                                    <input class="input" type="checkbox" v-model="unit.data.autoMode"
                                          @change="(event) => onAutoModClick(event.target.checked, deviceId, unit.item_id)" />
                                    <span class="label">Автополив</span>
                                    <span class="switch"></span>
                              </label>

                        </div>
                        <RangeSlider :disabled="false" :elementId="unit.item_id"
                              :modelValue="parseInt(unit.data.humidityThreshold, 10)"
                              @update:modelValue="(value) => onMoistureThresholdChange(value, deviceId, unit.item_id)">
                              Порог влажности для начала полива в автоматическом режиме
                        </RangeSlider>
                        <span class="costil" @click="automodOff(deviceId, unit.item_id)"></span>
                  </div>
                  <div class="buttons">
                        <Tooltip :text="nullConvert(unit.description)" class="button button--info">
                              <svg class="svg-icon svg-icon--info" width="26px" height="26px" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg" fill="none">
                                    <path fill-rule="evenodd"
                                          d="M10 3a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1118 0 9 9 0 01-18 0zm8-4a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm.01 8a1 1 0 102 0V9a1 1 0 10-2 0v5z" />
                              </svg>
                        </Tooltip>
                        <RouterLink to="/home/edit" class="button button--edit"
                              @click="onClickEdit('item', unit.id, unit.name, unit.description)">
                              <svg class="svg-icon" width="26px" height="26px" viewBox="0 0 26 26" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M13.1739 3.5968C13.8662 3.2047 14.686 3.10369 15.4528 3.31598C15.7928 3.41011 16.0833 3.57409 16.3571 3.7593C16.6172 3.9352 16.9155 4.16808 17.2613 4.43799L17.3117 4.47737C17.6575 4.74728 17.9559 4.98016 18.1897 5.18977C18.4358 5.41046 18.6654 5.65248 18.8393 5.95945C19.2314 6.65177 19.3324 7.47151 19.1201 8.23831C19.026 8.5783 18.862 8.86883 18.6768 9.14267C18.5009 9.40276 18.268 9.70112 17.998 10.0469L10.8953 19.1462C10.8773 19.1692 10.8596 19.1919 10.8421 19.2144C10.5087 19.6419 10.2566 19.9651 9.9445 20.2306C9.68036 20.4553 9.38811 20.6447 9.07512 20.794C8.70535 20.9704 8.30733 21.0685 7.78084 21.1983C7.75324 21.2051 7.72528 21.212 7.69696 21.219L5.57214 21.7435C5.42499 21.7799 5.25702 21.8215 5.10885 21.8442C4.94367 21.8696 4.68789 21.8926 4.40539 21.8022C4.06579 21.6934 3.77603 21.4672 3.58809 21.1642C3.43175 20.9121 3.39197 20.6584 3.3765 20.492C3.36262 20.3427 3.36213 20.1697 3.3617 20.0181C3.36167 20.0087 3.36165 19.9994 3.36162 19.9902L3.35475 17.8295C3.35465 17.8003 3.35455 17.7715 3.35445 17.7431C3.3525 17.2009 3.35103 16.7909 3.4324 16.3894C3.50128 16.0495 3.61406 15.72 3.76791 15.4093C3.94967 15.0421 4.20204 14.7191 4.53586 14.2918C4.55336 14.2694 4.57109 14.2467 4.58905 14.2237L11.6918 5.12435C11.9617 4.77856 12.1946 4.48019 12.4042 4.2464C12.6249 4.00025 12.8669 3.77065 13.1739 3.5968ZM14.9191 5.24347C14.6635 5.17271 14.3903 5.20638 14.1595 5.33708C14.1203 5.35928 14.0459 5.41135 13.8934 5.5815C13.7348 5.75836 13.5438 6.00211 13.2487 6.38018L16.4018 8.84145C16.697 8.46338 16.887 8.21896 17.0201 8.02221C17.1482 7.83291 17.1806 7.74808 17.1926 7.70467C17.2634 7.44907 17.2297 7.17583 17.099 6.94505C17.0768 6.90586 17.0247 6.83145 16.8546 6.6789C16.6777 6.52033 16.434 6.32938 16.0559 6.03426C15.6778 5.73914 15.4334 5.54904 15.2367 5.41597C15.0474 5.28794 14.9625 5.25549 14.9191 5.24347ZM15.1712 10.418L12.0181 7.95674L6.16561 15.4543C5.75585 15.9792 5.6403 16.135 5.56031 16.2966C5.48339 16.452 5.42699 16.6167 5.39256 16.7866C5.35675 16.9633 5.35262 17.1572 5.35474 17.8231L5.36082 19.7357L7.2176 19.2773C7.86411 19.1177 8.05119 19.0666 8.21391 18.9889C8.37041 18.9143 8.51653 18.8196 8.64861 18.7072C8.78593 18.5904 8.90897 18.4405 9.31872 17.9156L15.1712 10.418ZM12 21C12 20.4477 12.4477 20 13 20H20C20.5523 20 21 20.4477 21 21C21 21.5523 20.5523 22 20 22H13C12.4477 22 12 21.5523 12 21Z" />
                              </svg>
                        </RouterLink>
                        <button class="button button--trash" @click="onClickDelete(unit.id, unit.name)">
                              <svg class="svg-icon" width="26px" height="26px" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                          d="M3 6.38597C3 5.90152 3.34538 5.50879 3.77143 5.50879L6.43567 5.50832C6.96502 5.49306 7.43202 5.11033 7.61214 4.54412C7.61688 4.52923 7.62232 4.51087 7.64185 4.44424L7.75665 4.05256C7.8269 3.81241 7.8881 3.60318 7.97375 3.41617C8.31209 2.67736 8.93808 2.16432 9.66147 2.03297C9.84457 1.99972 10.0385 1.99986 10.2611 2.00002H13.7391C13.9617 1.99986 14.1556 1.99972 14.3387 2.03297C15.0621 2.16432 15.6881 2.67736 16.0264 3.41617C16.1121 3.60318 16.1733 3.81241 16.2435 4.05256L16.3583 4.44424C16.3778 4.51087 16.3833 4.52923 16.388 4.54412C16.5682 5.11033 17.1278 5.49353 17.6571 5.50879H20.2286C20.6546 5.50879 21 5.90152 21 6.38597C21 6.87043 20.6546 7.26316 20.2286 7.26316H3.77143C3.34538 7.26316 3 6.87043 3 6.38597Z" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M11.5956 22.0001H12.4044C15.1871 22.0001 16.5785 22.0001 17.4831 21.1142C18.3878 20.2283 18.4803 18.7751 18.6654 15.8686L18.9321 11.6807C19.0326 10.1037 19.0828 9.31524 18.6289 8.81558C18.1751 8.31592 17.4087 8.31592 15.876 8.31592H8.12404C6.59127 8.31592 5.82488 8.31592 5.37105 8.81558C4.91722 9.31524 4.96744 10.1037 5.06788 11.6807L5.33459 15.8686C5.5197 18.7751 5.61225 20.2283 6.51689 21.1142C7.42153 22.0001 8.81289 22.0001 11.5956 22.0001ZM10.2463 12.1886C10.2051 11.7548 9.83753 11.4382 9.42537 11.4816C9.01321 11.525 8.71251 11.9119 8.75372 12.3457L9.25372 17.6089C9.29494 18.0427 9.66247 18.3593 10.0746 18.3159C10.4868 18.2725 10.7875 17.8856 10.7463 17.4518L10.2463 12.1886ZM14.5746 11.4816C14.9868 11.525 15.2875 11.9119 15.2463 12.3457L14.7463 17.6089C14.7051 18.0427 14.3375 18.3593 13.9254 18.3159C13.5132 18.2725 13.2125 17.8856 13.2537 17.4518L13.7537 12.1886C13.7949 11.7548 14.1625 11.4382 14.5746 11.4816Z" />
                              </svg>
                        </button>
                  </div>
            </div>
      </article>
</template>

<style scoped>
.widget {
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

.widget__group {
      margin: 8px 0;
}

.widget__group--control {
      display: flex;
}

.widget__button {
      cursor: pointer;
      width: 100px;
      height: 30px;
      text-decoration: uppercase;
      color: var(--color-text-light);
      border: 1px solid var(--color-text);
      border-radius: 15px;
      background-color: var(--color-darck)
}

.widget__button:hover {
      background-color: var(--color-darck2)
}

.buttons {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
}

.button {
      cursor: pointer;
      padding: 6px;
      width: 40px;
      height: 40px;
      border: 1px solid transparent;
      border-radius: 15px;
      transition: background-color 0.3s ease;
}

.button--trash {
      background: var(--color-accent2);
}

.button--edit {
      background: var(--color-darck2);
}

.button--info {
      border-color: var(--color-text);
      background: inherit;
}

.button--trash:hover {
      background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(105, 105, 105, 1) 100%), var(--color-accent2);
      background-blend-mode: overlay;
}

.button--edit:hover {
      background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(105, 105, 105, 1) 100%), var(--color-darck2);
      background-blend-mode: overlay;
}

.button--info:hover {
      background: radial-gradient(circle, rgba(155, 155, 155, 1) 20%, rgba(0, 0, 0, 1) 100%);
      background-blend-mode: overlay;
}

.svg-icon {
      fill: var(--color-light);
}

.svg-icon--info {
      fill: var(--color-text);
}

.costil {
      cursor: pointer;
      display: inline-block;
      content: "";
      width: 10px;
      height: 10px;
}

/* ----------------  Toggle switch  ---------------- */

.container {
      cursor: pointer;
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
}

.label {
      margin: 0 12px;
      color: var(--color-text);
      white-space: nowrap;
}

.input {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
}

.switch {
      --switch-container-width: 50px;
      --switch-size: calc(var(--switch-container-width) / 2);
      display: flex;
      align-items: center;
      position: relative;
      height: var(--switch-size);
      flex-basis: var(--switch-container-width);
      /* Make the container element rounded */
      border-radius: var(--switch-size);
      background-color: var(--color-background-dashboard);
      /* In case the label gets really long, the toggle shouldn't shrink. */
      flex-shrink: 0;
      transition: background-color 0.25s ease-in-out;
}

.switch::before {
      content: "";
      position: absolute;
      /* Move a little bit the inner circle to the right */
      left: 1px;
      height: calc(var(--switch-size) - 4px);
      width: calc(var(--switch-size) - 4px);
      /* Make the inner circle fully rounded */
      border-radius: 9999px;
      background-color: var(--color-darck);
      border: 2px solid var(--color-text);
      transition: transform 0.24s ease-in-out;
}

.input:checked~.switch {
      background-color: var(--color-accent);
}

.input:checked~.switch::before {
      transform: translateX(calc(var(--switch-container-width) - var(--switch-size) + 1px));
}

@media (max-width:360px) {
      .container {
            flex-wrap: wrap;
      }

}
</style>