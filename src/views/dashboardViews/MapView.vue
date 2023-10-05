<script setup>
import Menu from '../../components/SidebarMenu.vue'
import DeviceMap from '../../components/Map.vue'

</script>


<template>
 
  <main class="dashboard-main">
    <Menu></Menu>
    <section class="dashboard-content">
     <header class="header-route">
      <h2 class="route">Карта</h2>
     </header>
      <DeviceMap/> 
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aspernatur fugit eaque beatae, perspiciatis blanditiis praesentium magni iste non deleniti accusamus est! Consequuntur rerum amet quod consequatur suscipit est fuga.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia doloremque suscipit ratione mollitia commodi. Sed dolorum vel, quod fugiat veritatis modi impedit placeat ratione dolorem beatae illo dignissimos dolore voluptatibus.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aspernatur fugit eaque beatae, perspiciatis blanditiis praesentium magni iste non deleniti accusamus est! Consequuntur rerum amet quod consequatur suscipit est fuga.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia doloremque suscipit ratione mollitia commodi. Sed dolorum vel, quod fugiat veritatis modi impedit placeat ratione dolorem beatae illo dignissimos dolore voluptatibus.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aspernatur fugit eaque beatae, perspiciatis blanditiis praesentium magni iste non deleniti accusamus est! Consequuntur rerum amet quod consequatur suscipit est fuga.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia doloremque suscipit ratione mollitia commodi. Sed dolorum vel, quod fugiat veritatis modi impedit placeat ratione dolorem beatae illo dignissimos dolore voluptatibus.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia doloremque suscipit ratione mollitia commodi. Sed dolorum vel, quod fugiat veritatis modi impedit placeat ratione dolorem beatae illo dignissimos dolore voluptatibus.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aspernatur fugit eaque beatae, perspiciatis blanditiis praesentium magni iste non deleniti accusamus est! Consequuntur rerum amet quod consequatur suscipit est fuga.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia doloremque suscipit ratione mollitia commodi. Sed dolorum vel, quod fugiat veritatis modi impedit placeat ratione dolorem beatae illo dignissimos dolore voluptatibus.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aspernatur fugit eaque beatae, perspiciatis blanditiis praesentium magni iste non deleniti accusamus est! Consequuntur rerum amet quod consequatur suscipit est fuga.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia doloremque suscipit ratione mollitia commodi. Sed dolorum vel, quod fugiat veritatis modi impedit placeat ratione dolorem beatae illo dignissimos dolore voluptatibus.</p>
  </section>
    

  </main>
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