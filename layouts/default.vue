<template>
  <main :class="{'isDesktop': this.$device.isDesktop, 'isMobile': this.$device.isMobile, 'isTablet': this.$device.isTablet,}">
    <Ui-header />
    <Nuxt v-if="!this.$store.state.preloading" />
    <Ui-footer v-if="!this.$store.state.preloading" />
  </main>
</template>
<style lang="postcss">
  main {
    @apply bg-black;
  }
</style>
<script>
  export default {
    methods: {
    },
    computed: {
    },
    methods: {
      enter() {
        console.log("Layout mounted !")
      },
    },
    mounted() {
      this.enter();
      this.$gsap.config({
        nullTargetWarn: false,
        trialWarn: false,
      })
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 2500)
      })
    }
  }
</script>
