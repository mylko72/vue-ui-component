<template>
  <component
    :is="current"
    v-bind="$attrs"
    v-on="isVue2 ? $listeners : null"
  >
    <template v-for="(_, name) in $slots" #[name]>
      <slot :name="name" />
    </template>
  </component>
</template>

<script>
  import { isVue2 } from 'vue-demi'
  import { defineAsyncComponent } from 'vue'
  import { watch } from 'vue'
  import { useApiMode } from '@/stores/apiMode'

  export default {
    name: 'MyTab',
    props: {
      mode: {
        type: String,
        default: 'options'
      }
    },
    data() {
      return {
        current: null,
      }
    },
    async created() {
      const { apiMode } = useApiMode()

      // ✅ 수동으로 watch 등록
      watch(apiMode, (newValue, oldValue) => {
        console.log('watch triggered', newValue)
        this.fetchComponent(newValue)
      }, { immediate: true })
    },
    inheritAttrs: false,
    computed: {
      isVue2() {
        return isVue2
      },
    },
    methods: {
      async fetchComponent(mode) {
        if (mode === 'options') {
          this.current = isVue2
          ? () => import('./Tabs.options.vue')
          : defineAsyncComponent(() => import('./Tabs.options.vue'))
        } else {
          this.current = isVue2
          ? () => import('./Tabs.composition.vue')
          : defineAsyncComponent(() => import('./Tabs.composition.vue'))
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>