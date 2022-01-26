<template>
  <transition name="loading_transition"
    v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter"
    v-on:before-leave="beforeLeave" v-on:leave="leave" v-on:after-leave="afterLeave"
  >
    <div v-if="preloading" class="preloader">
      <svg viewBox="25 25 50 50" class="circleLoading" v-if="content">
        
        <circle class="loader-path" cx="50" cy="50" r="20"></circle>
      </svg>
    </div>
  </transition>
</template>
<style lang="postcss">
  .preloader{
     @apply z-[101] bg-[transparent] mx-auto fixed top-0 left-0 w-screen h-screen flex justify-between items-center px-20 overflow-hidden text-center;
  }
  .loader-path {
    fill: none;
    stroke-width: 1px;
    animation: animate-stroke 4s linear;
  }
  .circleLoading {
    @apply w-[550px] h-[550px] mx-auto;
  }
  @keyframes animate-stroke {
      0% {
          stroke-dasharray: 200, 200;
          stroke-dashoffset: 0;
          stroke-width: 1px;
          stroke: black;
      }
      100% {
          stroke-dasharray: 200, 200;
          stroke-dashoffset: -200;
          stroke-width: 1px;
          stroke: white;
      }
  }

</style>
<script>
export default {
  data: () => ({
    content: false, // Boolean du contenu
  }),
  methods: {
    revealHeader() {
      console.log("revealHeader")
      var header = document.querySelector("header");
      header.classList.toggle("headerFull");
    },
    start() {
        this.toggle();
        this.content = true; // Boolean du contenu = true
        // Début du chargement du component loading.vue
    },
    beforeEnter() {
      // Avant de lancer la function Enter()
    },
    enter() {

    },
    afterEnter() {
      // Aprés avoir lancer la function Enter()
      this.$gsap.to("#circle", { y: -5, ease: 'power2.inOut', duration: 3, delay: .5});
    },
    finish() {
        this.content = false; // Boolean du contenu = false
        this.revealHeader();
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
        this.$store.dispatch('actPreloading')
    }
  },
  computed: {
    preloading () {
      return this.$store.getters['getPreloading']
    },
  },
}
</script>
