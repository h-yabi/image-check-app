import TextBase from './TextBase'

export default {
  component: TextBase,
  title: 'atoms/texts/TextBase',
}

const defaultTemplate = (args) => ({
  components: { TextBase },
  setup: () => ({ args }),
  template: `
    <TextBase :label="$props.size">{{args.default}}</TextBase>
  `,
  methods: { toJSON: () => {} },
})

export const Default = defaultTemplate.bind({})
Default.args = {
  size: 18,
  default: 'text'
}
