<template>
  <div class="w-full">
    <div class="layer-popup-title" tabindex="0">
        <h1>타이틀</h1>
    </div>
    <div class="layer-popup-contents">
        <div class="inner">
            내용<br/>내용<br/>내용<br/>내용<br/><a href="javascript:;" class="text-sky-700">테스트테스트</a>내용<br/>내용<br/>내용<br/>내용<br/><a href="javascript:;" class="text-sky-700">테스트테스트</a>내용<br/>내용<br/>내용<br/>
            <input type="checkbox" id="checkbox" class="mr-1 checked:bg-blue-500" />
            <label for="checkbox" class="mr-4">
                <span>체크체크</span>
            </label>
            <button class="mr-2 px-3 py-1 rounded-lg text-sm border border-slate-400" aria-haspopup="dialog" data-popup="popup2"><span>2차 팝업 열기</span></button>
            <button class="mr-2 px-3 py-1 rounded-lg text-sm border border-slate-400" aria-haspopup="dialog" data-popup="popup4"><span>2차 컨펌 팝업 열기</span></button>
        </div>
    </div>
    <div class="layer-popup-bottom">
        <button :popup-close="popupId" popup-close-all="true">팝업 모두 닫기</button>
        <button :popup-close="popupId">현재 팝업 닫기</button>
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