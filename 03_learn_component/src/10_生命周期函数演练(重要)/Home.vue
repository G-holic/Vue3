<template>
  <h2>Home</h2>
</template>

<script>
export default {
    beforeUnmount(){
        console.log("Home beforeUnmount")
    },
    unmounted(){
        console.log("Home unmounted")
    }
}
</script>

<style>

</style>