<template>
  <section>
    <div class="border-b pb-4">
      <h2 class="text-5xl font-medium" tabindex="0">Tabs</h2>
    </div>
    <div class="my-6">
      <p class="py-2">탭은 탭 패널이라고 하는 여러 겹의 콘텐츠 섹션으로 , 한 번에 하나의 콘텐츠 패널을 표시합니다. 각 탭 패널에는 연관된 탭 요소가 있으며, 이 탭 요소가 활성화되면 해당 패널이 표시됩니다. 탭 요소 목록은 현재 표시된 패널의 한쪽 가장자리, 특히 위쪽 가장자리를 따라 정렬됩니다 .</p>
      <p class="py-2">탭 인터페이스가 초기화되면 하나의 탭 패널이 표시되고, 연결된 탭은 활성화되었음을 나타내는 스타일이 지정됩니다. 사용자가 다른 탭 요소 중 하나를 활성화하면 이전에 표시되었던 탭 패널은 숨겨지고, 활성화된 탭과 연결된 탭 패널이 표시되며, 해당 탭은 "활성" 상태로 간주됩니다.</p>
    </div>
    <div class="my-6">
      <h3 class="text-xl">Case 1. 자동 활성화 탭</h3>
      <p class="py-2">탭이 자동으로 활성화되고, 탭에 포커스가 주어지면 패널이 표시되는 탭 위젯이다.</p>
    </div>
    <div clss="my-6">
      <tab-list :tab-items="tabItems"></tab-list>
    </div>
  </section>
</template>

<script>
  import TabList from '@/components/tabs/TabList.vue';

  export default {
    components: {
      TabList
    },
    data() {
      return {
        tabItems: [
          {
            tab: 'tab list 1',
            content: 'tab contents 1'
          },
          {
            tab: 'tab list 2',
            content: 'tab contents 2'
          },
          {
            tab: 'tab list 3',
            content: 'tab contents 3'
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>