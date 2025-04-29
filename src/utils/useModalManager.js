export const getKeysFromObj = (obj) => {
  return Object.entries(obj)
    .filter(([_, v]) => v)
    .map(([k]) => k)
}

export function useModalManager(modalOpen, openedPopups) {

  let baseZIndex = 1000;

  const handleEscKey = (e) => {
    if (e.key === 'Escape') {
      closeTopModal(openedPopups);
    }
  };

  const closeTopModal = (openedPopups) => {
    const openKeys = openedPopups
    if (!openKeys.length) return

    const topPopupId = openKeys[openKeys.length - 1]
    this.popupClose(topPopupId);
  }

  const open = (popupId) => {
    console.log('popupId', popupId);
    modalOpen[popupId] = true;
  }

  const close = (popupId) => {
    console.log('popupId2', popupId);
    modalOpen[popupId] = false;
  }

  const closeAll = async (lastFocusedElement) => {
    console.log('close all....');


    const lastElement = lastFocusedElement[0];

    const cloneFocusedElement = await lastFocusedElement.slice().reverse().map((element) => {
      const popupId = element.dataset.popup;
      close(popupId);
      lastFocusedElement.shift();
    });

    lastElement?.focus();
    console.log('cloneFocusedElement', cloneFocusedElement);

    return cloneFocusedElement
  };

  const modalZIndex = (openedPopups) => {
    return baseZIndex + openedPopups.length
  };

  const dimOpen = (openedPopups) => {
    return openedPopups.length > 0
  };

  const revZIndex = (popupId) => {
    if(!openedPopups.length) return;
    const index = openedPopups.indexOf(popupId)
    console.log('index', index);
    if(index === openedPopups.length-1) return { zIndex: modalZIndex(openedPopups) }
    return { zIndex: revZIndexForPopup(popupId) }
  };

  const revZIndexForPopup = (popupId) => {
    const index = openedPopups.indexOf(popupId)
    if (index === -1) return 0 // 닫힌 상태
    return baseZIndex + index // 순서대로 1001, 1002, ...
  };

  const revDimZIndex = () => {
    const count = openedPopups.length
    if (count === 0) return 0
    return baseZIndex + count - 1 // 딤은 최상위 모달 바로 아래
  }

  const enableEscKey = () => window.addEventListener('keydown', handleEscKey);
  const disableEscKey = () => window.removeEventListener('keydown', handleEscKey);


  return {
    enableEscKey,
    disableEscKey,
    getKeysFromObj,
    open,
    close,
    closeAll,
    revZIndex,
    revDimZIndex,
    modalZIndex,
    dimOpen,
  }

}