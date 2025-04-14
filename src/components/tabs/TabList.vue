<template>
  <div class="ui-tab-container" data-role="tab">
    <ul class="ui-tab-list flex" role="tablist">
        <li
          v-for="(tab, index) in tabItems"
          class="tab-list"
          :class="{ active : selectedIndex === index }"
          :key="tab.id"
        >
            <button
              :id="tab.id"
              class="tab-btn"
              role="tab"
              :tabindex="selectedIndex === index ? null : -1"
              :aria-selected="selectedIndex === index ? true : false"
              :aria-controls="tab.panelId"
              @click="selectTab(index)"
              @keydown="onKeydown($event, index)"
              ref="tabButtons"
            >
                {{ tab.label }}
            </button>
        </li>
    </ul>
    <div class="ui-tab-contents">
        <div v-for="(tab, index) in tabItems"
          :id="tab.panelId"
          class="tab-contents"
          role="tabpanel"
          :aria-labelledby="tab.id"
          tabindex="0"
          :hidden="selectedIndex === index ? null : true"
          :key="tab.panelId"
          @click="blurTabFocus"
          >
          <slot v-if="tab.slotName" :name="tab.slotName"></slot>
          <component v-else-if="tab.component" :is="tab.component" />
          <p v-else>{{ tab.content }}</p>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabList',
    props: {
      tabItems : {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        selectedIndex: 0,
      }
    },
    computed: {
    },
    methods: {
      selectTab: function(index) {
        this.selectedIndex =  index;
        this.$nextTick(() => {
          this.$refs.tabButtons[index]?.focus();
        })
      },
      onKeydown: function(event, index){
        const key = event.key;
        const totalTabs = this.tabItems.length;

        if (key === 'ArrowRight') {
          const nextIndex = (index + 1) % totalTabs;
          this.selectTab(nextIndex);
        } else if (key === 'ArrowLeft') {
          const prevIndex = (index - 1 + totalTabs) % totalTabs;
          this.selectTab(prevIndex);
        } else if (key === 'Home') {
          this.selectTab(0);
        } else if (key === 'End') {
          this.selectTab(totalTabs - 1);
        }
      },
      blurTabFocus() {
        // 현재 포커스된 엘리먼트가 탭 버튼이면 포커스를 제거
        const active = document.activeElement;
        if (this.$refs.tabButtons.includes(active)) {
          active.blur();
        }
      },
    }

  }
</script>

<style lang="scss" scoped>

</style>