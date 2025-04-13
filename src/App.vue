<template>
  <div class="ui-container p-5">
    <TheHeader class="mb-3" />
    <div class="flex items-start">
      <TheNav />
      <TheView />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from './layout/TheHeader.vue';
import TheNav from './layout/TheNav.vue';
import TheView from './layout/TheView.vue';
import TheFooter from './layout/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheNav,
    TheView,
    TheFooter
  },
}
</script>

<style scoped>
</style>
