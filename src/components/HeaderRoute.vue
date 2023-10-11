<template>
      <header class="header-route">
            <h2 class="route"><slot/></h2>
      </header>
</template>

<style scoped>
      .header-route{
      padding-left: 56px;
      padding-bottom: 7px;
      height: 61px;
      position: relative;

      display: flex;
      align-items:end;
      }
      .header-route::before{
            content: "";
            width: calc(100% - 20px);
            height: 1px;
            position: absolute ;
            
            right: 0;
            bottom: 0px;

            background-color: var(--color-text);
      }
</style>