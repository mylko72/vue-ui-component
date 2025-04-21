<template>
  <div class="ui-container p-5">
    <TheHeader class="mb-3" :menuOpen="isMenuOpen" @toggle="handleToggle" />
    <div class="flex items-start gap-3">
      <TheNav :menuOpen="isMenuOpen" @toggle="handleToggle" />
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
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    handleToggle(value) {
      this.isMenuOpen = value;
    }
  }
}
</script>

<style scoped>
</style>
