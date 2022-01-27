<template>
    <NuxtLink to="/">
      Saåad
    </NuxtLink>
</template>
<style lang="postcss">
  .char {
    @apply text-[150px];
  }
</style>
<script>
export default {
  methods: {
    scrollLogo() {
      let limitBottom = document.documentElement.offsetHeight - ((window.innerHeight / 2) - 100);
      let GSAP = this.$gsap;
      let TIMELINE = this.$gsap.timeline();
      //TIMELINE.to('.char', {fontSize: "96px", opacity:.5, y: -1 , duration: .5 ,ease: 'power2.linear', stagger: 0.01}, "+=0");
      //TIMELINE.to('.char', {fontSize: "100px", opacity:1, y: 0, duration: .5, ease: 'power2.linear', stagger: 0.01}, "+=0");

      this.$gsap.from(".logo-theme .char", {delay: 0, duration:0, fontSize: '150px',  ease:"power2.linear", stagger: 0.1}, "+=0");
      
      var t1 = this.$gsap.timeline(), mySplitText = new SplitType(".logo-theme", {type:"words,chars"}), chars = mySplitText.chars;
        t1.from(chars, {delay: 0, duration:2.5, opacity:0, y:-50,  ease:"power2.linear", stagger: 0.1}, "+=0");
        t1.to(chars, {delay: 0, fontSize: '100px',duration:1,  ease:"power2.linear", stagger: 0.1}, "+=0");

      window.addEventListener("scroll",function(){
        if(document.documentElement.scrollTop === 0){
          console.log('LOGO TEEST TOP')
          GSAP.to('.logo-theme .char', {fontSize: "100px", y: -5, duration: 0.5, delay:0 , ease: 'power2.linear', stagger: 0.1});
        }
        if(document.documentElement.scrollTop > 100 && document.documentElement.scrollTop < (limitBottom) ){
          console.log('LOGO TEEST MID')
          GSAP.to('.logo-theme .char', {fontSize: "25px", duration: 0.2, delay:0  , ease: 'power2.linear', stagger: 0.1});
        } 
        if(document.documentElement.scrollTop > (limitBottom /2) ) {
          console.log('LOGO TEEST BOT')
          GSAP.to('.logo-theme .char', {fontSize: "25px", duration: 0.2, delay:0 , ease: 'power2.linear', stagger: 0.1});
        }
      })

    },
  },
  created() {
  },
  mounted() {

    this.scrollLogo();
    if(this.$store.state.preloading === false) {
      //console.log("IORE 1")
    } else {
      //console.log("IORE 2")
    }
  }
}
</script>
