<template>
  <div class="flex-auto w-64 hidden md:block">
    <TheNavDesk />
    <!-- 모바일용 모달 메뉴 -->
    <Teleport to="body">
      <TheNavMo v-if="menuOpen" class="modal-pop" @click="handleClick($event)" @close="toggle(false)" @keydown="onKeyDown($event)" />
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
      },
      onKeyDown(event) {
        if(event.key === 'Escape' && this.menuOpen) {
          this.toggle(false);
        }
      },
      handleClick(event) {
        if(event.target.classList.contains('modal-pop')){
          this.toggle(false);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>