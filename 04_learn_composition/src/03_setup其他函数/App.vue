<template>
  <div>
    <h2>app: {{ info }}</h2>
    <show-info
      :info="info"
      :roInfo="roInfo"
      @changeInfo="changeInfo"
      @changeRoInfo="changeRoInfo"
    />
  </div>
</template>

<script>
import ShowInfo from "./ShowInfo.vue";
import { reactive, readonly } from "vue";
export default {
  components: {
    ShowInfo,
  },
  setup() {
    const info = reactive({
      name: "李四",
      age: 18,
      height: 1.88,
    });

    function changeInfo(payload) {
      info.name = payload;
    }

    // 使用readonly包裹info
    const roInfo = readonly(info);
    // roInfo对象不可以修改，但是我们可以修改info对象的值
    function changeRoInfo(payload) {
      info.name = payload;
    }
    return {
      info,
      changeInfo,
      roInfo,
      changeRoInfo,
    };
  },
};
</script>

<style>
</style>