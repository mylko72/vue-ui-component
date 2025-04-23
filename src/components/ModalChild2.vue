<template>
  <div class="w-full">
    <div class="layer-popup-title" tabindex="0">
        <h1>타이틀22</h1>
    </div>
    <div class="layer-popup-contents">
      <div class="inner">
          내용<br/><a href="javascript:;" class="text-sky-700">테스트테스트</a>내용<br/>내용<br/><a href="javascript:;" class="text-sky-700">테스트테스트</a>내용<br/>내용<br/>
          <button
            class="mr-2 px-3 py-1 rounded-lg text-sm border border-slate-400"
            @click="popupOpen('popup3')"
            aria-haspopup="dialog"
            data-popup="popup3">
              3차 팝업 열기
          </button>
      </div>
    </div>
    <div class="layer-popup-bottom">
        <button :popup-close="popupId" @click="$emit('close', popupId)">현재 팝업 닫기</button>
        <button :popup-close="popupId" popup-close-all="true" @click="$emit('closeAll')">팝업 모두 닫기</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      popupId: String
    },
    methods: {
      popupOpen(popupId) {
        this.$emit('open', popupId);
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>
