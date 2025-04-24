<template>
  <section ref="modalRef" class="ui-layer-popup" :class="{'popup-open' : modalOpen}" :data-popup="popupId" role="dialog">
    <div class="layer-popup-inner">
      <slot name="contents"></slot>
      <button class="btn-layer-close" @click="$emit('close')" :popup-close="popupId"><span class="txt-hidden">현재 팝업 닫기</span> ✕</button>
    </div>
  </section>
</template>

<script>
  import { useFocusTrap } from '@/utils/useFocusTrap';

  export default {
    name: 'Popup',
    props: {
      popupId: String,
      modalOpen: Boolean,
    },
    mounted() {
      const { enableTrap } = useFocusTrap(this.$refs.modalRef);
      enableTrap();

      const firstLink = this.$refs.modalRef?.querySelector('a, button, [tabindex]:not([tabindex="-1"])');
      console.log('firstLink', firstLink);
      firstLink?.focus();
    },
    unmounted() {
      const { disableTrap } = useFocusTrap(this.$refs.modalRef);
      disableTrap();
    },
    watch: {
      modalOpen(newVal){
        if(newVal){
          // 모달 열릴 때 첫 focus
          this.$nextTick(() => {
            const firstLink = this.$refs.modalRef?.querySelector('a, button, [tabindex]:not([tabindex="-1"])');
            firstLink?.focus();
          });
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>