<template>
    <NuxtLink to="/" class="logo">
      Saåad
    </NuxtLink>
</template>
<style lang="postcss">
  .logo {
     @apply font-garamond text-[25px] leading-[100px];
  }
</style>
<script>
export default {
  methods: {
    scrollLogo() {
      let limitBottom = document.documentElement.offsetHeight - window.innerHeight;
      let GSAP = this.$gsap;

      window.addEventListener("scroll",function(){
        if(document.documentElement.scrollTop === 0){
          GSAP.to('.logo', {fontSize: "100px", duration: 1, delay:0 ,ease: 'power2'})
        }
        if(document.documentElement.scrollTop > 50 && document.documentElement.scrollTop < 60 ){
          GSAP.to('.logo', {fontSize: "25px", duration: 1, delay:0 ,ease: 'power2'})
        }
        if(document.documentElement.scrollTop > (limitBottom - 100) && document.documentElement.scrollTop < (limitBottom - 50) ){
          GSAP.to('.logo', {fontSize: "25px", duration: 1, delay:0 ,ease: 'power2'})
        }
        if(document.documentElement.scrollTop === limitBottom){
          GSAP.to('.logo', {fontSize: "25px", duration: 1, delay:0, ease: 'power2'})
        }
      })

    },
  },
  created() {
  },
  mounted() {
    this.scrollLogo();
    if(this.$store.state.preloading === false) {
      //console.log("IORE 1")
    } else {
      //console.log("IORE 2")
    }
  }
}
</script>
