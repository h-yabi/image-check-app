import FileUpload from './FileUpload'

export default {
  component: FileUpload,
  title: 'atoms/texts/FileUpload',
}

export const Default = () => ({
  components: { FileUpload },
  template: '<FileUpload />',
})
Default.storyName = 'デフォルト'