<script setup lang="ts">
import IconPlus from '@/components/atoms/icons/IconPlus/IconPlus.vue';
import FileUpload from '@/components/atoms/texts/FileUpload/FileUpload.vue';
</script>

<template>
  <div class="upload">
    <IconPlus />
    <FileUpload />
  </div>
</template>

<style lang="scss" scoped>
// .upload
.upload {
  display: flex;
  align-items: center;
}
</style>
