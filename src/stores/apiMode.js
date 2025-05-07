import { reactive, computed } from 'vue-demi'

const state = reactive({
  apiMode: 'options'
})

export function useApiMode() {
  const apiMode = computed({
    get: () => state.apiMode,
    set: (mode) => {
      console.log('mode', mode);
      state.apiMode = mode
    }
  })

  const setApiMode = (mode) => {
    state.apiMode = mode
  }

  return {
    apiMode,
    setApiMode,
  }
}
