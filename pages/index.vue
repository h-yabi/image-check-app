<script setup lang="ts">
import Upload from '@/components/molecules/Upload/Upload.vue';

const title = 'Image Checker';

useHead({
  meta: [{ name: 'description', content: `This is ${title}` }],
  title,
});
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <Upload />
  </div>
</template>
