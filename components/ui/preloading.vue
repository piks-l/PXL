<template>
  <transition name="loading_transition"
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:after-enter="afterEnter"
    v-on:before-leave="beforeLeave"
    v-on:leave="leave"
    v-on:after-leave="afterLeave"
  >
    <div v-if="preloading" class="preloader">
      <div v-if="content">
          <h1 class="titleload">Saåad</h1>
          <div class="preloader__progress">
            <div class="preloader__progress__bar"></div>
          </div>
      </div>
    </div>
  </transition>
</template>
<style>
  .preloader {
    align-items: center;
    background: #f9f69a;
    color: black;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 1007!important;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    overflow:hidden;
  }
  .titleload{
    font-size:90px;
    font-family: Orchid;
    margin: 0px;
  }
  .preloader__progress {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5px;
    overflow: hidden;
    text-align: center;
    width: 100%;
    top: -112.5px;
    position: relative;
  }
  .preloader__progress__bar {
    border-bottom: 5px solid black;
    background: #FFFFFF;
    color: #FFFFFF;
    height: 0px;
    margin:0 auto;
    width: 100%;
    animation: ani__06 3.4s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    transform-origin: 50% 0%;
    background-image:url('/images/CLINDOEIL.gif');
  }
</style>
<script>
export default {
  data: () => ({
    content: false, // Boolean du contenu
  }),
  methods: {
    start() {
        this.toggle();
        this.content = true; // Boolean du contenu = true
        // Début du chargement du component loading.vue
    },
    beforeEnter() {
      // Avant de lancer la function Enter()
    },
    enter() {
        var t1 = this.$gsap.timeline(), mySplitText = new SplitType(".titleload", {type:"words,chars"}), chars = mySplitText.chars;
          t1.from(chars, {delay: 0, duration: .1, opacity:0, y:-50,  ease:"power2.inOut", stagger: 0.1}, "+=0");
          t1.to(chars, {delay: 0, duration: 0.1, opacity:0, y:50, transformOrigin:"0% 50% 100",  ease:"power2.inOut", stagger: 0.1}, "+=0");

    },
    afterEnter() {
      // Aprés avoir lancer la function Enter()
      this.$gsap.to(".preloader__progress", { height: 300, y: -5, ease: 'power2.inOut', duration: 0.5, delay: 3.4});
      this.$gsap.to(".preloader__progress__bar", { height: 300, y: -5, ease: 'power2.inOut', duration: 0.5, delay: 3.4});
      this.$gsap.to(".preloader__progress", { height: 0, y: 5, ease: 'power2.inOut', duration: 0.5, delay: 4.4});
      this.$gsap.to(".preloader__progress__bar", { height: 0, y: 5, ease: 'power2.inOut', duration: 0.5, delay: 4.4});
    },
    finish() {
        this.content = false; // Boolean du contenu = false
        this.toggle();
      // Fin du chargement du component loading.vue
    },
    beforeLeave() {
    },
    leave() {
    },
    afterLeave() {
        this.$ScrollTrigger.refresh();
    },
    toggle() {
        this.$store.dispatch('toggled')
    }
  },
  computed: {
    preloading () {
      return this.$store.getters['toggled']
    },
  },
}
</script>
