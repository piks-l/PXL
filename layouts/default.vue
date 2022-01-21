<template>
  <main :class="{'isDesktop': this.$device.isDesktop, 'isMobile': this.$device.isMobile, 'isTablet': this.$device.isTablet,}" class="main-theme">
    <Ui-header v-if="!this.$store.state.preloading" />
    <Nuxt v-if="!this.$store.state.preloading" />
    <Ui-footer v-if="!this.$store.state.preloading" />
  </main>
</template>
<style lang="postcss">
  .main-theme {
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
        setTimeout(() => this.$nuxt.$loading.finish(), 4900)
      })
    }
  }
</script>
