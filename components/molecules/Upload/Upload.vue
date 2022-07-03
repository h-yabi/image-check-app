<script setup lang="ts">
import IconPlus from '@/components/atoms/icons/IconPlus/IconPlus.vue';
import TextBase from '@/components/atoms/texts/TextBase/TextBase.vue';
import FormInputFile from '@/components/atoms/forms/FormInputFile/FormInputFile.vue';

interface Result {
  name: String;
  width: Number;
  height: Number;
}

const result = ref<Result[]>([]);

const onChange = (data: File) => {
  const img = new Image();
  img.src = URL.createObjectURL(data);
  img.onload = () => {
    const imgAttr = {
      name: data.name,
      width: img.naturalWidth,
      height: img.naturalHeight,
    };
    URL.revokeObjectURL(img.src);
    result.value.push(imgAttr);
  };
};

const dropFile = (data: File[]) => {
  data.map((file) => {
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
};
</script>

<template>
  <div class="upload">
    <div class="upload_box">
      <IconPlus />
      <TextBase :size="14">
        画像をドラッグ＆ドロップ、<br />またはクリックでファイルを選択
      </TextBase>
      <FormInputFile
        :reset="true"
        @onchange="onChange"
        @drop-files="dropFile"
      />
    </div>
    <table v-if="Object.keys(result).length" class="upload_result">
      <thead>
        <tr>
          <th>ファイル名</th>
          <th>width</th>
          <th>height</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(file, index) in result" :key="index">
          <td>{{ file.name }}</td>
          <td>{{ file.width }}</td>
          <td>{{ file.height }}</td>
        </tr>
      </tbody>
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
    width: 100%;
    max-width: 650px;
    margin: 40px auto 0;
    border-collapse: collapse;
    thead {
      background: rgb(253, 251, 251);
    }
    th,
    td {
      padding: 10px;
      border: 1px solid rgb(200, 200, 200);
    }
  }
}
.textBase {
  color: #6f6d6d;
}
</style>
