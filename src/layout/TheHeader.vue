<template>
  <header class="flex justify-between items-center px-5 py-4 md:px-9 md:py-5 border border-slate-200 rounded-2xl">
    <div class="flex items-center">
      <McComponentsFill class="text-3xl mr-2" />
      <h1 class="text-3xl font-bold">Vue UI components</h1>
    </div>
    <!-- 햄버거 메뉴 버튼 (모바일에서만 보임) -->
    <button @click="handleClick" class="md:hidden text-3xl" aria-haspopup="dialog" data-popup="navpop">
      ☰
    </button>
  </header>
</template>

<script>
  import { McComponentsFill } from '@kalimahapps/vue-icons';

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
        lastFocusedElement: null,
      }
    },
    watch: {
      menuOpen(newVal) {
        newVal ? this.lastFocusedElement = document.activeElement : this.lastFocusedElement.focus();
      }
    },
    methods: {
      handleClick() {
        console.log('focusedElement', document.activeElement);
        this.$emit('toggle', true)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>