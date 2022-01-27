<template>
  <main :class="{'isDesktop': this.$device.isDesktop, 'isMobile': this.$device.isMobile, 'isTablet': this.$device.isTablet,}">
    <Ui-header />
    <Nuxt v-if="!this.$store.state.preloading"/>
    <Ui-footer v-if="!this.$store.state.preloading" />
  </main>
</template>
<style lang="postcss">
  main {
    @apply bg-black;
    background-image:
      linear-gradient(rgba(255,255,255,.07) 2px, transparent 2px),
      linear-gradient(90deg, rgba(255,255,255,.07) 2px, transparent 2px),
      linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px);
    background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
    background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
  }
</style>
<script>
  export default {
    methods: {
      enter() {
        console.log("Layout mounted !")
      },
      scrollPosition() {
        let realHeight = (window.innerHeight / 2);
        let body = document.body, html = document.documentElement;
        let limitBottom = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
        let calcScroll = (limitBottom - realHeight).toFixed(0);
        let limitScroll = (calcScroll - (window.innerHeight/2)).toFixed(0)

        this.$ScrollTrigger.addEventListener("scrollStart", () => console.log("🟢Scrolling Started !"));
        this.$ScrollTrigger.addEventListener("scrollEnd", () => console.log("🟢Scrolling Ended !"));   
        
        console.log('limitScroll = ', limitScroll)

        window.addEventListener("scroll",function(){
          if(html.scrollTop === 0){
            console.log('Scroll 🔝')
          };
          if(html.scrollTop > 0 && html.scrollTop < limitScroll){
            console.log('Scroll = ', document.documentElement.scrollTop , '/', limitScroll)
          };
          if(html.scrollTop > limitScroll){
            console.log('Scroll 🔚')
          }
        })
      }
    },
    mounted() {
      this.$gsap.config({nullTargetWarn: false, trialWarn: false});
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        setTimeout(() => {
          this.$nuxt.$loading.finish()
                  this.enter();
        this.scrollPosition();
        }, 2500);

      })
    }
  }
</script>
