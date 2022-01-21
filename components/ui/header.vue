<template>
  <header>
    <Ui-logo class="logo-theme"/>
    <Ui-menu class="menu-theme"/>
  </header>
</template>
<style lang="postcss">
  header{
     @apply bg-white;
  }
  .logo-theme{
     @apply bg-black;
  }
  .menu-theme{
     @apply bg-white;
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
