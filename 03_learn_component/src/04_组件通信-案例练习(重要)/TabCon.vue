<template>
  <div class="tab-con">
    <template v-for="(item, index) in titles" :key="item">
      <div class="tab-con-ope" :class="{active: index === currentIndex
      }" @click="tabClick(index)">
      <span>  {{ item }}</span>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default: () => [],
    },
  },
  data(){
    return{
        currentIndex: 0
    }
  },
  emits:["tabItemClick"],
  methods: {
    tabClick(index){
        this.currentIndex = index
        this.$emit("tabItemClick", index)
    }
  }
};
</script>

<style scoped>
.tab-con {
  display: flex;
  text-align: center;
  line-height: 44px;
}
.tab-con-ope {
  flex: 1;
}
.tab-con-ope.active {
    color: red;
}
.tab-con-ope.active span{
    border-bottom: 3px solid red;
    padding: 8px
}
</style>