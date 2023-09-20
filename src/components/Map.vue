<script setup>
ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.76, 37.64],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 7
        });
    }
</script>
<template>
      <section class="map-container">
            <div id="map" class="map"></div>
      </section>
</template>
<style scope>
.map-container{
      padding: 16px;
}
#map{
      width:calc(clamp(320px, calc(100vw - 50px), 1920px));
      height:calc(clamp(320px, calc(100vh - 32px), 800px));
      border-radius: 20px;
      overflow: hidden;
}

</style>