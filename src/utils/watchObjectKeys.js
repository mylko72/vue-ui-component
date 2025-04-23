export function watchObjectKeys(ctx, keyPath, callback) {
  let prev = {}
  const control = { ignore: false };

  const stop = ctx.$watch(
    keyPath,
    function (newVal) {
      if (control.ignore) return
      for (const key in newVal) {
        if (newVal[key] !== prev[key]) {
          callback(key, newVal[key])
        }
      }
      prev = { ...newVal }
    },
    { deep: true }
  )

  // 외부 제어용 인터페이스 리턴
  return {
    stop,   // 감시 종료
    ignore: (val) => {
      control.ignore = val
      val && (prev = {}); // 감시종료시(true) 초기화
    }  // true/false로 무시 여부 설정
  }
}
