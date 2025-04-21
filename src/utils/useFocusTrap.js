export function useFocusTrap(modalRef) {
  const focusableSelectors = [
    'a[href]',
    'button:not([disabled])',
    'textarea',
    'input[type="text"]',
    'input[type="radio"]',
    'input[type="checkbox"]',
    'select',
    '[tabindex]:not([tabindex="-1"])',
  ]

  const trapFocus = (e) => {
    // const focusableEls = modalRef.value?.querySelectorAll(focusableSelectors.join(','));
    const focusableEls = modalRef?.querySelectorAll(focusableSelectors.join(','));
    if (!focusableEls?.length) return

    const first = focusableEls[0]
    const last = focusableEls[focusableEls.length - 1]

    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
  }

  const enableTrap = () => document.addEventListener('keydown', trapFocus)
  const disableTrap = () => document.removeEventListener('keydown', trapFocus)

  return { enableTrap, disableTrap }
}