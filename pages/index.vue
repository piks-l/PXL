<template>
  <div id="pikslEngine" class="overflow-x-hidden">
   
    <Content-welcome />
     
  </div>
</template>
<style lang="postcss">
  html, body { overscroll-behavior: none;}
  section { @apply w-full h-full relative;}
  section.horizontal {  width: -webkit-max-content; width: -moz-max-content; width: max-content; }
  section.horizontal .pin-wrap, section.horizontal .animation-wrap { @apply flex relative z-[1]; }
  section.horizontal .item { 
    @apply relative table items-center leading-relaxed select-none; 
    flex: 0 0 100vw;
  }
  section.horizontal .sep { 
    @apply relative table items-center leading-[70px] select-none; 
    flex: 0 0 70px;
  }
  section.horizontal .animation-wrap.to-right {
    @apply float-left;
    counter-reset: item;
  }
  section.horizontal .animation-wrap.to-left {
    @apply float-right;
    counter-reset: item 11;
  }
  /* AUTRES */
  section.horizontal .animation-wrap .item:nth-child(2n+2) {
    align-items: flex-start;
  }
  section.horizontal .animation-wrap .item:nth-child(4n+4) {
    align-items: flex-end;
  }
  section.five-step .animation-wrap .item:nth-child(2n+2) {
    align-items: flex-end;
  }
  section.five-step .animation-wrap .item:nth-child(4n+4) {
    align-items: flex-start;
  }
</style>

<script>
  import {mapActions} from 'vuex'
  export default {
    data () {
      return {
        isPolyScrollTimelineLoaded: false
      }
    },
    methods: {
      animateOnScroll() {
        const gsap = this.$gsap;
      },
    },
    mounted() {
      this.animateOnScroll();
    }
  }
</script>
