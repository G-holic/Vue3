export default function directiveFocus (app) {
  app.directive("focus", { // 全局指令
    // 生命周期函数（自定义指令）
    mounted (el) {
      el?.focus()
    }
  })
}