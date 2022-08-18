<template>
  <div class="scrollbar-indicator ">
    <div class="scrollbar-container">
      <div class="scrollbar-progress" id="indicator"></div>
    </div>
  </div>
</template>
<style lang="postcss">
  .scrollbar-indicator {
    @apply fixed top-[65px] left-0 h-[2px] w-full bg-white;
  }
  .scrollbar-container {
    @apply h-[2px] w-full bg-black;
  }
  .scrollbar-progress {
    @apply w-0 bg-yellow h-[2px];
  }
</style>
<script>
  export default {
    methods: {
      appear() {
        this.$gsap.fromTo(".scrollbar-indicator",
          { opacity: 0, x: 5, ease :'power2.inOut'},
          { delay: 1, opacity: 1, x: 0, ease :'power2.inOut'},
        );
      },
    },
    mounted() {
      window.onscroll = function() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("indicator").style.width = scrolled + "%";
      };
      this.appear();
    }
  }
</script>
