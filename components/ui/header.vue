<template>
  <header>

    <Ui-logo class="logo-theme" />

    <div class="available">
      <div class="inline-block rounded-full h-4 w-4 bg-yellow animate-pulse"></div>
      <p>AVAILABLE FOR WORKS ! <span id="fps">{{fpsMeteru}}</span></p>
      <Ui-eyes/>
    </div>
    <nav>
      <n-link class="hover:animate-pulse" to="/projects">PROJECTS</n-link>
      <n-link to="/">ABOUT</n-link>
      <n-link to="/">CONTACT</n-link>
    </nav>
    <Ui-scrollindicator />

  </header>

</template>
<style lang="postcss" scooped>
  header{ @apply bg-black fixed top-0 left-0 w-full h-[70px] flex justify-between items-center px-20  border-b-2 border-white z-[100] transform transition-all duration-1000; }
  .logo-theme{ @apply text-white transition-all duration-1000 font-aktura leading-[70px] text-[50px] w-1/3; }
  .available{ @apply text-white font-aliseo text-center text-xl m-auto font-normal  w-1/3 leading-[70px]; }
  .available p{ @apply inline ml-2; }
  header nav{ @apply text-white font-aliseo text-xl  w-1/3 text-right leading-[70px]; }
  header nav a:nth-child(1), nav a:nth-child(2){ @apply mr-4; }
</style>
<script>
export default {
  data() {
    return {
      content: false,
      fpsMeteru:0,
    }
  },
  methods: {
    fpsMeter() {
      var fps = document.getElementById("fps");
      var startTime = Date.now();
      var frame = 0;
      console.log(this.fpsMeteru)

      function tick() {
        var time = Date.now();
        frame++;
        if (time - startTime > 1000) {
            fps.innerHTML = (frame / ((time - startTime) / 1000)).toFixed(1);
            startTime = time;
            frame = 0;
        }
        window.requestAnimationFrame(tick);
      }
      tick();


    }
  },
  mounted() {
    this.fpsMeter();
  }
}
</script>
