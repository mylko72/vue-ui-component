<template>
  <div>
    <TheHeader />
    <TheView />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from './layout/TheHeader.vue';
import TheView from './layout/TheView.vue';
import TheFooter from './layout/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheView,
    TheFooter
  },
}
</script>

<style scoped>
</style>
