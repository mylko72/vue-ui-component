import * as components from './components'
import { useApiMode } from './stores/apiMode'

const { apiMode } = useApiMode()

export default {
  install(Vue, options = {}) {
    Object.entries(components).forEach(([name, component]) => {
      console.log('name', name)
      console.log('component', component)
      Vue.component(name, {
        extends: component,
        props: {
          mode: {
            type: String,
            default: apiMode.value || 'options'
          }
        }
      })
    })
  }
}
