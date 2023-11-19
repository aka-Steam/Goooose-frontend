<script setup>
import {computed} from 'vue'
import {useStore} from 'vuex'
import Menu from '../../components/SidebarMenu.vue'
import HeaderRoute from '../../components/HeaderRoute.vue'


const store = useStore()
const unit = computed(()=>{
      if(Object.hasOwn(store.state, 'editable'))
      {
            return store.state.editable;
      }
      return null;
})


function onClickSave(){
      delete store.state.editable;
}

</script>
<template>
      <main class="dashboard-main">
          <Menu></Menu>
          <section class="dashboard-content">
              <HeaderRoute>Главная ~> </HeaderRoute>
              <div class="devices-space">
                  {{unit.type}}
                  {{unit.id}}
                  {{unit.name}}
                  {{unit.description}}
                  <button @click="onClickSave">SAVE</button>
              </div>
          </section>
      </main>
  </template>
  <style scoped>
</style>