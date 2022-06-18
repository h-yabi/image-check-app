module.exports = [
  {
    type: 'select',
    name: 'category',
    message: 'コンポーネントのディレクトリを選択してください',
    choices: ['atoms', 'molecules', 'organisms', 'templates', 'pages']
  },
  {
    type: 'select',
    name: 'subcategory',
    message: 'サブカテゴリを選択してください',
    choices: [
      'サブカテゴリなし',
      'icons',
      'buttons',
      'texts',
      'labels',
      'forms',
      'headlines',
    ],
  },
  {
    type: 'input',
    name: 'componentname',
    message: 'コンポーネント名をパスカルケースで入力してください',
    hint: '"IconSearch"など',
  },
  // {
  //   type: 'toggle',
  //   name: 'test',
  //   message: 'テストファイルを作成しますか？',
  //   enabled: 'Yes',
  //   disabled: 'No'
  // },
  {
    type: 'toggle',
    name: 'story',
    message: 'storyファイルを作成しますか？',
    enabled: 'Yes',
    disabled: 'No'
  }
]
