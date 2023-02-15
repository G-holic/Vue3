<template>
  <div class="product">
    <h2>{{ title }}</h2>
    <p>我是商品描述，9.9秒杀</p>
    <h2>价格: {{ price }}</h2>
  </div>
</template>

<script>
export default{
  data(){
    return {
      title: "我也是标题",
      price: 9.9
    }
  }
}
</script>

<style>
  .product{
    background-color: orange;
  }
</style>