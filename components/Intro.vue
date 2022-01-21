<template>
  <section class="intro">

      <h1 class="text-white w-full font-title text-[0.2em] leading-[50px] md:text-[0.3em] md:leading-[50px] lg:text-[0.8em] lg:leading-[1em]">ELECTRO<br>ALTERNATIV</h1>

  </section>
</template>
<style lang="postcss">
  .intro {
    @apply flex items-center w-[90vw] h-[80vh] text-center justify-center mx-[5vw] my-[10vh];
  }
</style>
<script>
  export default {
    data: () => ({
    }),
    props: {
      titre: {
        type: String,
        required: true
      }
    },
    computed: {
    },
    methods: {
      enter() {
          var t1 = this.$gsap.timeline(), mySplitText = new SplitType("h1", {type:"words,chars"}), chars = mySplitText.chars;
          t1.from(chars, {delay: 0.5, duration: .1, opacity:0, y:-50, transformPerspective:800, transformOrigin:"center", rotationY:180,  ease:"power2.inOut", stagger: 0.1}, "+=0");
      },
    },
    mounted() {
        this.enter();
    }
  }
</script>
