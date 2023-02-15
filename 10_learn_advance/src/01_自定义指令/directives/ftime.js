import dayjs from "dayjs"

export default function directiveFtime (app) {
  app.directive("ftime", {
    mounted (el, bindings) {
      // 1.获取时间，并且转化为毫秒
      let timeStamp = el.textContent
      // console.log(timeStamp)
      if (timeStamp.length === 10) {
        timeStamp = timeStamp * 1000
      }
      // console.log(timeStamp)
      timeStamp = Number(timeStamp)

      // 2.获取传入的参数
      let value = bindings.value
      if (!value) {
        value = "YYYY-MM-DD HH:mm:ss"
      }

      // 2.对时间进行格式化
      const formatTime = dayjs(timeStamp).format(value)
      el.textContent = formatTime
    }
  })
}