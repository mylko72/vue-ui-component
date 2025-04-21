<template>
  <div class="min-h-screen px-4 py-5 border border-slate-200 rounded-2xl">
    <h2 class="mb-3 ml-3 text-xs font-semibold text-slate-500 leading-7">Components</h2>
    <nav-items />
  </div>
</template>

<script>
  import NavItems from '@/components/NavItems.vue';

  export default {
    components: {
      NavItems
    },
  }
</script>

<style lang="scss" scoped>

</style>