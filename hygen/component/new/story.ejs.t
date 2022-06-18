---
to: components/<%= category %><% if(subcategory && subcategory!=='サブカテゴリなし'){ %>/<%= subcategory %><% } %>/<%= componentname || 'unnamed'%>/<%= componentname || 'unnamed'%>.stories.js
---
import <%= componentname %> from './<%= componentname %>'

export default {
  component: <%= componentname %>,
  title: '<%= componentname %>',
}

export const Default = () => ({
  components: { <%= componentname %> },
  template: '<<%= componentname %> />',
})
Default.storyName = 'デフォルト'