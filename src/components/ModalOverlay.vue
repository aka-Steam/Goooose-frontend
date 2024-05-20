<script setup>
      import { ref, defineEmits } from 'vue'

      const props = defineProps({
            text: {
                  type: String,
                  default: ''
            },
            image: {
                  type: String,
                  default: ''
            }
      })

      const emit = defineEmits(['ok-modal'])

      const isOpen = ref(false)

      function openModal() {
            isOpen.value = true
      }

      function closeModal() {
            isOpen.value = false
      }

      function okModal() {
            emit('ok-modal')
            closeModal()
      }

      defineExpose({
            openModal,
            closeModal
      })
</script>

<template>
      <div v-if="isOpen" class="modal-overlay" @click="closeModal">
            <div class="modal-window" @click.stop>
                  <slot name="header">
                        <h3>Modal header</h3>
                  </slot>
                  <slot name="content">
                        <p>Modal content</p>
                        <img v-if="image" :src="image" alt="Modal image">
                        <p v-if="text">{{ text }}</p>
                  </slot>
                  <slot name="footer">
                        <button @click="closeModal">Close</button>
                        <button @click="okModal">OK</button>
                  </slot>
            </div>
      </div>
</template>
    
<style scoped>
      .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
      }

      .modal-window {
            background-color: var(--color-sidebar-foreground);
            border-radius: 5px;
            padding: 20px;
            width: 80%;
            height: 80%;
            overflow: auto;
      }

      button {
            margin-right: 10px;
      }


      @media (prefers-color-scheme: dark){
            .modal-window{
              border: 1px solid var(--color-text);    
            }
      }

      @media (prefers-color-scheme: light){
            .modal-window{
              border: 0;    
            }
      }

</style>



<!-- Example  -->
<!-- <script setup>
import ModalWindow from '..../ModalOverlay.vue';
import { ref } from 'vue'

const modal = ref(null);
const image = ref('https://via.placeholder.com/150')

function openModal() {
      modal.value.openModal()
}

function closeModal() {
      modal.value.closeModal()
}

function okModal() {
      console.log('OK modal')
}
</script>
<template>  
      <button @click="openModal">Open modal</button>
      
      <ModalWindow @ok-modal="okModal" ref="modal">
            <template #header>
                  <h3>Modal header</h3>
            </template>
            <template #content>
                  <p>Modal content</p>
                  <img :src="image" alt="Modal image">
            </template>
            <template #footer>
                  <button @click="closeModal">Close</button>
                  <button @click="okModal">OK</button>
            </template>
      </ModalWindow>
</template>
<style scoped>
</style> -->