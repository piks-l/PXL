<template>
  <header>
    <Ui-logo class="logo-theme"/>
    <Ui-menu class="menu-theme"/>
  </header>
</template>
<style lang="postcss">
  header{
     @apply bg-green;
  }
  .logo-theme{
     @apply bg-red;
  }
  .menu-theme{
     @apply bg-blue;
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
