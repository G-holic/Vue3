

<script>
import { h } from 'vue'
export default {
  render () {
    // className和class都可以
    return h("div", { className: "app" }, [
      h("h2", { class: "title" }, "我是标题"),
      h("P", { class: "content" }, "我是内容，哈哈哈"),
    ])
  }
}
</script>

<style scoped>
</style>