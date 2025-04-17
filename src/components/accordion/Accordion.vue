<template>
  <div class="ui-accordion-group" data-role="accordion-group" accordion-option="toggle">
    <div v-for="(item, index) in accordionItems" :key="item.id">
      <button
        :id="`accordion-head-${index + 1}`"
        aria-level="2"
        :aria-expanded="item.open.toString()"
        class="accordion-btn"
        :aria-controls="`accordion-panel-${index + 1}`"
        @click="toggleAccordion(index)">
          <span>{{ item.header }}</span>
          <AkChevronDown class="ic-arrow" />
      </button>
      <div
        class="ui-accordion-contents"
        :id="`accordion-panel-${index + 1}`"
        role="region"
        :aria-labelledby="`accordion-head-${index + 1}`"
        :hidden="!item.visible"
        ref="regions"
        @transitionend="onTransitionEnd(index)"
      >
          <div class="inner-accordion-contents">
              {{ item.panel }}
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { AkChevronDown } from '@kalimahapps/vue-icons';

  export default {
    name: 'Accordion',
    components: {
      AkChevronDown,
    },
    props: {
      accordionItems: {
        type: Array,
        required: true,
      }
    },
    methods: {
      toggleAccordion(index) {
        const region = this.$refs.regions[index];
        const item = this.accordionItems[index];

        console.log('call here')

        if (item.transitioning) return; // Prevent rapid toggling

        console.log('call here2')

        item.transitioning = true;

        if (item.open) {
          // Close
          region.style.height = region.scrollHeight + 'px';
          item.visible = true;

          requestAnimationFrame(() => {
            region.style.transition = 'height 0.3s ease';
            region.style.height = '0px';
            item.open = false;
          });
        } else {
          // Open
          item.visible = true;

          requestAnimationFrame(() => {
            region.style.height = '0px';
            requestAnimationFrame(() => {
              region.style.transition = 'height 0.3s ease';
              region.style.height = region.scrollHeight + 'px';
              item.open = true;
            });
          });
        }
      },
      onTransitionEnd(index) {
        const region = this.$refs.regions[index];
        const item = this.accordionItems[index];

        region.style.transition = '';
        region.style.height = '';

        if (!item.open) {
          item.visible = false; // <-- 이제 transition 끝나고 hidden 적용
        }

        console.log('transition end...');

        item.transitioning = false;
      }
    }

  }
</script>