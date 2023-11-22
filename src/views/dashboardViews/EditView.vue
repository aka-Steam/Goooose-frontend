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
        console.log("id: " + unit.value.id)
        console.log(unit.value.type);
        console.log(typeof newName);
        console.log(typeof newDescription);
        console.log(unit.value.autoMode);
        console.log(unit.value.humidityThreshold);
        store.dispatch('devicem/UPDATE_ITEM_FROM_API',
        {
            id : unit.value.id,
            name: newName,
            description : newDescription,
            humidityThreshold: unit.value.humidityThreshold,
            autoMode: unit.value.autoMode
        })
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
                    <div class="fields">
                        <label class="label">
                        <span class="span">Название:</span>
                        <input name="name" id="name" class="input" type="text" :value="unit.name">
                    </label>
                    
                    <label class="label">
                        <span class="span">Описание:</span>
                        <textarea name="description" id="description" class="textarea" cols="30" rows="10" :value="unit.description"></textarea>
                    </label>
                    </div>

                    <button class="button" @click="onClickSave(unit.id)">Сохранить</button>
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

.input,
.textarea{
    width: 100%;
    padding: 0 12px;
    color: var(--color-text);
    background-color:var(--color-sidebar-foreground);
    border: 1px solid var(--color-text);
}

.input{
    height: 1.6rem;
    border-radius: 999px;
}
.textarea{
    display: block;
    padding: 8px  12px;
    border-radius: 10px 10px 1px 10px;
}

.fields{
    margin-bottom: 12px;
}
.button {
    cursor:pointer;
    display: block; 
    padding: 4px 12px;
    color: var(--color-text-light);
    background-color: var(--color-darck);
    border: 1px solid var(--color-text);
    border-radius: 30px;
    transition: 0.2s;
}

.button:hover {
    background-color: var(--color-darck2);  
}

</style>