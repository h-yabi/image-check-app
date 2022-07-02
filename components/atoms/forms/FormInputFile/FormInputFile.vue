<script setup lang="ts">
import { defineProps, ref } from 'vue';
const image = ref<HTMLImageElement>();
const isEnter = ref<boolean>(false);

const props = defineProps({
  reset: {
    type: Boolean,
    default: false,
  },
});

const onChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const files = target.files;
  // console.log(files);
  if (!files[0]) {
    return;
  }
  const image = new Image();
  const reader = new FileReader();
  reader.onloadend = function () {
    image.src = reader.result;
    console.log(files[0].name);
    image.onload = function () {
      console.log(image.name);
      const result = { width: image.naturalWidth, height: image.naturalHeight };
      console.log(result);
    };
  };
  reader.readAsDataURL(files[0]);
};

const dragEnter = (event: Event) => {
  console.log('Enter Drop Area');
  isEnter.value = true;
};
</script>

<template>
  <input
    type="file"
    class="formInputFile"
    :class="[{ 'is-reset': props.reset }, { enter: isEnter }]"
    @change="onChange"
    @dragenter="dragEnter"
  />
</template>

<style lang="scss" scoped>
.formInputFile {
  position: relative;
  padding: 10px;
  box-sizing: border-box;
  border: 2px dashed rgb(200, 200, 200);
  &::before {
    display: block;
    position: absolute;
    z-index: 1;
    top: 2px;
    left: 2px;
    background: rgb(253, 251, 251);
    width: 300px;
    height: 100px;
    content: '';
  }
}
.is-reset {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  color: transparent;
  font-size: 10px;
  cursor: pointer;
}

.enter {
  border: 2px dotted powderblue;
}
</style>
