import { ref, onMounted } from "vue"
export default function useInput () {
  const intputRef = ref()

  onMounted(() => {
    intputRef.value?.focus() // 获取焦点
  })

  return { intputRef }
}