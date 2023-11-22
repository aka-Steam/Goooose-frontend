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
      width: 100vw;
      height: calc(100vh-70px);
      overflow: hidden;
}
.img{
      width: 100%;
      height: auto;
      margin-top: -300px;
}
</style>