<template>
  <div class="w-full">
    <div class="layer-popup-title" tabindex="0">
        <h1>컴펌팝업</h1>
    </div>
    <div class="layer-popup-contents">
      <div class="inner">
        내용4444<a href="javascript:;" class="text-sky-700">테스트테스트</a>내용내용내용<a href="javascript:;" class="text-sky-700">테스트테스트</a>내용내용내용내용내용내용내용내용내용내용내용내용
        <button
          popup-close="popup4"
          popup-close-all="true"
          @click="$emit('closeAll')"
        >
          팝업 모두 닫기
        </button>
      </div>
    </div>
    <div class="layer-popup-bottom">
      <button :popup-close="popupId" :popup-confirm="popupId" @click="$emit('close', popupId)"><span>컨펌확인</span></button>
      <button :popup-close="popupId" :popup-cancle="popupId" @click="$emit('close', popupId)"><span>컨펌취소</span></button>
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
