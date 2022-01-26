<template>
  <footer>
    Im the footer
  </footer>
</template>
<style lang="postcss">
  footer{
     @apply bg-white h-[50vh];
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
