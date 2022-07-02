<script setup lang="ts">
import Upload from '@/components/molecules/Upload/Upload.vue';

const title = '画像サイズチェッカー';

useHead({
  meta: [{ name: 'description', content: `This is ${title}` }],
  title,
});
</script>

<template>
  <div>
    <h1 class="title">{{ title }}</h1>
    <Upload />
    <input type="file" title @change="onChange" />
  </div>
</template>

<style lang="scss" scoped>
.title {
  margin: 50px 0 30px;
  color: #7f7f7f;
  font-size: 20px;
  text-align: center;
}
</style>
