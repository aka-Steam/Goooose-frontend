<script setup>
import { ref, watchEffect } from "vue";

// define component props for the slider component
const { min, max, step, modelValue } = defineProps({
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  step: {
    type: Number,
    default: 1,
  },
  modelValue: {
    type: Number,
    default: 50,
  },
  elementId: Number
});

// define emits for the slider component
//const emit = defineEmits(["update:modelValue"]);

// define refs for the slider component
const sliderValue = ref(modelValue);
const slider = ref(null);

// function to get the progress of the slider
const getProgress = (value, min, max) => {
  return ((value - min) / (max - min)) * 100;
};

// function to set the css variable for the progress
const setCSSProgress = (progress) => {
  slider.value.style.setProperty("--ProgressPercent", `${progress}%`);
};

// watchEffect to update the css variable when the slider value changes
watchEffect(() => {
  if (slider.value) {
    // emit the updated value to the parent component
    if(sliderValue.value > 100){
      sliderValue.value = 100
    }
    if(sliderValue.value < 0){
      sliderValue.value = 0
    }

    // emit("update:modelValue", sliderValue.value);

    // update the slider progress
    const progress = getProgress(
      sliderValue.value,
      slider.value.min,
      slider.value.max
    );

     
    // set the css variable
    setCSSProgress(progress);
  }
});
</script>

<template>
  <div class="custom-slider">
    <div class="group">
      <input 
        ref="slider" 
        v-bind="$attrs" 
        :value="sliderValue"
        @input="({ target }) => (sliderValue = parseFloat(target.value))" 
        @change="$emit('update:modelValue', $event.target.value);"
        type="range" 
        :min="min" 
        :max="max" 
        :step="step"
        class="slider" 
      />
      <input 
        :id="'range-value-' + elementId" 
        v-bind="$attrs" 
        :value="sliderValue"
        @input="({ target }) => (sliderValue = parseFloat(target.value))" 
        @change="$emit('update:modelValue', $event.target.value);"
        :min="min" 
        :max="max" 
        :step="step" 
        type="number"
        class="slider-value__input" 
      />
      <div class="percent">%</div>
    </div>
    <label :for="'range-value-' + elementId" class="label">
      <slot />
    </label>
  </div>
</template>

<style scoped>
.label{
  display: block;
  font-size: 12px;
  line-height: 16px;
}
.group{
  display: flex;
  align-items:center;
}
.slider-value__input {
  width: 76px;
  height: 1.6rem;
  margin-left: 12px;
  padding: 0 12px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;

  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  /*  font-size: inherit; */
  text-align: center;

  letter-spacing: 0.1em;
  color: var(--color-accent);
  outline: 0;
  outline-offset: 0;
  background-color: var(--color-background-dashboard);
  border: 0px;
  border-radius: 20px;
}  

.slider-value__input[disabled]{
  color: #888888;
}

.slider-value__input:focus {
  border-color: var(--color-accent1);
  background-color: var(--color-background-dashboard);
  outline: 0;
  outline-offset: 0;
}
     
.percent {
  display: inline-block;
  margin-left: 4px;
  font-size: 1.2rem;
}

.custom-slider {
  --trackHeight: 0.5rem;
  --thumbRadius: 1rem;
}

/* style the input element with type "range" */
.custom-slider input[type="range"] {
  width:100%;
  position: relative;
  appearance: none;
  /* pointer-events: none; */
  border-radius: 999px;
  z-index: 0;
}

/* ::before element to replace the slider track */
.custom-slider input[type="range"]::before {
  content: "";
  position: absolute;
  width: var(--ProgressPercent, 100%);
  height: 100%;
  background: var(--color-accent);
  /* z-index: -1; */
  pointer-events: none;
  border-radius: 999px;
}
.custom-slider[disabled="true"] input[type="range"]::before{
  background-color: #888888;
}
/* `::-webkit-slider-runnable-track` targets the track (background) of a range slider in chrome and safari browsers. */
.custom-slider input[type="range"]::-webkit-slider-runnable-track {
  appearance: none;
  background: var(--color-background-dashboard);
  height: var(--trackHeight);
  border-radius: 999px;
}

/* `::-moz-range-track` targets the track (background) of a range slider in Mozilla Firefox. */
.custom-slider input[type="range"]::-moz-range-track {
  appearance: none;
  background: var(--color-background-dashboard);;
  height: var(--trackHeight);
  border-radius: 999px;
}

.custom-slider input[type="range"]::-webkit-slider-thumb {
  position: relative;
  /* top: 50%; 
  transform: translate(0, -50%);
  */
  width: var(--thumbRadius);
  height: var(--thumbRadius);
  margin-top: calc((var(--trackHeight) - var(--thumbRadius)) / 2);
  background: var(--color-darck);
  border-radius: 999px;
  border: 1px solid var(--color-text);
  pointer-events: all;
  appearance: none;
  z-index: 1;
}
</style>