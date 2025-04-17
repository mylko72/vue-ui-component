<template>
  <div class="accordion-item">
    <button
      aria-level="2"
      class="accordion-btn"
      :id="headerId"
      :aria-expanded="modelValue.toString()"
      :aria-controls="contentId"
      @click="handleClick">
        <span>{{ title }}</span>
        <AkChevronDown class="ic-arrow" :class="{ open: modelValue }" />
    </button>
    <div
      ref="content"
      class="ui-accordion-contents"
      :id="contentId"
      role="region"
      :aria-labelledby="headerId"
      :hidden="!visible"
      @transitionend="onTransitionEnd"
    >
      <div class="inner-accordion-contents">
          <slot />
      </div>
    </div>
  </div>
</template>

<script>
  import { AkChevronDown } from '@kalimahapps/vue-icons';
  export default {
    name: 'AccordionItem',
    components: {
      AkChevronDown
    },
    props: {
      title: String,
      modelValue: Boolean,
      index: Number,
    },
    emits: ['toggle'],
    data() {
      return {
        transitioning: false,
        visible: this.modelValue,
        headerId: `accordion-head-${this.$.uid}`,
        contentId: `accordion-content-${this.$.uid}`,
      };
    },
    watch: {
      modelValue(newVal) {
        newVal ? this.open() : this.close();
      },
    },
    mounted() {
      if (this.modelValue) {
        this.visible = true;
      }
    },
    methods: {
      handleClick() {
        this.$emit('toggle', this.index);
      },
      open() {
        const el = this.$refs.content;
        this.visible = true;
        this.transitioning = true;

        requestAnimationFrame(() => {
          el.style.height = '0px';
          el.style.transition = 'height 0.3s ease';
          el.style.height = el.scrollHeight + 'px';
        });
      },
      close() {
        const el = this.$refs.content;
        this.transitioning = true;

        el.style.height = el.scrollHeight + 'px';
        el.style.transition = 'height 0.3s ease';

        requestAnimationFrame(() => {
          el.style.height = '0px';
        });
      },
      onTransitionEnd() {
        const el = this.$refs.content;

        el.style.transition = '';
        el.style.height = '';

        if (!this.modelValue) {
          this.visible = false;
        }

        this.transitioning = false;
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>