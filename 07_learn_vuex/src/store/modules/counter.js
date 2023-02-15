
const counter = {
    namespaced:true, // 有自己的命名空间 （用了该参数后，getters将无法通过$store.getters.doubleCount直接获取）
    state:()=>({
        count: 99
    }),
    mutations:{
        incrementCount(state){
            // console.log(state)
            state.count++
        }
    },
    getters:{
        doubleCount(state, getters, rootState){
            return state.count + rootState.rootCounter
        }
    },
    actions:{
        incrementCountAction(context) {
            context.commit("incrementCount")
          }
    }
}

export default counter