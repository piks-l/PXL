<template>
    <svg class="lightEffect" width="500px" height="500px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <filter id="light">
        <!-- blur the source image to make bump map less sharp -->
        <feGaussianBlur stdDeviation="10" result="blurred"></feGaussianBlur>
        <!-- Bum to alpha channel -->
        <feColorMatrix in="blurred" type="luminanceToAlpha" result="bumpMap"></feColorMatrix>
        <!-- Bumpmap lighting -->
        <feDiffuseLighting in="bumpMap" surfaceScale="1" result="light">
          <fePointLight x="0" y="0" z="20"></fePointLight>
        </feDiffuseLighting>
        <!-- compose the lighting result with source image using multiplication -->
        <feComposite in="light" in2="SourceGraphic" operator="arithmetic" k1="0" k2="1" k3="0" k4="0"></feComposite>
      </filter>
      <pattern id="pattern1" width="100%" height="100%" patternUnits="userSpaceOnUse">
        <image xlink:href="https://f4.bcbits.com/img/a3120177049_10.jpg" width="100%"></image>
      </pattern>
      <rect width="100%" height="100%" fill="url(#pattern1)" filter="url(#light)"></rect>
    </svg>
</template>
<style lang="postcss">

  .lightEffect{
    @apply fixed saturate-0 top-0 left-0 w-screen h-screen;
  }

</style>
<script>
export default {
  methods: {
    initMouseEffect() {
      // Effect
      const svgNode = document.querySelector('.lightEffect');
      const fePointLightNode = svgNode.querySelector('fePointLight');
      svgNode.addEventListener('mousemove', handleMove);
      svgNode.addEventListener('touchmove', handleMove);
      function handleMove(event) {
        fePointLightNode.setAttribute('x', event.clientX);
        fePointLightNode.setAttribute('y', (event.clientY));
      }
    },
  },
  mounted() {
    this.initMouseEffect();
  }
}
</script>
