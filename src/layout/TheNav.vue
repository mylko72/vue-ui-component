<template>
  <div class="flex-auto w-64 hidden md:block">
    <TheNavDesk class="" />
    <!-- 모바일용 모달 메뉴 -->
    <Teleport to="body">
      <TheNavMo v-if="menuOpen" @close="toggle(false)" />
    </Teleport>
  </div>
</template>

<script>
  import TheNavDesk from './TheNavDesk.vue';
  import TheNavMo from './TheNavMo.vue';

  export default {
    components: {
      TheNavDesk,
      TheNavMo
    },
    emits: ['toggle'],
    props: {
      menuOpen: Boolean,
    },
    methods: {
      toggle(val){
        this.$emit('toggle', val);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>