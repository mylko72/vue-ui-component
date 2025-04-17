<template>
  <div class="ui-accordion-group" data-role="accordion-group" accordion-option="toggle">
    <accordion-item
      v-for="(item, index) in accordionItems"
      :key="index"
      :title="item.title"
      :index="index"
      :model-value="item.open"
      @update:modelValue="(val) => updateOpen(index, val)"
      @toggle="handleToggle"
    >
      {{ item.content }}
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
      }
    },
    methods: {
      handleToggle(clickedIndex) {
        this.accordionItems.forEach((item, idx) => {
          item.open = idx === clickedIndex ? !item.open : false;
        });

        // 자동 스크롤
        this.$nextTick(() => {
          const header = document.getElementById(`accordion-head-${clickedIndex + 1}`);
          header?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      },
      updateOpen(index, value) {
        this.props.accordionItems[index].open = value;
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>