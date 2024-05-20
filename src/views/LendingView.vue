<script setup>
import HeaderComp from '../components/HeaderComp.vue';
import FooterComp from '../components/Footer.vue';


window.onload = function() {
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
                  <div class="mobile-label-container__text">LoRa сеть: надежное и эффективное<br>IoT соединение для вашего<br>безграничного успеха!</div>
            </div>
           
            <img class="img goosi" src="../assets/images/Goosi.jpg" alt="goosi">
            <img class="img goosi-with-text" src="../assets/images/GoosiWithText.jpg" alt="goosi">
      </div>
      </main>
            
      
      <FooterComp/>
</template>

<style scoped>
.image-container{
      width: 100%;
      height: calc( 100vh - var(--header-height));
      overflow: hidden;
      position: relative;
}
.img{
      position: absolute;    
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;

      min-width: calc( 100vh - var(--header-height));
      min-height: 100%;
      width: 100%;

}


.goosi,
.mobile-label-container{
      display: none;
}

.mobile-label-container{    
      position: absolute;
      padding: 0 1.25% 12vh 1.25%;
      width: 100%;
     
      z-index: 98;
}

.mobile-label-container__background{    
      content: '' ;
      width: 100%;
      height: 100%;

      position: absolute;
      top:0;
      left: 0;

      background-image: url('../assets/images/v-uzor.png');
      background-repeat: no-repeat;
      background-position: bottom;
      background-size: cover;
      
      opacity: 0.12;
}

.mobile-label-container__text{          
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

      background-color:rgba(255, 255, 255, 0.42);
      border: 4px dotted rgb(255, 255, 255); 
      border-top: 0;
      border-radius: 0 0 40px 40px ; 
   
      z-index: 99;
}


.goosi-with-text{
      display: block;
}


@media (max-width: 767px) {
      .goosi,
      .mobile-label-container{
            display: block;
      }
      .goosi-with-text{
            display: none;  
      }
}
</style>