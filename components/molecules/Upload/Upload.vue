<script setup lang="ts">
import IconPlus from '@/components/atoms/icons/IconPlus/IconPlus.vue';
import TextBase from '@/components/atoms/texts/TextBase/TextBase.vue';
import FormInputFile from '@/components/atoms/forms/FormInputFile/FormInputFile.vue';
const result = ref();

const dropFile = (data: File[]) => {
  const newData = data.map((file) => {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      const imgAttr = {
        name: file.name,
        width: img.naturalWidth,
        height: img.naturalHeight,
      };
      URL.revokeObjectURL(img.src);
      result.value.push(imgAttr);
    };
    return result;
  });
  result.value = newData;
};
</script>

<template>
  <div class="upload">
    <div class="upload_box">
      <IconPlus />
      <TextBase :size="14">画像ファイルをアップロード</TextBase>
      <FormInputFile :reset="true" @drop-files="dropFile" />
    </div>
    <table class="upload_result">
      <tr v-for="(file, index) in result" :key="index">
        <td>{{ file.name }}</td>
        <td>{{ file.width }}</td>
        <td>{{ file.height }}</td>
      </tr>
    </table>
  </div>
</template>

<style lang="scss" scoped>
// .upload
.upload {
  &_box {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 400px;
    height: 300px;
    margin: auto;
    background: rgb(253, 251, 251);
    cursor: pointer;
  }
  &_result {
    th,
    td {
      padding: 5px;
      border: 1px solid #ccc;
    }
  }
}
</style>
