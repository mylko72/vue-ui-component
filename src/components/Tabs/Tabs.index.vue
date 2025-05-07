<template>
  <component
    :is="currentComponent"
    v-bind="$attrs"
    v-on="isVue2 ? $listeners : null"
  >
    <template v-for="(_, name) in $slots" #[name]>
      <slot :name="name" />
    </template>
  </component>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { defineAsyncComponent, isVue2 } from 'vue-demi'
import { useApiMode } from '@/stores/apiMode'

const currentComponent = ref(null)
const { apiMode } = useApiMode()

console.log('call2.....');

const fetchComponent = (mode) => {
  if (mode === 'options') {
    currentComponent.value = defineAsyncComponent(() => import('./Tabs.options.vue'))
  } else {
    currentComponent.value = defineAsyncComponent(() => import('./Tabs.composition.vue'))
  }
}

onMounted(() => {
  console.log('apiMode', apiMode.value);
  fetchComponent(apiMode.value) // 초기 로딩
})

watch(apiMode, (newMode) => {
  fetchComponent(newMode)
})
</script>
