<script setup>
    import { ref, onMounted, computed } from 'vue'
    import { useStore } from 'vuex'
    import { mapGetters, mapActions} from '../storage/map-state'

    const { GET_DEVICES_FROM_API } = mapActions()
    const { DEVICES } = mapGetters()

    const store = useStore()

    GET_DEVICES_FROM_API()
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
               
        if(store.state.devices != null){
            store.state.devices.data.forEach(data => {
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
</style>