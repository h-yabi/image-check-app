<script setup lang="ts">
import Upload from '@/components/molecules/Upload/Upload.vue';

const title = '画像サイズチェッカー';

useHead({
  meta: [
    {
      name: 'description',
      content: `アップロードした画像の名前、サイズ（width, height）を取得し表示するアプリです。複数画像のアップロードにも対応。`,
    },
  ],
  title,
});
</script>

<template>
  <div>
    <h1 class="title">{{ title }}</h1>
    <Upload />
  </div>
</template>

<style lang="scss" scoped>
.title {
  margin: 50px 0 30px;
  color: #6f6d6d;
  font-size: 20px;
  text-align: center;
}
</style>
