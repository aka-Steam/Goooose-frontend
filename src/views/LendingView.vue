<script setup>
import HeaderComp from '../components/HeaderComp.vue';
import FooterComp from '../components/Footer.vue';


window.onload = function () {
      var headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'));
      var viewportWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      var viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

      if (viewportWidth <= (viewportHeight - headerHeight)) {
            document.querySelector('.img').style.top = '0';
      } else {
            document.querySelector('.img').style.top = '180px';
      }
}
</script>

<template>
      <HeaderComp />
      <main class="main">
            <div class="image-container">
                  <div class="mobile-label-container">
                        <div class="mobile-label-container__background"></div>
                        <div class="mobile-label-container__text">LoRa сеть: надежное и эффективное<br>IoT соединение для
                              вашего<br>безграничного успеха!</div>
                  </div>

                  <img class="img goosi" src="../assets/images/Goosi.jpg" alt="goosi">
                  <img class="img goosi-with-text" src="../assets/images/GoosiWithText.jpg" alt="goosi">
            </div>
            <section class="screenshot-space">
                  <div class="screenshot-space__container">
                        <div class="text-block">
                              <h3 class="screenshot-space__label">Управляйте устройствами и следите заих состоянием на панели
                                    управления</h3>
                              <div class="polygon pr"></div>
                        </div>
                        <div class="image-block">
                              <img class="screenshot-space__image" src="../assets/images/ScreenshotDash.png"
                                    alt="dashboard page screenshot">
                        </div>
                  </div>
                  <div class="screenshot-space__container">
                        <div class="image-block order1">
                              <img class="screenshot-space__image" src="../assets/images/ScreenshotMap.png"
                                    alt="map page screenshot">
                        </div>
                        <div class="text-block order2">
                              <div class="polygon pl"></div>
                              <h3 class="screenshot-space__label">Наблюдайте территориальное распределение Ваших устройств на
                                    цифровой карте </h3>
                        </div>
                  </div>
            </section>
      </main>


      <FooterComp />
</template>

<style scoped>
.image-container {
      width: 100%;
      height: calc(100vh - var(--header-height));
      overflow: hidden;
      position: relative;
}

.img {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;

      min-width: calc(100vh - var(--header-height));
      min-height: 100%;
      width: 100%;
}


.goosi,
.mobile-label-container {
      display: none;
}

.mobile-label-container {
      position: absolute;
      padding: 0 1.25% 12vh 1.25%;
      width: 100%;

      z-index: 98;
}

.mobile-label-container__background {
      content: '';
      width: 100%;
      height: 100%;

      position: absolute;
      top: 0;
      left: 0;

      background-image: url('../assets/images/v-uzor.png');
      background-repeat: no-repeat;
      background-position: bottom;
      background-size: cover;

      opacity: 0.12;
}

.mobile-label-container__text {
      padding: 0 10px;
      padding-top: 11%;
      padding-bottom: 3rem;

      max-width: 600px;
      width: 100%;
      margin: auto;

      font-size: 1.75rem;
      line-height: 1.2;
      color: var(--color-darck);
      text-align: center;
      text-wrap: wrap;

      background-color: rgba(255, 255, 255, 0.42);
      border: 4px dotted rgb(255, 255, 255);
      border-top: 0;
      border-radius: 0 0 40px 40px;

      z-index: 99;
}


.goosi-with-text {
      display: block;
}


.screenshot-space__container {
      margin: 30px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      flex-flow: row;
      gap: 20px;
      flex-wrap: wrap;
}


.image-block,
.text-block {
      border: 3px solid var(--color-text)
}


.text-block {
      position: relative;
      padding: 36px;
      width: 500px;
      text-align: center;
      border-radius: 50px;
}


.image-block {
      padding: 10px;
      max-width: 1000px;
      width: 50%;
      border-radius: 60px;
      overflow: hidden;
      box-sizing: content-box;
}

.screenshot-space__image {
      display: block;
      max-width: 100%;
      border: 3px solid var(--color-text);
      border-radius: 50px;

}

.screenshot-space__label {
      font-size: 2rem;
}

.polygon {
      display: block;

      content: '';
      width: 90px;
      height: 90px;

      position: absolute;
      top: calc(50% - 45px);
      background-image: url('../assets/images/Polygon11.svg');
      background-repeat: no-repeat;
      background-position: bottom;
      background-size: contain;
      z-index: 999;
}


.pr {
      right: -66px;
}

.pl {
      left: -66px;
      -moz-transform: scale(-1, -1);
      -o-transform: scale(-1, -1);
      -webkit-transform: scale(-1, -1);
      transform: scale(-1, -1);
}




@media (max-width: 992px) {
      
      .text-block{
            padding: 20px;
      }
      .screenshot-space__label {
            font-size: 1.5rem;
      }

      .image-block {

            width: 98%;
      }

      .polygon {
            display: none;
      }

      .order1{
            order: 2;
      }
      .order2{
            order: 1;
      }
}

@media (max-width: 767px) {

      .goosi,
      .mobile-label-container {
            display: block;
      }

      .goosi-with-text {
            display: none;
      }
}</style>