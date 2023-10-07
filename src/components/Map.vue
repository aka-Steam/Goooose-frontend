<script setup>
    ymaps.ready(init);
    function init() {
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [54.139388, 45.193018
            ],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 12
        }),
        myPieChart = new ymaps.Placemark([
            54.139388, 45.193018
        ], {
            // Данные для построения диаграммы.
            balloonContent: 'цвет <strong>детской неожиданности</strong>',
            data: [
                { weight: 8, color: '#0E4779' },
                { weight: 6, color: '#1E98FF' },
                { weight: 4, color: '#82CDFF' }
            ],
            iconCaption: "Диаграмма"
        }, {
            // Зададим произвольный макет метки.
            iconLayout: 'default#pieChart',
            // Радиус диаграммы в пикселях.
            iconPieChartRadius: 30,
            // Радиус центральной части макета.
            iconPieChartCoreRadius: 10,
            // Стиль заливки центральной части.
            iconPieChartCoreFillStyle: '#ffffff',
            // Cтиль линий-разделителей секторов и внешней обводки диаграммы.
            iconPieChartStrokeStyle: '#ffffff',
            // Ширина линий-разделителей секторов и внешней обводки диаграммы.
            iconPieChartStrokeWidth: 3,
            // Максимальная ширина подписи метки.
            iconPieChartCaptionMaxWidth: 200
        });
        

        let devices = JSON.parse(localStorage.getItem('devices'));
        if(devices != null){
            devices.data.forEach(data => {
            data.items.forEach(item => {
                let latitude = item.data.coordinate.LATITUDE;
                let longitude = item.data.coordinate.LONGITUDE;
                // console.log(LATITUDE, LONGITUDE);
                let point = new ymaps.Placemark([latitude, longitude], {
                    balloonContent: 'device: ' + item.name
                }, {
                    preset: 'islands#circleDotIcon',
                    iconColor: '#FF7A00',
                    iconFillStyle: '#000000'
                })
                myMap.geoObjects.add(point);
            })
        });
        };

        // myMap.geoObjects
        //     .add(myPieChart)
        //     .add(new ymaps.Placemark([54.119388, 45.175018], {
        //         balloonContent: 'цвет <strong>детской неожиданности</strong>'
        //     }, {
        //         preset: 'islands#circleDotIcon',
        //         iconColor: '#FF7A00',
        //         iconFillStyle: '#000000'
        //     }));
    }
</script>


<script>
// import DeviceService from '../services/device.service'
// const coords = getCoords();
// function getCoords(){
//     let device = JSON.parse(localStorage.getItem('devices'));    
//     let coords = device.data[0].items[0].data.coordinate;
//     console.log(coords);
//     return coords;
// }

import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';
import authHeader from '../services/auth-header'
import store from '../storage';

export default {
    name: "Map",
    data() {
        return{
            // devices:[...]
        }
    },
    methods: {
        ...mapActions([
            'GET_DEVICES_FROM_API'
        ])
    }, 
    mounted() {
        // setInterval(() => this.GET_DEVICES_FROM_API()
        // .then((response) => {
        //     if (response.data){
        //         console.log('Data arrived!')
        //     }
        // }), 5000);
        this.GET_DEVICES_FROM_API()
        .then((response) => {
            if (response.data){
                console.log('Data arrived!')
            }
        });
        
    }, 
    computed: {
        ...mapGetters([
            'DEVICES'
        ])
    }
}





// ymaps.ready(init);
// function init() {
//     // Создание карты.
//     var myMap = new ymaps.Map("map", {
//         // Координаты центра карты.
//         // Порядок по умолчанию: «широта, долгота».
//         // Чтобы не определять координаты центра карты вручную,
//         // воспользуйтесь инструментом Определение координат.
//         center: [54.139388, 45.193018
//         ],
//         // Уровень масштабирования. Допустимые значения:
//         // от 0 (весь мир) до 19.
//         zoom: 12
//     });


//     // let devices = DEVICES;

//     // if(devices != null){
//     //     devices.data.forEach(data => {
//     //     data.items.forEach(item => {
//     //         let latitude = item.data.coordinate.LATITUDE;
//     //         let longitude = item.data.coordinate.LONGITUDE;
//     //         // console.log(LATITUDE, LONGITUDE);
//     //         let point = new ymaps.Placemark([latitude, longitude], {
//     //             balloonContent: 'device: ' + item.name
//     //         }, {
//     //             preset: 'islands#circleDotIcon',
//     //             iconColor: '#FF7A00',
//     //             iconFillStyle: '#000000'
//     //         })
//     //         myMap.geoObjects.add(point);
//     //     })
//     // });
//     // };


//     // console.log("ggggg");
//     // console.log( store._state.DEVICES.data);
//     // if(store.state.DEVICES != null){
//     //     console.log("aaaaa");
//     //     console.log( store.state.DEVICES.data);
//     //     store.state.DEVICES.data.forEach(data => {
//     //     data.items.forEach(item => {
//     //         let latitude = item.data.coordinate.LATITUDE;
//     //         let longitude = item.data.coordinate.LONGITUDE;
//     //         // console.log(LATITUDE, LONGITUDE);
//     //         let point = new ymaps.Placemark([latitude, longitude], {
//     //             balloonContent: 'device: ' + item.name
//     //         }, {
//     //             preset: 'islands#circleDotIcon',
//     //             iconColor: '#FF7A00',
//     //             iconFillStyle: '#000000'
//     //         })
//     //         myMap.geoObjects.add(point);
//     //     })
//     // });
//     // };

// }
</script>





<template>
    <!-- {{ coords }} -->
    <section class="map-container">
        <div id="map" class="map"></div>
    </section>
    <div class="hren">
       <ul v-for="device in DEVICES.data" :key="device.id">
            <li>{{ device }}</li>
       </ul> 
    </div>
</template>
<style scope>
.map-container {
    padding: 16px;
}

#map {
    /* width:calc(clamp(320px, calc(100vw - 150px), 1400px)); */
    width: auto;
    height: calc(clamp(320px, calc(100vh - 102px), 800px));
    border-radius: 20px;
    overflow: hidden;
}
</style>