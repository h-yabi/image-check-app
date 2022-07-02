import FormInputFile from './FormInputFile'

export default {
  component: FormInputFile,
  title: 'atoms/forms/FormInputFile',
}

const defaultTemplate = (args) => ({
  components: { FormInputFile },
  setup: () => ({ args }),
  template: `
    <FormInputFile :class="$props.reset" />
  `,
  methods: { toJSON: () => {} },
})

export const Default = defaultTemplate.bind({})
Default.args = {
  reset: false,
}

export const Reset = defaultTemplate.bind({})
Reset.args = {
  reset: true,
}
