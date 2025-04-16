<template>
  <section aria-labelledby="title2">
    <div class="border-b pb-4">
      <h2 id="title2" class="text-5xl font-medium" tabindex="0">Tabs</h2>
    </div>
    <div class="my-6">
      <p class="py-2">탭은 탭 패널이라고 하는 여러 겹의 콘텐츠 섹션으로 , 한 번에 하나의 콘텐츠 패널을 표시합니다. 각 탭 패널에는 연관된 탭 요소가 있으며, 이 탭 요소가 활성화되면 해당 패널이 표시됩니다. 탭 요소 목록은 현재 표시된 패널의 한쪽 가장자리, 특히 위쪽 가장자리를 따라 정렬됩니다 .</p>
      <p class="py-2">탭 인터페이스가 초기화되면 하나의 탭 패널이 표시되고, 연결된 탭은 활성화되었음을 나타내는 스타일이 지정됩니다. 사용자가 다른 탭 요소 중 하나를 활성화하면 이전에 표시되었던 탭 패널은 숨겨지고, 활성화된 탭과 연결된 탭 패널이 표시되며, 해당 탭은 "활성" 상태로 간주됩니다.</p>
    </div>
    <div class="comp-view">
      <h3 class="text-xl">Case 1. 자동 활성화 탭</h3>
      <p class="py-2">탭이 자동으로 활성화되고, 탭에 포커스가 주어지면 패널이 표시되는 탭 위젯이다.</p>
      <div class="my-6">
        <tabs :tab-items="tabItems"></tabs>
      </div>
    </div>
    <div class="comp-view">
      <h3 class="text-xl">Case 3. 동적 탭 컴포넌트</h3>
      <p class="py-2"><code class="p-1 bg-slate-100">component :is="..."</code> 문법을 사용하여 컴포넌트 동적 렌더링 </p>
      <div class="my-6">
        <tabs :tab-items="tabItems2">
          <!-- Tab Panel 2 -->
          <template #inner-2>
            <p class="mb-10">내부 탭 슬롯 2의 내용입니다.</p>
          </template>
        </tabs>
      </div>
    </div>
    <div class="comp-view">
      <h3 class="text-xl">Case 4. 중첩 탭</h3>
      <p class="py-2">각 슬롯은 고유 slotName으로 연결돼 있다.</p>
      <div class="my-6">
        <tabs :tab-items="tabItems3">
          <!-- Tab Panel 1 -->
          <template #outer-1>
            <p class="mb-10">외부 탭 슬롯 1의 내용입니다.</p>
            <!-- 중첩 탭(Nested Tabs) -->
            <tabs :tab-items="tabItems2">
              <template #inner-2>
                <p class="mb-10">내부 탭 슬롯 2의 내용입니다.</p>
              </template>
            </tabs>
          </template>
          <!-- Tab Panel 3 -->
          <template #outer-3>
            <p>외부 탭 슬롯 3의 내용입니다.</p>
          </template>
        </tabs>
      </div>
    </div>
  </section>
</template>

<script>
  import Tabs from '@/components/tabs/Tabs.vue';
  import TabCompo from '@/components/TabCompo.vue';

  export default {
    components: {
      Tabs,
    },
    data() {
      return {
        tabItems: [
          {
            id: 'tab-01',
            panelId: 'tab-panel-01',
            label: 'tab list 1',
            content: 'tab contents 1'
          },
          {
            id: 'tab-02',
            panelId: 'tab-panel-02',
            label: 'tab list 2',
            content: 'tab contents 2'
          },
          {
            id: 'tab-03',
            panelId: 'tab-panel-03',
            label: 'tab list 3',
            content: 'tab contents 3'
          },
        ],
        tabItems2: [
          {
            id: 'tab-11',
            panelId: 'tab-panel-11',
            label: 'tab list 11',
            content: 'tab contents 11'
          },
          {
            id: 'tab-12',
            panelId: 'tab-panel-12',
            label: 'tab list 12',
            content: 'tab contents 12',
            slotName: 'inner-2'   // 슬롯을 우선으로 표시
          },
          {
            id: 'tab-13',
            panelId: 'tab-panel-13',
            label: 'tab list 13',
            component: TabCompo,  // 동적 컴포넌트
          },
          {
            id: 'tab-14',
            panelId: 'tab-panel-14',
            label: 'tab list 14',
            content: 'tab contents 14'
          },
        ],
        tabItems3: [
          {
            id: 'tab-31',
            panelId: 'tab-panel-31',
            label: 'tab list 31',
            content: 'tab contents 31',
            slotName: 'outer-1'
          },
          {
            id: 'tab-32',
            panelId: 'tab-panel-32',
            label: 'tab list 32',
            content: 'tab contents 32',
          },
          {
            id: 'tab-33',
            panelId: 'tab-panel-33',
            label: 'tab list 33',
            content: 'tab contents 33',
            slotName: 'outer-3'
          },
        ]

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>