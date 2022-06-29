<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps({
  size: {
    type: Number,
    default: 16,
  },
});

const customStyle = computed(() => {
  return {
    fontSize: props.size + 'px',
  };
});

// defineProps<Props>();
</script>

<template>
  <p :size="size" :style="customStyle">
    <slot></slot>
  </p>
</template>

<style lang="scss" scoped></style>
