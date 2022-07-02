<script setup lang="ts">
import IconPlus from '@/components/atoms/icons/IconPlus/IconPlus.vue';
import TextBase from '@/components/atoms/texts/TextBase/TextBase.vue';
</script>

<template>
  <div class="upload">
    <IconPlus />
    <TextBase :size="14">画像ファイルをアップロード</TextBase>
  </div>
</template>

<style lang="scss" scoped>
// .upload
.upload {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 300px;
  margin: auto;
  background: rgb(253, 251, 251);
  border: 2px dashed rgb(200, 200, 200);
  border-radius: 5px;
  cursor: pointer;
}
</style>
