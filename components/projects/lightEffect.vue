<template>
    <svg class="lightEffect" width="500px" height="500px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <filter id="light">
        <!-- blur the source image to make bump map less sharp -->
        <feGaussianBlur stdDeviation="3" result="blurred"></feGaussianBlur>
        <!-- Bum to alpha channel -->
        <feColorMatrix in="blurred" type="luminanceToAlpha" result="bumpMap"></feColorMatrix>
        <!-- Bumpmap lighting -->
        <feDiffuseLighting in="bumpMap" surfaceScale="5" result="light">
          <fePointLight x="50" y="50" z="20"></fePointLight>
        </feDiffuseLighting>
        <!-- compose the lighting result with source image using multiplication -->
        <feComposite in="light" in2="SourceGraphic" operator="arithmetic" k1="1" k2="0" k3="0" k4="0"></feComposite>
      </filter>
      <pattern id="pattern1" width="100%" height="100%" patternUnits="userSpaceOnUse">
        <image xlink:href="https://f4.bcbits.com/img/a3120177049_10.jpg" width="100%"></image>
      </pattern>
      <rect width="100%" height="100%" fill="url(#pattern1)" filter="url(#light)"></rect>
    </svg>
</template>
<style lang="postcss">

  .lightEffect{
    @apply relative w-screen h-screen;
  }

</style>
<script>
export default {
  methods: {
    initMouseEffect() {
      this.$gsap.to("fePointLight", {
        attr: { 
          x: window.innerWidth/2,
          y: window.innerHeight/2
        },
        delay: 0, 
        duration:0
      });
      this.$gsap.to("fePointLight",60, {
        attr: { z: 100 },
        repeat: -1,
        yoyo: true
      });

    },
  },
  mounted() {
    this.initMouseEffect();
  }
}
</script>
