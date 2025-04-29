<template>
  <section aria-labelledby="title2">
    <div class="border-b pb-4">
      <h2 id="title2" class="text-5xl font-medium" tabindex="0">Popup (Modal)</h2>
    </div>
    <div class="my-6">
      <p class="py-2">대화 상자는 기본 창 또는 다른 대화 상자 창에 겹쳐진 창입니다. 모달 대화 상자 아래의 창은 비활성 상태입니다. 즉, 사용자는 활성 대화 상자 창 외부의 콘텐츠와 상호 작용할 수 없습니다. 활성 대화 상자 외부의 비활성 콘텐츠는 일반적으로 시각적으로 가려지거나 흐리게 표시되어 식별하기 어렵고, 일부 구현에서는 비활성 콘텐츠와 상호 작용을 시도하면 대화 상자가 닫히기도 합니다.</p>
      <p class="py-2">모달이 아닌 대화 상자와 마찬가지로 모달 대화 상자에는 탭 순서가 포함됩니다. 즉, Tab 및 Shift + Tab은 대화 상자 외부로 포커스를 이동하지 않습니다. 그러나 대부분의 비 모달 대화 상자와 달리 모달 대화 상자는 대화 상자를 닫지 않고 키보드 포커스를 대화 상자 창 밖으로 이동할 수 있는 수단을 제공하지 않습니다.</p>
    </div>
    <div class="comp-view">
      <p class="py-2">탭이 자동으로 활성화되고, 탭에 포커스가 주어지면 패널이 표시되는 탭 위젯이다.</p>
      <div class="my-6 pl-4">
        <button class="modal-btn" @click="popupOpen('popup1')" aria-haspopup="dialog" data-popup="popup1">팝업 열기</button>
      </div>
      <div class="my-6 pl-4">
        <button class="modal-btn" @click="popupOpen('popup3')" aria-haspopup="dialog" data-popup="popup3">팝업 열기</button>
      </div>
      <Teleport to="body">
        <!-- 모달 -->
        <Popup
          v-for="id in modal.openedPopups"
          :modal-open="modal.isModalOpen[id]"
          @close="popupClose(id)"
          :popupId="id"
          :key="id"
          :style="{ zIndex: modal.getZIndex(id) }"
        >
          <template #contents>
            <component :is="popupComponentMap[id]" @open="popupOpen" @close="popupClose" @closeAll="popupCloseAll" :popupId="id" />
          </template>
        </Popup>
        <!-- dim -->
        <div
          v-if="modal.isDimOpen"
          class="popup-dimmed"
          :style="{ zIndex: modal.getDimZIndex() }"
        ></div>
      </Teleport>
    </div>
  </section>
</template>

<script>
  import { watchObjectKeys } from '@/utils/watchObjectKeys';
  import { modalManager } from '@/utils/modalManager';
  import Popup from '@/components/popup/Popup.vue';
  import ModalChild from '@/components/ModalChild.vue';
  import ModalChild2 from '@/components/ModalChild2.vue';
  import ModalChild3 from '@/components/ModalChild3.vue';
  import ModalChild4 from '@/components/ModalChild4.vue';

  export default {
    components: {
      Popup,
    },
    data() {
      return {
        currentId: null,
        lastFocusedElement: [],
        modal: modalManager(['popup1', 'popup2', 'popup3', 'popup4']),
        popupComponentMap: {
          popup1: ModalChild,
          popup2: ModalChild2,
          popup3: ModalChild3,
          popup4: ModalChild4,
        },
      }
    },
    mounted() {
      this.modal.initEscClose()
    },
    beforeUnmount() {
      this.modal.destroyEscClose()
    },
    created() {
      this.modalWatcher = watchObjectKeys(this, 'modal.isModalOpen', (key, value) => {
        if(this.currentId !== key) return false;
        console.log(`Vue2 - ${key} changed to`, value);
        if(value) {
          this.lastFocusedElement.push(document.activeElement);
        } else {
          this.currentId = this.modal.openedPopups[this.modal.openedPopups.length-1] || null;
          this.lastFocusedElement[this.lastFocusedElement.length-1].focus();
          this.lastFocusedElement.pop();
        }
      })
    },
    methods: {
      popupOpen(popupId) {
        this.modal.openModal(popupId)
        this.currentId = popupId;
      },
      popupClose(popupId) {
        this.modal.closeModal(popupId)
      },
      async popupCloseAll() {
        console.log('close all....');
        this.modalWatcher.ignore(true) // 감시 중단

        const lastElement = this.lastFocusedElement[0];

        await this.lastFocusedElement.slice().reverse().map((element) => {
          const popupId = element.dataset.popup;
          this.popupClose(popupId);
          this.lastFocusedElement.shift();
        });

        this.currentId = null;
        lastElement?.focus();

        this.modalWatcher.ignore(false) // 감시재개
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>