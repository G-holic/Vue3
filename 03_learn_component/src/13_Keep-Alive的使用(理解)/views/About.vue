<template>
  <h2>About组件</h2>
</template>

<script>
export default {
  // keep-alive里的include 要对应每个组件的name
  name:"about",
  unmounted(){
    console.log("about unmounted")
  }
}
</script>

<style>

</style>