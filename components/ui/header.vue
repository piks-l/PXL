<template>
  <header>
    <Ui-logo class="logo-theme" />
    <Ui-menu class="menu-theme" />
  </header>
</template>
<style lang="postcss">
  header{
     @apply bg-black fixed top-0 left-0 w-screen h-screen flex justify-center items-center px-20 overflow-hidden border-b-[1px] border-white z-[100];
  }
  .logo-theme{
     @apply text-white relative ;
  }
  .menu-theme{
     @apply text-white absolute ;
  }

  .menu-theme {
    right: 5rem;
  }
</style>
<script>
export default {
  methods: {
    scrollHeader() {
      let limitBottom = document.documentElement.offsetHeight - window.innerHeight;
      let GSAP = this.$gsap;

      window.addEventListener("scroll",function(){
        if(document.documentElement.scrollTop === 0){
          console.log('top = ', document.documentElement.scrollTop , '/', limitBottom)
          GSAP.to('header', {height: "50vh", duration: 1, delay:0 ,ease: 'power2'})
          GSAP.to('.logo', {left: "0%", x: "0%", duration: 1, delay:0 , transformOrigin:"0% 100%" , ease: 'power2'})
        } else if (document.documentElement.scrollTop > 50 && document.documentElement.scrollTop < (limitBottom - 50) ){
          console.log('mid = ', document.documentElement.scrollTop , '/', limitBottom)
          GSAP.to('header', {height: "100px", duration: 1, delay:0 ,ease: 'power2'})
          GSAP.to('.logo', {left: "-50%", x: "50%", duration: 1, delay:0 , transformOrigin:"0% 100%" , ease: 'power2'})
        }
        if(document.documentElement.scrollTop === limitBottom){
          console.log('bot = ', document.documentElement.scrollTop , '/', limitBottom)
          GSAP.to('header', {height: "0vh", duration: 1, delay:0, ease: 'power2'})
        }
      })

    },
  },
  mounted() {
    this.scrollHeader();
    
    if(this.$store.state.preloading === false) {
      //console.log("Page not loaded")
    } else {
      //console.log("Page loaded")
    }
  }
}
</script>
