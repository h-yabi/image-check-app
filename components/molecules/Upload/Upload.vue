<script setup lang="ts">
import IconPlus from '@/components/atoms/icons/IconPlus/IconPlus.vue';
import TextBase from '@/components/atoms/texts/TextBase/TextBase.vue';
</script>

<template>
  <div class="upload">
    <IconPlus />
    <TextBase :size="14">textが入る</TextBase>
  </div>
</template>

<style lang="scss" scoped>
// .upload
.upload {
  display: flex;
  align-items: center;
}
</style>
