import DefaultTheme from 'vitepress/theme'
import CreateGuid from '../../components/fssg.core/base-utils/CreateGuid.vue'
import CreateIntRandom from '../../components/fssg.core/base-utils/CreateIntRandom.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('CreateGuid', CreateGuid)
    app.component('CreateIntRandom', CreateIntRandom)
  }
}