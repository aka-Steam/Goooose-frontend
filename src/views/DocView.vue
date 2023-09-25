<script setup>
import HeaderComp from '../components/HeaderComp.vue';
import FooterComp from '../components/Footer.vue';
</script>
<template>
      <HeaderComp />
      <main class="main">
            <!-- <div style="margin: 20px; text-align: center; color:var(--color-text);">Documentation page</div>
            <hr> -->
            <section class="doc-container">
                  <a href="http://95.163.230.29/api/documentation#/Device/getDevice" target="_blanck" class="doc-item">Документация к API</a>
            </section>
      </main>
      <FooterComp />
</template>

<style scoped>
.doc-container {
      margin: 0 auto;
      padding: 24px 12px;
      max-width: 1400px;
      /* памагитя
      как не быть тупым */
      display: flex;
      justify-content: center;

      gap: 16px;
}

.doc-item {
      display: flex;
      justify-content: center;
      align-items:center;
      width: 360px;
      min-width: 280px;
      height: 100px;
      font-size: 20px;
      color:var(--color-text);
      border-radius: 30px;
      background-color: var(--color-background);
      box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.25);
}

.doc-item:hover{
      color:var(--color-accent); 
      box-shadow: 0px 4px 24px 0px var(--color-accent);
}
</style>