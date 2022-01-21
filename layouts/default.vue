<template>
  <div :class="{'isDesktop': this.$device.isDesktop, 'isMobile': this.$device.isMobile, 'isTablet': this.$device.isTablet,}" class="cursor-crosshair" >
    <div class="cursor">
      <div class="cursor__circle">
        <svg height="64" width="64">
          
          <rect fill="black" width="64" height="64"/>
          <circle fill="white" cx="32" cy="32" r="16"></circle>

        </svg>
      </div>
    </div>
    <svg class="w-screen h-screen fixed top-0 left-0 " xmlns="http://www.w3.org/2000/svg">
      <line x1="10%" y1="0%" x2="10%" y2="100%" stroke="black" class="sv1" />
      <line x1="90%" y1="0%" x2="90%" y2="100%" stroke="black" class="sv2" />
      <line x1="0%" y1="20%" x2="100%" y2="20%" stroke="black" class="sv3" />
      <line x1="0%" y1="80%" x2="100%" y2="80%" stroke="black" class="sv4" />
      <rect x="5vw" y="10vh" stroke="black" width="90vw" height="80vh" class="following"/>
      <line x1="10%" y1="10%" x2="10%" y2="90%" stroke="white"  class="sv5"/>
      <line x1="90%" y1="10%" x2="90%" y2="90%" stroke="white"  class="sv6" />
      <image href="~/assets/images/follow.gif" class="follow f3" height="50%" width="50%"/>
      <image href="~/assets/images/follow.gif" class="follow f2" height="50%" width="50%"/>
      <image href="~/assets/images/follow.gif" class="follow f1" height="50%" width="50%"/>
    </svg>

    <Logo  v-if="!this.$store.state.preloading" />
    <span class="fixed top-0 left-[15%] leading-[10vh] font-title">SEPTEMBRE <b>2022</b></span>
    <Nuxt v-if="!this.$store.state.preloading" class="iore z-[55]"/>
    <Menu />
    <span class="fixed bottom-0 right-[15%] leading-[10vh] font-title">RESTEZ CONNECTÉS</span>


  </div>
</template>
<style lang="postcss">
.cursor {
  pointer-events: none;
}
.cursor__circle {
  position: fixed;
  top: 0;
  left: 0;
  mix-blend-mode: difference;
  z-index: 1000;
}
  .visible {
    visibility: visible!important;
  }
     .f1 {
               -webkit-animation: lolking 5s linear;
                       animation: lolking 5s linear;
               -webkit-animation-iteration-count: infinite;
                       animation-iteration-count: infinite;
   }
   .f2 {
       -webkit-transition:.1s !important;
       -o-transition:.1s !important;
       transition:.1s !important;
       position: absolute;
       -webkit-animation: lolking 5s linear .2s;
               animation: lolking 5s linear .2s;
       -webkit-animation-iteration-count: infinite;
               animation-iteration-count: infinite;
   }
   .f3 {
       -webkit-filter: saturate(0);
               filter: saturate(0);
       -webkit-transition:.2s !important;
       -o-transition:.2s !important;
       transition:.2s !important;
       position: absolute;
       -webkit-animation: lolking 5s linear .4s;
               animation: lolking 5s linear .4s;
       -webkit-animation-iteration-count: infinite;
               animation-iteration-count: infinite;
   }
   @keyframes lolking {
     0% {
       transform: rotate(0deg) translatey(-50%);
     }
     25% {
       transform: rotate(-1deg) translatey(-50%);
     }
     50% {
       transform: rotate(0deg) translatey(-50%);
     }
     75% {
       transform: rotate(1deg) translatey(-50%);
     }
     100% {
       transform: rotate(0deg) translatey(-50%);
     }
   }
   .follow {
       position:absolute;
       visibility: hidden;
       -webkit-transform: translateX(20px)  translateY(-50%);
           -ms-transform: translateX(20px)  translateY(-50%);
               transform: translateX(20px)  translateY(-50%);
       pointer-events:none;
       width:375px;
       overflow:hidden;
   }
  .intro {
    @apply flex items-center text-center justify-center m-[100px];
     width:calc(100vw - 200px);
     height:calc(100vh - 200px);
     font-size:10em;
     line-height:1em;
  }
  .svg-filter {
    visibility: hidden;
    height: 0;
  }
</style>
<script>
  export default {
    methods: {
    },
    computed: {
    },
    methods: {
      enter() {
          var t1 = this.$gsap.timeline(), mySplitText = new SplitType("span", {type:"words,chars"}), chars = mySplitText.chars;
          t1.from(chars, {delay: 1, duration: .1, opacity:0, x:50, transformPerspective:800, transformOrigin:"center", rotationY:180,  ease:"power2.inOut", stagger: 0.1}, "+=0");


          this.$gsap.from(".sv1", {delay: 0, duration: 3, opacity:0, y:'100%', ease:"power2.inOut", stagger: 0.1}, "+=0");
          this.$gsap.from(".sv2", {delay: 0, duration: 3, opacity:0, y:'-100%', ease:"power2.inOut", stagger: 0.1}, "+=0");
          this.$gsap.from(".sv3", {delay: 0, duration: 3, opacity:0, x:'100%', ease:"power2.inOut", stagger: 0.1}, "+=0");
          this.$gsap.from(".sv4", {delay: 0, duration: 3, opacity:0, x:'-100%', ease:"power2.inOut", stagger: 0.1}, "+=0");
          this.$gsap.from(".sv5", {delay: 0, duration: 3, opacity:0, y:'100%', ease:"power2.inOut", stagger: 0.1}, "+=0");
          this.$gsap.from(".sv6", {delay: 0, duration: 3, opacity:0, y:'-100%', ease:"power2.inOut", stagger: 0.1}, "+=0");
          this.$gsap.from(".following", {delay: 0, duration: 1, opacity:0, width:'0%', ease:"power2.inOut", stagger: 0.1}, "+=0");
          
          const $cursor = document.querySelector(".cursor__circle");
          const $hover = document.querySelectorAll(".hover");
          document.body.addEventListener("mousemove", onMouseMove);
          for (let i = 0; i < $hover.length; i++) {
            $hover[i].addEventListener("mouseenter", onMouseHover);
            $hover[i].addEventListener("mouseleave", onMouseHoverOut);
          }
          function onMouseMove(e) {
            TweenMax.to($cursor, 0.4, {
              x: e.pageX - 32,
              y: e.pageY - 32
            });
          }
          function onMouseHover() {
            TweenMax.to($cursor, 0.4, {
              scale: 3
            });
          }
          function onMouseHoverOut() {
            TweenMax.to($cursor, 0.4, {
              scale: 1
            });
          }

          $('h1').mouseenter(function(e){
            console.log("enter");
            $('.follow').addClass('visible');
            $('.follow').css({x:(e.pageX), y: (e.pageY)});
          }).mousemove(function(e){
            $('.follow').css({x:(e.pageX), y: (e.pageY)});
          }).mouseleave(function(e){
            $('.follow').removeClass('visible');
          });
      },
    },
    mounted() {
      this.enter();
      this.$gsap.config({
        nullTargetWarn: false,
        trialWarn: false,
      })
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 4900)
      })
    }
  }
</script>
