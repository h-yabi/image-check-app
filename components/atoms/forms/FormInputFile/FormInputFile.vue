<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';
const image = ref<HTMLImageElement>();
const isEnter = ref<boolean>(false);
const files = ref();

const props = defineProps({
  reset: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['drop-files']);

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
    image.onload = function () {
      console.log(image.name);
      const result = { width: image.naturalWidth, height: image.naturalHeight };
      console.log(result);
    };
  };
  reader.readAsDataURL(files[0]);
};

const dragEnter = () => {
  isEnter.value = true;
};
const dragLeave = () => {
  isEnter.value = false;
};
const dropFile = (event: DragEvent) => {
  const dataTransfer = event.dataTransfer as DataTransfer;
  console.log([...dataTransfer.files]);
  files.value = [...dataTransfer.files];
  isEnter.value = false;
  emit('drop-files', files.value);
};
</script>

<template>
  <input
    type="file"
    class="formInputFile"
    :class="[{ 'is-reset': props.reset }, { 'is-enter': isEnter }]"
    @dragover.prevent
    @change="onChange"
    @dragenter="dragEnter"
    @dragleave="dragLeave"
    @drop.prevent="dropFile"
  />
</template>

<style lang="scss" scoped>
.formInputFile {
  position: relative;
  padding: 10px;
  box-sizing: border-box;
  border: 3px dashed rgb(200, 200, 200);
  border-radius: 5px;
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
  &.is-reset {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    color: transparent;
    font-size: 10px;
    cursor: pointer;
  }

  &.is-enter {
    border: 3px dashed powderblue;
  }
}
</style>
