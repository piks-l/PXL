<template>
  <header class="headerDemi headerFull Noise">
    <Ui-logo class="logo-theme" />
    <Ui-menu class="menu-theme" />
  </header>
</template>
<style lang="postcss">
  header{
     @apply bg-black fixed top-0 left-0 w-screen h-screen flex justify-center items-center px-20 overflow-hidden border-b-[1px] border-white z-[100] transform transition-all duration-1000;
  }
  .logo-theme{
     @apply text-white relative left-0 translate-x-0 transform transition-all duration-1000 font-garamond leading-[100px] text-[25px];
  }
  .menu-theme{
     @apply text-white absolute right-[5rem];
  }
  .headerMini{
    height:100px!important;
  }
  .headerDemi{
    height:50vh;
  }
  .headerFull{
    height:100vh;
  }
  .logoMini{
    left: -50%!important;
    transform:translateX(50%)!important;
  }
  .logoMini .char{
    font-size:25px!important;
  }
</style>
<script>
export default {
  methods: {
    animateOnScroll() {
      let realHeight = (window.innerHeight / 2) - 100;
      let calc = 'bottom-='+realHeight+' bottom'
      // Header
      this.$ScrollTrigger.create({
        start: 'top top', 
        end: calc, 
        markers: false, 
        toggleClass: {
          className: 'headerMini', 
          targets: 'header'
        }
      });
      // Logo
      this.$ScrollTrigger.create({
        start: 'top top', 
        end: calc, 
        markers: false, 
        toggleClass: {
          className: 'logoMini', 
          targets: '.logo-theme'
        }
      });
    },
  },
  mounted() {
    this.animateOnScroll();
  }
}
</script>
