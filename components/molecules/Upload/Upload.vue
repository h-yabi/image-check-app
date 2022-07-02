<script setup lang="ts">
import IconPlus from '@/components/atoms/icons/IconPlus/IconPlus.vue';
import TextBase from '@/components/atoms/texts/TextBase/TextBase.vue';
import FormInputFile from '@/components/atoms/forms/FormInputFile/FormInputFile.vue';
</script>

<template>
  <div class="upload">
    <IconPlus />
    <TextBase :size="14">画像ファイルをアップロード</TextBase>
    <FormInputFile :reset="true" />
  </div>
</template>

<style lang="scss" scoped>
// .upload
.upload {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 400px;
  height: 300px;
  margin: auto;
  background: rgb(253, 251, 251);
  border-radius: 5px;
  cursor: pointer;
}
</style>
