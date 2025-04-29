import { reactive, computed } from 'vue-demi' // <--- Vue 2/3 겸용 패키지 사용

export function modalManager(modalKeys = [], options = {}) {
  const baseZIndex = options.baseZIndex || 1000

  // 반응형 모달 상태 객체 (Vue 2에서는 Vue.observable로 감싸도 OK)
  const isModalOpen = reactive(
    modalKeys.reduce((acc, key) => {
      acc[key] = false
      return acc
    }, {})
  )

  // 현재 열린 모달 순서대로 얻기 ex) ['popup1', 'popup3'...]
  const openedPopups = computed(() => {
    return Object.entries(isModalOpen)
      .filter(([_, v]) => v)
      .map(([k]) => k)
  })

  // 딤 플래그 변수
  const isDimOpen = computed(() => openedPopups.value.length > 0)

  const getZIndex = (popupId) => {
    if(!openedPopups.value.length) return;
    const index = openedPopups.value.indexOf(popupId)
    console.log('index', index);
    if(index === openedPopups.value.length-1) return baseZIndex + openedPopups.value.length
    return getZIndexForPopup(popupId)
  }

  // z-index 동적 계산
  const getZIndexForPopup = (popupId) => {
    const index = openedPopups.value.indexOf(popupId)
    console.log('index', index)
    return index === -1 ? 0 : baseZIndex + index
  }

  // 딤 z-index 동적 계산
  const getDimZIndex = () => {
    const count = openedPopups.value.length
    return count > 0 ? baseZIndex + count - 1 : 0
  }

  const openModal = (id) => {
    if (id in isModalOpen) isModalOpen[id] = true
    console.log('isModalOpen', isModalOpen);
  }

  const closeModal = (id) => {
    if (id in isModalOpen) isModalOpen[id] = false
  }

  // 최상위 모달 닫기
  const closeTopModal = () => {
    const list = openedPopups.value
    const top = list[list.length - 1]
    if (top) closeModal(top)
  }

  let _escHandlerBound = false

  const handleEscKey = (e) => {
    if (e.key === 'Escape') {
      closeTopModal()
    }
  }

  // ESC 키 감지 후 최상위 모달 닫기
  const initEscClose = () => {
    if (!_escHandlerBound) {
      window.addEventListener('keydown', handleEscKey)
      _escHandlerBound = true
    }
  }

  const destroyEscClose = () => {
    if (_escHandlerBound) {
      window.removeEventListener('keydown', handleEscKey)
      _escHandlerBound = false
    }
  }

  return {
    isModalOpen,
    openModal,
    closeModal,
    closeTopModal,
    openedPopups,
    getZIndex,
    getZIndexForPopup,
    getDimZIndex,
    isDimOpen,
    initEscClose,
    destroyEscClose,
  }

}