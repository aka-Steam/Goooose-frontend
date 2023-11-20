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


function onClickSave(id){
    let newName = document.getElementById('name').value;
    let newDescription = document.getElementById('description').value;

    if(unit.value.type == "device"){
        console.log("id: " + unit.value.id)
        console.log(unit.value.type);
        console.log(typeof newName);
        console.log(typeof newDescription);
        store.dispatch('devicem/UPDATE_DEVICE_FROM_API',{id : unit.value.id, newName: newName, newDescription : newDescription})
    }
    else if (unit.value.type =="item"){
        console.log('item')
    }
}

</script>
<template>
      <main class="dashboard-main">
          <Menu></Menu>
          <section v-if="unit != null" class="dashboard-content">
              <HeaderRoute>Главная ~> {{unit.name}}</HeaderRoute>
              <div class="container">
                  
                <div class="form">
                    <label class="label">
                        <span class="span">Название:</span>
                        <input name="name" id="name" class="input" type="text" :value="unit.name">
                    </label>
                    
                    <label class="label">
                        <span class="span">Описание:</span>
                        <textarea name="description" id="description" class="textarea" cols="30" rows="10" :value="unit.description"></textarea>
                    </label>

                    <button @click="onClickSave(unit.id)">Сохранить</button>
                </div>
              </div>
          </section>
      </main>
</template>
<style scoped>

.container {
  padding: 20px;

}

.form{
  padding: 10px;
  background-color:var(--color-sidebar-foreground);
  border-radius: 20px;
}

.label{
    display: block;
}
.input{
    width: 100%;
    color: var(--color-text);
    background-color:var(--color-sidebar-foreground);
}
.textarea{
    width: 100%;
    display: block;

    color: var(--color-text);
    background-color:var(--color-sidebar-foreground);
}
</style>