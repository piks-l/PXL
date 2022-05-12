<template>
    <NuxtLink to="/" class="font-aktura">piks-l</NuxtLink>
</template>
<style lang="postcss">
.logo-theme .char {
  @apply text-[150px];
}
</style>
<script>
export default {
  methods: {
    scrollLogo() {
      var t1 = this.$gsap.timeline(), mySplitText = new SplitType(".logo-theme", {type:"words,chars"}), chars = mySplitText.chars;
        t1.from(chars, {delay: 0, duration:2, opacity:0, y:-100,  ease:"power2.easeOut", stagger: 0.2}, "+=1");
        t1.to(chars, {delay: 0, fontSize: '100px',duration:0.2,  ease:"power2.easeOut", stagger: 0.1});
      this.$gsap.from(".logo-theme", {delay: 0, duration:0, fontSize: '150px',  ease:"power2.easeOut", stagger: 0.1}, "+=0");
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
