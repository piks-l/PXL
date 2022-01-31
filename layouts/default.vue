<template>
  <main :class="{'isDesktop': this.$device.isDesktop, 'isMobile': this.$device.isMobile, 'isTablet': this.$device.isTablet,}">
    <Ui-header />
    <Nuxt />
    <Ui-footer v-if="!this.$store.state.preloading" />
  </main>
</template>
<style lang="postcss">
  main {
    @apply bg-black;
  }
</style>
<script>
  export default {
    methods: {
      enter() {
        console.log("Layout mounted !")
        
      },
      scrollPosition() {
        // Frmwrk
        let GSAP = this.$gsap;
        
        // Scroll
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
            var t1 = GSAP.timeline();
            t1.to('header', {height: "50vh", duration: 0, delay:0 , ease: 'power2.easeOut'})
            .to('.logo-theme', {left: "0%", x: '0%', duration: 0, delay:0 , ease: 'power2.easeOut'})
            .to('.logo-theme .char', {fontSize: "100px", duration: 0.1, delay:0 , ease: 'power2.easeOut', stagger: 0.1});
          };
          if(html.scrollTop > 0 && html.scrollTop < limitScroll){
            console.log('Scroll = ', document.documentElement.scrollTop , '/', limitScroll)
            var t2 = GSAP.timeline();
            t2.to('header', {height: "100px", duration: 0, delay:0 , ease: 'power2.easeOut'})
            .to('.logo-theme', {left: "-50%", x: '50%', duration: 0, delay:0 , ease: 'power2.easeOut'})
            .to('.logo-theme .char', {fontSize: "25px", duration: 0.1, delay:0  , ease: 'power2.easeOut', stagger: 0.1});
          };
          if(html.scrollTop > limitScroll){
            console.log('Scroll 🔚')
            var t3 = GSAP.timeline();
            t3.to('header', {height: "50vh", duration: 0.2, delay:0 , ease: 'power2.easeOut'})
            .to('.logo-theme', {left: "0%", x: '0%', duration: 0, delay:0 , ease: 'power2.easeOut'})
            .to('.logo-theme .char', {fontSize: "100px",duration: 0.1, delay:0 , ease: 'power2.easeOut', stagger: 0.1});
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
        }, 2500);
        this.enter();
        this.scrollPosition();
      })
    }
  }
</script>
