<template>
  <div class="ui-tab-container" data-role="tab">
    <ul class="ui-tab-list flex" role="tablist">
        <li v-for="(item, i) in tabItems" :key="i" :class="'tab-list '+setActive(i)">
            <button
              :id="'tab-'+(i+1)"
              class="tab-btn"
              role="tab"
              aria-selected="true"
              :aria-controls="'tab-panel-'+(i+1)"
            >
                {{ item.tab }}
            </button>
        </li>
    </ul>
    <div class="ui-tab-contents">
        <div v-for="(item, i) in tabItems"
          :key="i"
          :id="'tab-panel-'+(i+1)"
          class="tab-contents"
          role="tabpanel"
          :aria-labelledby="'tab-'+(i+1)"
          tabindex="0"
          :hidden="setHidden(i)"
          >
            <p>{{ item.content }}</p>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabList',
    props: [
      'tabItems'
    ],
    methods: {
      setActive: function(i) {
        return i === 0 ? 'active' : '';
      },
      setHidden: function(i) {
        return i > 0;
      }
    }

  }
</script>

<style lang="scss" scoped>

</style>