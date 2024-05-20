<script setup>
      import HeaderComp from '../components/HeaderComp.vue';
      import FooterComp from '../components/Footer.vue';
      import Card from '../components/ShopCard.vue';
</script>
<template>
      <HeaderComp />
      <main class="main">
            <h2 class="h2">Голавные устройства:</h2>
            <div class="shop-section">
                  <Card :name="'G1'" :img_src="'../assets/cimages/UnderConstruction.png'" :price="1599" />
            </div>
            <h2 class="h2">Оконечные устройства:</h2>
            <div class="shop-section">
                  <Card :name="'t1'" :price="1599" />
                  <Card :price="1599" />
                  <Card :name="'t1'" :price="1599" />
            </div>
      </main>
      <FooterComp />
</template>

<style scoped>
.main {
      padding-left: 10%;
      padding-right: 10%;
      padding-bottom: 8%;
}

.h2 {
      margin: 3rem 0 1.5rem 0;
}

.shop-section {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      gap: 1rem;
      justify-content: flex-start;
}

@media (max-width: 1199px) {
      .main {
            padding-left: 40px;
            padding-right: 40px;
      }

}

@media (max-width: 991px) {
      .main {
            padding-left: 24px;
            padding-right: 24px;
      }

}

@media (max-width: 575px) {
      .main {
            padding-left: 12px;
            padding-right: 12px;
      }

      .shop-section {
            justify-content: center;
      }
}
</style>