<template>
  <div>
    <form>
      帐号: <input type="text" v-model="account.username" /> 密码:
      <input type="password" v-model="account.password" />
    </form>
    <form>
      帐号: <input type="text" v-model="username" /> 密码:
      <input type="password" v-model="password" />
    </form>
    <hr />
    <h2>{{ musics }}</h2>
    <hr />
    <show-info :name="name" :age="age" />
  </div>
</template>

<script>
import ShowInfo from "./ShowInfo.vue";
import { onMounted, ref, reactive } from "vue";
export default {
  components: {
    ShowInfo,
  },
  data() {
    return {
      message: "Hello World",
    };
  },
  setup() {
    // 定义响应式数据: reactive/ref(实际使用多)
    // 强调: ref也可以定义复杂的数据
    const info = ref({});
    console.log(info.value);

    // 1.reactive的应用场景
    // 1.1.条件一: reactive应用于本地的数据
    // 1.2.条件二: 多个数据之间是有关系/联系（聚合的数据，组织在一起会有特定的作用）
    const account = reactive({
      username: "李四",
      password: "1234",
    });

    // ref啰嗦
    // const username = ref("张三");
    // const password = ref("123456");

    // 2.ref的应用场景: 其他的场景基本都用ref(computed)
    // 2.1. 定义本地的一些简单数据
    const message = ref("hello world");
    const counter = ref(0);

    const name = ref("李四");
    const age = ref(18);

    // 2.2. 定义从网络中获取的数据也是使用ref
    // const musics = reactive([]) // 不建议
    const musics = ref([]);
    onMounted(() => {
      const serverMusics = ["海阔天空", "小苹果", "野狼disco"];
      musics.value = serverMusics;
    });

    return {
      account,
      username,
      password,
      musics,
      name,
      age,
    };
  },
};
</script>

<style>
</style>