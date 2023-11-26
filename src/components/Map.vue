<script setup>
    import { ref, onMounted, computed } from 'vue'
    import { useStore } from 'vuex'
    import { mapGetters, mapActions} from '../storage/map-state'

    const { GET_ALL_DEVICES_FROM_API } = mapActions('devicem')
    const { DEVICES } = mapGetters('devicem')

    const store = useStore()

    GET_ALL_DEVICES_FROM_API()
            .then((response) => {
                  if (response.data){
                        console.log('Initial data arrived!');
                  };
            });

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
        });
               
        if(store.state.devicem.devices != null){
            store.state.devicem.devices.data.forEach(data => {
            data.items.forEach(item => {
                let latitude = item.data.coordinate.LATITUDE;
                let longitude = item.data.coordinate.LONGITUDE;
                
                let point = new ymaps.Placemark([latitude, longitude], {
                    balloonContent: '<strong>' + item.name + '</strong><br>' +
                    '<span>Температура воздха: ' + item.data.sensors.AIR_TEMPERATURE + "&deg;C" + '</span><br>' +
                    '<span>Влажность воздуха: ' + item.data.sensors.AIR_HUMIDITY + "%" + '</span><br>' +
                    '<span>Влажность почвы: ' + item.data.sensors.SOIL_HUMIDITY + "%" + '</span><br>' +
                    '<span>Температура почвы: ' + item.data.sensors.SOIL_TEMPERATURE + "&deg;C" + '</span><br>' +
                    '<span>Содержание CO2: ' + item.data.sensors.AIR_QUALITY + "ppm" + ' </span>'
                }, {
                    preset: 'islands#circleDotIcon',
                    iconColor: '#FF7A00',
                    iconFillStyle: '#000000'
                })

                // Создаем круг.
                let radius = new ymaps.Circle([
                    // Координаты центра круга.
                    [latitude, longitude],
                    // Радиус круга в метрах.
                    4000
                ],{}, {
                    // Задаем опции круга.
                    // Цвет заливки.
                    // Последний байт (77) определяет прозрачность.
                    // Прозрачность заливки также можно задать используя опцию "fillOpacity".
                    fillColor: "#FF7A0035",
                    // Цвет обводки.
                    strokeColor: "#1F1E2E",
                    // Прозрачность обводки.
                    strokeOpacity: 0.9,
                    // Ширина обводки в пикселях.
                    strokeWidth: 1
                });

                myMap.geoObjects.add(point);
                myMap.geoObjects.add(radius);
            })
        });
        };
    }
</script>

<template>
    <section class="map-container">
        <div id="map" class="map"></div>
    </section>
</template>

<style scope>
    .map-container {
        padding: 16px;
    }

    #map {
        width: auto;
        height: calc(clamp(320px, calc(100vh - 102px), 800px));
        border-radius: 20px;
        overflow: hidden;
    }
    @media (max-width: 767px) {
        #map {
        height: calc(100vh - 215px);
        } 
    }
</style>