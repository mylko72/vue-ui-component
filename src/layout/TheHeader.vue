<template>
  <header class="flex justify-between items-center px-5 py-4 md:px-9 md:py-5 border border-slate-200 rounded-2xl">
    <div class="flex items-center">
      <McComponentsFill class="text-3xl mr-2" />
      <h1 class="text-3xl font-bold">Vue UI components</h1>
    </div>
    <div class="md:flex items-center gap-2 px-4 py-1 bg-slate-100 rounded-2xl hidden">
      <span class="font-bold">API :</span>
      <label><input type="radio" name="apigroup" value="options" v-model="mode" /> Option API</label>
      <label><input type="radio" name="apigroup" value="composition" v-model="mode" /> Composition API</label>
    </div>
    <!-- 햄버거 메뉴 버튼 (모바일에서만 보임) -->
    <button @click="handleClick" class="md:hidden text-3xl" aria-haspopup="dialog" data-popup="navpop">
      ☰
    </button>
  </header>
</template>

<script>
  import { McComponentsFill } from '@kalimahapps/vue-icons';
  import { useApiMode } from '@/stores/apiMode'

  const { apiMode, setApiMode } = useApiMode()

  export default {
    components: {
      McComponentsFill
    },
    props: {
      menuOpen: Boolean
    },
    emits: ['toggle'],
    data() {
      return {
        mode: apiMode.value,
        lastFocusedElement: null,
      }
    },
    watch: {
      menuOpen(newVal) {
        newVal ? this.lastFocusedElement = document.activeElement : this.lastFocusedElement.focus();
      },
      mode(newMode) {
        console.log('newMode', newMode);
        setApiMode(newMode)
      }
    },
    methods: {
      handleClick() {
        console.log('focusedElement', document.activeElement);
        this.$emit('toggle', true)
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>