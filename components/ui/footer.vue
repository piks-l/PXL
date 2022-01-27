<template>
  <footer class="Noise">
    <p>Im the footer</p>
  </footer>
</template>
<style lang="postcss">
  footer{
     @apply h-[50vh] w-screen text-white flex align-middle items-center justify-center absolute overflow-hidden;
  }
</style>
<script>
export default {
  mounted() {
    if(this.$store.state.preloading === false) {
      //console.log("Page not loaded")
    } else {
      //console.log("Page loaded")
    }
  }
}
</script>
