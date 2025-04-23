<template>
  <div class="w-full">
    <div class="layer-popup-title" tabindex="0">
        <h1>타이틀3333</h1>
    </div>
    <div class="layer-popup-contents">
      <div class="inner">
        내용3333<a href="javascript:;" class="text-sky-700">테스트테스트</a>내용내용내용<a href="javascript:;" class="text-sky-700">테스트테스트</a>내용내용내용내용내용내용내용내용내용내용내용내용
      </div>
    </div>
    <div class="layer-popup-bottom">
      <button :popup-close="popupId" @click="$emit('close', popupId)"><span>현재 팝업 닫기</span></button>
      <button :popup-close="popupId" popup-close-all="true" @click="$emit('closeAll')">팝업 모두 닫기</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      popupId: String
    }
  }
</script>

<style lang="scss" scoped>

</style>
