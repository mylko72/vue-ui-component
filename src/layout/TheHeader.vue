<template>
  <header class="flex justify-between items-center px-5 py-4 md:px-9 md:py-5 border border-slate-200 rounded-2xl">
    <div class="flex items-center">
      <McComponentsFill class="text-3xl mr-2" />
      <h1 class="text-3xl font-bold">Vue UI components</h1>
    </div>
    <!-- 햄버거 메뉴 버튼 (모바일에서만 보임) -->
    <button @click="handleClick" class="md:hidden text-3xl">
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
    emits: ['toggle'],
    methods: {
      handleClick() {
        console.log('call clicked...');
        this.$emit('toggle', true);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>