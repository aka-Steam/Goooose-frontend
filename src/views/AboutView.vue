<script setup>
import HeaderComp from '../components/HeaderComp.vue';
import FooterComp from '../components/Footer.vue';
</script>
<template>
      <HeaderComp /> 
      <main class="main">
            <div style="margin: 20px; text-align: center; color:var(--color-text);">About us page</div>
            <hr>
            <img src="../assets/images/UnderConstruction.png" alt="Under construction"
                  style="width: 90%;display: block; margin: 30px auto; box-shadow: 0px 0px 30px rgba(33, 30, 19, 0.284);">
      </main>
      <FooterComp/>
</template>