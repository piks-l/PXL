<template>
  <header class="headerDemi headerFull">
    <svg class="lightEffect" width="100vw" height="50vw" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <filter id="light">
        <!-- blur the source image to make bump map less sharp -->
        <feGaussianBlur stdDeviation="2" result="blurred"></feGaussianBlur>
        <!-- create bump map based on alpha channel -->
        <feColorMatrix in="blurred" type="luminanceToAlpha" result="bumpMap"></feColorMatrix>
        <!-- use bump map for lighting filter -->
        <feDiffuseLighting in="bumpMap" surfaceScale="2" result="light">
          <fePointLight x="50%" y="50%" z="30"></fePointLight>
        </feDiffuseLighting>
        <!-- compose the lighting result with source image using multiplication -->
        <feComposite in="light" in2="SourceGraphic"
          operator="arithmetic"
          k1="1" k2="0" k3="0" k4="0">
        </feComposite>
      </filter>
      <pattern id="pattern1" width="100%" height="100%" patternUnits="userSpaceOnUse">
        <image xlink:href="https://f4.bcbits.com/img/a1109693060_10.jpg" width="100vw"></image>
      </pattern>
      <rect width="100vw" height="100vh" fill="url(#pattern1)" filter="url(#light)"></rect>
    </svg>
    <Ui-logo class="logo-theme" />
    <Ui-menu class="menu-theme" />

  </header>
</template>
<style lang="postcss">
  header{
     @apply bg-black fixed top-0 left-0 w-screen h-screen flex justify-center items-center px-20 overflow-hidden border-b-[1px] border-white z-[100] transform transition-all duration-1000;
  }
  .lightEffect{
    @apply absolute saturate-0;
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
      // Effect
      const svgNode = document.querySelector('.lightEffect');
      const fePointLightNode = svgNode.querySelector('fePointLight');
      svgNode.addEventListener('mousemove', handleMove);
      svgNode.addEventListener('touchmove', handleMove);
      function handleMove(event) {
        fePointLightNode.setAttribute('x', event.clientX);
        fePointLightNode.setAttribute('y', (event.clientY * 2));
      }
      // Calc
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
