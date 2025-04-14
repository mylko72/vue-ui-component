<template>
  <section>
    <h3 class="text-2xl font-semibold">Tab Button</h3>
    <div class="mt-2">
      <ol class="list-decimal pl-5 text-base">
        <li>role=“tab” 으로 버튼이 tab button임을 명시해준다.</li>
        <li>aria-selected 값으로 해당 버튼이 선택 된 상태인지 아닌지 명시해준다.</li>
        <li>tab button 과 연결 될 tabpanel div id를 aria-controls=“tabpanel div id” 로 연결하여 두 컨텐츠가 연관관계에 있다는 것을 알려준다.</li>
        <li>선택 되지 않은 버튼의 tabindex 값을 -1로 설정하여 키보드 탭으로 접근이 되지 않게 해준다. (tab button 의 키보드 접근은 키보드 화살표로 가능)</li>
      </ol>
    </div>
  </section>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>

</style>