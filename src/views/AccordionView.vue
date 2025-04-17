<template>
  <section aria-labelledby="title2">
    <div class="border-b pb-4">
      <h2 id="title2" class="text-5xl font-medium" tabindex="0">Accordion</h2>
    </div>
    <div class="my-6">
      <p class="py-2">Accordion 코드 같은 경우에는 button의 aria-expanded와 연결된 panel div에 role=“region” 같은 기본적인 웹 접근성 마크업 규칙만 따라 주면 웹 접근성을 위해서 특별히 Script가 추가되어야 하는 부분은 따로 없다.</p>
      <dl class="terms-def">
        <dt>Accordion Header:</dt>
        <dd>콘텐츠 섹션을 나타내는 레이블 또는 썸네일로, 콘텐츠 섹션을 표시하거나 일부 구현에서는 숨기기 위한 컨트롤 역할을 한다.</dd>
        <dt>Accordion Panel:</dt>
        <dd>아코디언 헤더와 연관된 콘텐츠 섹션이다.</dd>
      </dl>
    </div>
    <div class="comp-view">
      <h3 class="text-xl">Case 1. toggle</h3>
      <p class="py-2">accordion-option="toggle"인 경우 아코디언 헤더 클릭시 아코디언 헤더와 연결된 콘텐츠 섹션만 열리거나 닫힌다. 기본 옵션이다.</p>
      <div class="my-6">
        <accordion-group :accordion-items="accordionItems" />
      </div>
    </div>
    <div class="comp-view">
      <h3 class="text-xl">Case 2. only</h3>
      <p class="py-2">accordion-option="only"인 경우 아코디언 헤더 클릭시 아코디언 헤더와 연결된 섹션만 열리고 기존에 열려 있던 콘텐츠 섹션은 무조건 닫힌다. 즉, 무조건 하나만 열린다.</p>
      <div class="my-6">
        <accordion-group :accordion-items="accordionItems2" />
      </div>
    </div>
  </section>
</template>

<script>
  import AccordionGroup from '@/components/accordion/AccordionGroup.vue';

  export default {
    components: {
      AccordionGroup,
    },
    data() {
      return {
        accordionItems: [
          {
            title: 'Accordion Head 1',
            content: 'Accordion contents 1 Accordion contents 1 Accordion contents 1 Accordion contents 1',
            open: true,
          },
          {
            title: 'Accordion Head 2',
            content: 'Accordion contents 2 Accordion contents 2 Accordion contents 2 Accordion contents 2',
            open: false,
          },
          {
            title: 'Accordion Head 3',
            content: 'Accordion contents 3 Accordion contents 3 Accordion contents 3 Accordion contents 3',
            open: false,
          },
          {
            title: 'Accordion Head 4',
            content: 'Accordion contents 4 Accordion contents 4 Accordion contents 4 Accordion contents 4',
            open: false,
          },
        ],
        accordionItems2: [
          {
            title: 'Accordion Head 1',
            content: 'Accordion contents 1 Accordion contents 1 Accordion contents 1 Accordion contents 1',
            open: true,
          },
          {
            title: 'Accordion Head 2',
            content: 'Accordion contents 2 Accordion contents 2 Accordion contents 2 Accordion contents 2',
            open: false,
          },
          {
            title: 'Accordion Head 3',
            content: 'Accordion contents 3 Accordion contents 3 Accordion contents 3 Accordion contents 3',
            open: false,
          },
        ]

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>