<template>
  <div ref="modalRef" class="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" data-popup="navpop" role="dialog" aria-label="모바일 내비게이션 메뉴">
    <div class="bg-white w-10/12 max-w-sm p-6 rounded-2xl relative">
      <h2 ref="popTit" class="mb-3 ml-3 text-xs font-semibold text-slate-500" tabindex="0">Components</h2>
      <nav-items @close="$emit('close')" />
      <button @click="$emit('close')" class="absolute top-3 right-4 text-xl" popup-close="navpop">✕</button>
    </div>
  </div>
</template>

<script>
  import NavItems from '@/components/NavItems.vue';
  import { useFocusTrap } from '@/utils/useFocusTrap';

  export default {
    components: {
      NavItems
    },
    mounted() {
      const { enableTrap } = useFocusTrap(this.$refs.modalRef);
      enableTrap();

      this.$refs.popTit.focus();
    },
    unmounted() {
      const { disableTrap } = useFocusTrap(this.$refs.modalRef);
      disableTrap();
    }
  }

</script>

NavItems