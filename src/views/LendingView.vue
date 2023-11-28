<script setup>
import HeaderComp from '../components/HeaderComp.vue';
import FooterComp from '../components/Footer.vue';
</script>
<template>
     <HeaderComp /> 
     <main class="main">
      <div class="image-container">
            <img class="img" src="../assets/images/Goosi.jpg" alt="goosi">
      </div>
      </main>
            
      
      <FooterComp/>
</template>
<style scoped>
.image-container{
      width: 100%;
      height: 100vh;
      overflow: hidden;
}
.img{
      width: 100%;
      height: auto;
      margin-top: -300px;
}

@media (max-width: 767px) {
      .img{
      width: auto;
      height: 100%;
      margin-top: 0px;
}
 
}
</style>