<template>
    <NuxtLink to="/" class="logo">
      Saåad
    </NuxtLink>
</template>
<style lang="postcss">
  .logo {
     @apply font-garamond text-2xl leading-[100px];
  }
</style>
<script>
export default {
  methods: {

  },
  created() {
  },
  mounted() {
    if(this.$store.state.preloading === false) {
      //console.log("IORE 1")
    } else {
      //console.log("IORE 2")
    }
  }
}
</script>
