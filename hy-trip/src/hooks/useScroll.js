// 监听window窗口的滚动
// 1.当我们离开页面时，我们移除监听
// 2.如果别的页面也进行类似的监听，会编写重复代码
import { onMounted, onUnmounted, ref } from "vue";
import { throttle } from 'underscore'


// 第一种方法
// export default function useScroll(reachBottomCB) {
//     const scrollListenerHandler = () => {
//         const scrollTop = document.documentElement.scrollTop; // 滚动的高度（一直在变化，直到底部）
//         const clientHeight = document.documentElement.clientHeight; // 客户端高度
//         const scrollHeight = document.documentElement.scrollHeight; //总高度
//         console.log("------")
//         if (clientHeight + scrollTop >= scrollHeight) {
//             console.log("滚动到底部了")
//             // 有值时再回调
//             if(reachBottomCB) reachBottomCB()
//         }
//     };
//     onMounted(() => {
//         window.addEventListener("scroll", scrollListenerHandler);
//     });


//     // 离开页面时，移除监听(卸载)
//     onUnmounted(() => {
//         window.removeEventListener("scroll", scrollListenerHandler);
//     });
// }

// 第二种方法
export default function useScroll (elRef) {
  let el = window

  const isReachBottom = ref(false)
  const scrollTop = ref(0)
  const clientHeight = ref(0)
  const scrollHeight = ref(0)

  // 防抖/节流
  const scrollListenerHandler = throttle(() => {
    // console.log("正在进行滚动。。。 ")

    if (el === window) {
      scrollTop.value = document.documentElement.scrollTop; // 滚动的高度（一直在变化，直到底部）
      clientHeight.value = document.documentElement.clientHeight; // 客户端高度
      scrollHeight.value = document.documentElement.scrollHeight; //总高度
    } else {
      clientHeight.value = el.clientHeight
      scrollTop.value = el.scrollTop
      scrollHeight.value = el.scrollHeight
      // console.log(scrollTop.value)

      // console.log(clientHeight.value, scrollTop.value, scrollHeight.value)
    }
    // console.log("监听到滚动~")
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      console.log("滚动到底部了")
      isReachBottom.value = true
    }
  }, 100);
  onMounted(() => {
    if (elRef) {
      el = elRef.value
    }
    el.addEventListener("scroll", scrollListenerHandler);
  });


  // 离开页面时，移除监听(卸载)
  onUnmounted(() => {
    el.removeEventListener("scroll", scrollListenerHandler);
  });

  return { isReachBottom, scrollTop, clientHeight, scrollHeight } // 对象返回对顺序没要求，但是数组返回有
}