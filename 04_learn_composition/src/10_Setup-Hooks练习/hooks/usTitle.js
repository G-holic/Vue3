import { ref, watch } from "vue";

export default function useTitle(titleValue) {
    // document.title = title

    // 定义ref的引用数据
    const title = ref(titleValue)

    // 监听title的改变
    watch(title, (newVlaue) => {
        document.title = newVlaue
        console.log(document.title)
    }, {
        immediate: true
    })
    // 返回ref值
    return title

    // return {title} // 返回对象，（home解需要{title}或者title.title解）
   
    
}