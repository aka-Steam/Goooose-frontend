
<script>
  export default {
    name: "Switch",
    props: {
      label: {
        type: String,
        required: true,
      },
      checked: {
        type: Boolean,
        required: true,
      },
    },
  };
</script>

<template>
      <label class="container">
        <input
          v-bind="$attrs"
          class="input"
          type="checkbox"
          :checked="checked"
          @change="$emit('update:checked', $event.target.checked)"
        />
        <span class="label">{{ label }}</span>
        <span class="switch"></span>
        
      </label>
</template>
        
<style scoped>
      .container {
        cursor: pointer;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
      }
      .label {
        margin: 0 12px;
        color: var(--color-text);
        /* Show an ellipsis if the text takes more than one line */
        /* overflow: hidden; */
        /* text-overflow: ellipsis; */
        white-space: nowrap;
      }
      /* Visually hide the checkbox input */
      .input {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;  
        border-width: 0;
      }
      .switch {
        --switch-container-width: 50px;
        --switch-size: calc(var(--switch-container-width) / 2);
        /* --light-gray: #e2e8f0;
        --gray: #cbd5e0;
        --dark-gray: #a0aec0;
        --teal: #4fd1c5;
        --dark-teal: #319795; */
        /* Vertically center the inner circle */
        display: flex;
        align-items: center;
        position: relative;
        height: var(--switch-size);
        flex-basis: var(--switch-container-width);
        /* Make the container element rounded */
        border-radius: var(--switch-size);
        background-color: var(--color-background-dashboard);
        /* In case the label gets really long, the toggle shouldn't shrink. */
        flex-shrink: 0;
        transition: background-color 0.25s ease-in-out;
      }
      .switch::before {
        content: "";
        position: absolute;
        /* Move a little bit the inner circle to the right */
        left: 1px;
        height: calc(var(--switch-size) - 4px);
        width: calc(var(--switch-size) - 4px);
        /* Make the inner circle fully rounded */
        border-radius: 9999px;
        background-color: var(--color-darck);
        border: 2px solid var(--color-text);
        transition: transform 0.24s ease-in-out;
      }

      .input:checked ~ .switch {
        background-color: var(--color-accent);
      }

      .input:checked ~ .switch::before {
        /* border-color: var(--teal); */
        /* Move the inner circle to the right */
        transform: translateX(
          calc(var(--switch-container-width) - var(--switch-size) + 1px)
        );
      }

      /* .input:focus ~ .switch::before {
        border-color: var(--gray);
      }

      .input:focus:checked ~ .switch::before {
        border-color: var(--dark-teal);
      }

      .input:disabled ~ .switch {
        background-color: var(--gray);
      }
      
      .input:disabled ~ .switch::before {
        background-color: var(--dark-gray);
        border-color: var(--dark-gray);
      } */
      @media (max-width:360px) {
        .container {
          flex-wrap: wrap;
        }
        
      }
    </style>