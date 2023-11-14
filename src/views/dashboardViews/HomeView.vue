<script setup>
import { ref, onMounted, computed } from 'vue'
import Menu from '../../components/SidebarMenu.vue'
import { useStore } from 'vuex'
import { mapGetters, mapActions } from '../../storage/map-state'
import { startConnect } from '../../services/mqtt'
import HeaderRoute from '../../components/HeaderRoute.vue'
import Widget from '../../components/Widget.vue'

// const { GET_ALL_DEVICES_FROM_API } = mapActions()



const store = useStore()
const openItems = ref([]) // не знаю как это работает без заполнения, но работает ¯\_(ツ)_/¯ 

const { DEVICES } = mapGetters('devicem')

store.dispatch('devicem/GET_ALL_DEVICES_FROM_API').then(console.log('Data arrived!'));

// old code
// GET_ALL_DEVICES_FROM_API() 
//     .then((response) => {
//         if (response.data) {
//             console.log('Initial data arrived!');
//             openItems.value = new Array(store.state.devices.length).fill(false);
//         };
//     });


onMounted(() => {
    // old code
    // Думаю стоит преенести в app vue или куда-нибудь в тот район, чтобы при каждом переходе на страницу не запускалось.\ 
    //как вариант в залогинивание
    // const autoreload  = setInterval(() => GET_DEVICES_FROM_API()
    // .then((response) => {
    //       if (response.data){
    //             console.log('Data arrived!');
    //       };
    //       if (store.state.auth.status.loggedIn == false){
    //             clearInterval(autoreload);
    //       }; 
    // }), 5000);    
    // let pricol = 0
   
    
    const autoreload  = setInterval(() => {
        store.dispatch('devicem/GET_ALL_DEVICES_FROM_API').then(console.log('Data arrived!'));
        
        if (store.state.auth.status.loggedIn == false){
            clearInterval(autoreload);
        };
        }, 5000);

    startConnect();
    
    if(!(localStorage.getItem("chip_id") === null)){
        let chip_id = localStorage.getItem("chip_id");
        //Тут запрос на добовление
        // if(OK){
        //     localStorage.removeItem("chip_id");
        // }
    }
    
})


function onClickEdit(device_id, index, device_name){
        // Open edit device window
}

function onClickDelete(device_id, index, device_name){
    //Are you sure you want to delete network No. ""?
    if (confirm("Вы уверены, что хотите удалить сеть №" + index + " " + device_name)) {
        
        // Send delete querry
    } 
}

</script> 

<template>
    <main class="dashboard-main">
        <Menu></Menu>
        <section class="dashboard-content">
                <HeaderRoute>Главная</HeaderRoute>
                <div class="devices-space">
                    <div v-if="DEVICES != null" v-for="(device, index) in DEVICES.data" :key="device.id">
                        <div class="device" @click="openItems[index] = !openItems[index]">{{ index + 1 }}&emsp;|&emsp;{{"ID-" + device.id }}
                           &emsp;|&emsp;&emsp;&emsp; {{
                                device.name }}
                                &emsp;&emsp;&emsp;| &emsp;&emsp;
                            <button class="button button--edit" @click="onClickEdit">
                                <svg class="svg-icon" width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M13.1739 3.5968C13.8662 3.2047 14.686 3.10369 15.4528 3.31598C15.7928 3.41011 16.0833 3.57409 16.3571 3.7593C16.6172 3.9352 16.9155 4.16808 17.2613 4.43799L17.3117 4.47737C17.6575 4.74728 17.9559 4.98016 18.1897 5.18977C18.4358 5.41046 18.6654 5.65248 18.8393 5.95945C19.2314 6.65177 19.3324 7.47151 19.1201 8.23831C19.026 8.5783 18.862 8.86883 18.6768 9.14267C18.5009 9.40276 18.268 9.70112 17.998 10.0469L10.8953 19.1462C10.8773 19.1692 10.8596 19.1919 10.8421 19.2144C10.5087 19.6419 10.2566 19.9651 9.9445 20.2306C9.68036 20.4553 9.38811 20.6447 9.07512 20.794C8.70535 20.9704 8.30733 21.0685 7.78084 21.1983C7.75324 21.2051 7.72528 21.212 7.69696 21.219L5.57214 21.7435C5.42499 21.7799 5.25702 21.8215 5.10885 21.8442C4.94367 21.8696 4.68789 21.8926 4.40539 21.8022C4.06579 21.6934 3.77603 21.4672 3.58809 21.1642C3.43175 20.9121 3.39197 20.6584 3.3765 20.492C3.36262 20.3427 3.36213 20.1697 3.3617 20.0181C3.36167 20.0087 3.36165 19.9994 3.36162 19.9902L3.35475 17.8295C3.35465 17.8003 3.35455 17.7715 3.35445 17.7431C3.3525 17.2009 3.35103 16.7909 3.4324 16.3894C3.50128 16.0495 3.61406 15.72 3.76791 15.4093C3.94967 15.0421 4.20204 14.7191 4.53586 14.2918C4.55336 14.2694 4.57109 14.2467 4.58905 14.2237L11.6918 5.12435C11.9617 4.77856 12.1946 4.48019 12.4042 4.2464C12.6249 4.00025 12.8669 3.77065 13.1739 3.5968ZM14.9191 5.24347C14.6635 5.17271 14.3903 5.20638 14.1595 5.33708C14.1203 5.35928 14.0459 5.41135 13.8934 5.5815C13.7348 5.75836 13.5438 6.00211 13.2487 6.38018L16.4018 8.84145C16.697 8.46338 16.887 8.21896 17.0201 8.02221C17.1482 7.83291 17.1806 7.74808 17.1926 7.70467C17.2634 7.44907 17.2297 7.17583 17.099 6.94505C17.0768 6.90586 17.0247 6.83145 16.8546 6.6789C16.6777 6.52033 16.434 6.32938 16.0559 6.03426C15.6778 5.73914 15.4334 5.54904 15.2367 5.41597C15.0474 5.28794 14.9625 5.25549 14.9191 5.24347ZM15.1712 10.418L12.0181 7.95674L6.16561 15.4543C5.75585 15.9792 5.6403 16.135 5.56031 16.2966C5.48339 16.452 5.42699 16.6167 5.39256 16.7866C5.35675 16.9633 5.35262 17.1572 5.35474 17.8231L5.36082 19.7357L7.2176 19.2773C7.86411 19.1177 8.05119 19.0666 8.21391 18.9889C8.37041 18.9143 8.51653 18.8196 8.64861 18.7072C8.78593 18.5904 8.90897 18.4405 9.31872 17.9156L15.1712 10.418ZM12 21C12 20.4477 12.4477 20 13 20H20C20.5523 20 21 20.4477 21 21C21 21.5523 20.5523 22 20 22H13C12.4477 22 12 21.5523 12 21Z" />
                                 </svg>
                                </button>
                                &emsp;
                                <button class="button button--trash" @click="onClickDelete(device.id, index, device.name)">
                                    <svg class="svg-icon" width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M3 6.38597C3 5.90152 3.34538 5.50879 3.77143 5.50879L6.43567 5.50832C6.96502 5.49306 7.43202 5.11033 7.61214 4.54412C7.61688 4.52923 7.62232 4.51087 7.64185 4.44424L7.75665 4.05256C7.8269 3.81241 7.8881 3.60318 7.97375 3.41617C8.31209 2.67736 8.93808 2.16432 9.66147 2.03297C9.84457 1.99972 10.0385 1.99986 10.2611 2.00002H13.7391C13.9617 1.99986 14.1556 1.99972 14.3387 2.03297C15.0621 2.16432 15.6881 2.67736 16.0264 3.41617C16.1121 3.60318 16.1733 3.81241 16.2435 4.05256L16.3583 4.44424C16.3778 4.51087 16.3833 4.52923 16.388 4.54412C16.5682 5.11033 17.1278 5.49353 17.6571 5.50879H20.2286C20.6546 5.50879 21 5.90152 21 6.38597C21 6.87043 20.6546 7.26316 20.2286 7.26316H3.77143C3.34538 7.26316 3 6.87043 3 6.38597Z" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M11.5956 22.0001H12.4044C15.1871 22.0001 16.5785 22.0001 17.4831 21.1142C18.3878 20.2283 18.4803 18.7751 18.6654 15.8686L18.9321 11.6807C19.0326 10.1037 19.0828 9.31524 18.6289 8.81558C18.1751 8.31592 17.4087 8.31592 15.876 8.31592H8.12404C6.59127 8.31592 5.82488 8.31592 5.37105 8.81558C4.91722 9.31524 4.96744 10.1037 5.06788 11.6807L5.33459 15.8686C5.5197 18.7751 5.61225 20.2283 6.51689 21.1142C7.42153 22.0001 8.81289 22.0001 11.5956 22.0001ZM10.2463 12.1886C10.2051 11.7548 9.83753 11.4382 9.42537 11.4816C9.01321 11.525 8.71251 11.9119 8.75372 12.3457L9.25372 17.6089C9.29494 18.0427 9.66247 18.3593 10.0746 18.3159C10.4868 18.2725 10.7875 17.8856 10.7463 17.4518L10.2463 12.1886ZM14.5746 11.4816C14.9868 11.525 15.2875 11.9119 15.2463 12.3457L14.7463 17.6089C14.7051 18.0427 14.3375 18.3593 13.9254 18.3159C13.5132 18.2725 13.2125 17.8856 13.2537 17.4518L13.7537 12.1886C13.7949 11.7548 14.1625 11.4382 14.5746 11.4816Z" />
                                    </svg>
                                </button>
                            </div>
                            <div class="device__items">
                                <div v-if="openItems[index]" v-for="(item,index_item) in device.items" :key="item.id" class="device__item">
                                    <Widget :device_index="index" :item_index="index_item" :device-id="device.chip_id" :unit="item" />
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
    min-height: 64px;
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

.button {
    cursor: pointer;
    padding: 6px;
    width: 40px;
    height: 40px;
    border: 1px solid transparent;
    border-radius: 15px;
   
}


.button--trash {
    background: var(--color-accent2);
    transition: background-color 1s ease ;
}

.button--edit {
    background: var(--color-darck2);
    transition: background-color 1s ease ;
}

.button--trash:hover {   
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(105,105,105,1) 100%),var(--color-accent2);
    background-blend-mode: overlay; 
}

.button--edit:hover {
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(105,105,105,1) 100%),var(--color-darck2);
    background-blend-mode: overlay; 
}

.svg-icon {
    fill: var(--color-light);
}
</style>