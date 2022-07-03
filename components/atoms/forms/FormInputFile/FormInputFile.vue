<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';
const isEnter = ref<boolean>(false);

const props = defineProps({
  reset: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['onchange', 'drop-files']);

/*
 * onChange イベントハンドラ
 */
const onChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const files = target.files;
  if (files === null || !files[0]) {
    return;
  }
  emit('onchange', files[0]);
};

/*
 * ドラッグ＆ドロップ イベントハンドラ
 */
const dragEnter = () => {
  isEnter.value = true;
};
const dragLeave = () => {
  isEnter.value = false;
};
const dropFile = (event: DragEvent) => {
  const dataTransfer = event.dataTransfer as DataTransfer;
  isEnter.value = false;
  emit('drop-files', [...dataTransfer.files]);
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
