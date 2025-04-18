<template>
  <div class="ui-accordion-group" data-role="accordion-group" accordion-option="toggle">
    <accordion-item
      v-for="(item, index) in accordionItems"
      :key="index"
      :title="item.title"
      :index="index"
      v-model="item.open"
      @toggle="handleToggle"
    >
      <component v-if="item.component" :is="item.component" />
      <template v-else-if="item.content">
        {{ item.content }}
      </template>
    </accordion-item>
  </div>
</template>

<script>
  import AccordionItem from './AccordionItem.vue';

  export default {
    name: 'AccordionGroup',
    components: {
      AccordionItem
    },
    props: {
      accordionItems: {
        type: Array,
        required: true,
      },
      accordionOptions: {
        type: Object,
      },
    },
    emits: ['updateOpen'],
    data() {
      return {
        type: this.accordionOptions.type,
        motion: this.accordionOptions.transition
      }
    },
    methods: {
      handleToggle(clickedIndex) {
        this.accordionItems.forEach((item, idx) => {
          if(this.type === 'only') {
            item.open = idx === clickedIndex ? !item.open : false;
          } else if (this.type === 'toggle') {
            idx === clickedIndex && (item.open = !item.open);
          }
        });

        // 자동 스크롤
        this.$nextTick(() => {
          const header = document.getElementById(`accordion-head-${clickedIndex + 1}`);
          header?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>