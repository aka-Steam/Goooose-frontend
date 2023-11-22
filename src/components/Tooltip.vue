<script setup>
      const props = defineProps({
            text: {
                  type: String,
                  required: true
            }
      })
</script>

<template>
      <div class="tooltip-box">
            <slot />
            <div class="tooltip">
                  <span class="text">{{ text }}</span>
            </div>
      </div>
</template>
    
<style scoped>
.tooltip-box {
      position: relative;
      display: inline-block;
}

.tooltip-box:hover .tooltip {
      opacity: 1;
      visibility:visible;
}

.tooltip {
      color: var(--color-text);
      text-align: center;
      padding: 5px 10px;
      border-radius: 2px;

      min-width: 120px;
      max-width: calc(100vw - 40px); /*For mobile devices. 280px with a screen width of 320px*/
      top: calc(100% + 5px);
      right: -80px;
      margin-left: -60px;

      opacity: 0;
      visibility: hidden;
      transition: opacity 1s;

      position: absolute;
      z-index: 1;

      border: 1px solid var(--color-text);
      border-radius: 5px;
      background: var(--color-sidebar-foreground) ;
}

.text::after {
      content: " ";
      position: absolute;
      bottom: 100%;
      right: 95px;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: transparent transparent var(--color-text) transparent;
}
</style>