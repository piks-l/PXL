<template>
  <main :class="{'isDesktop': this.$device.isDesktop, 'isMobile': this.$device.isMobile, 'isTablet': this.$device.isTablet,}" class="bg-yellow">
    <ClientOnly><Ui-header/></ClientOnly>
    <div class="ball w-10 h-10 bg-none border-2 border-yellow rounded-full active-animatioon fixed top-0 left-0 z-0"></div>
    <Nuxt/>
    <Widgets-background/>
  </main>
</template>
<style lang="postcss" scooped>
  main {
    @apply bg-yellow;
  }

</style>
<script>
  export default {
    methods: {
      enter() {
        console.log("Layout mounted !")
        
      },
      followMouse() {
        var gsap = this.$gsap
        gsap.set(".ball", {xPercent: -50, yPercent: -50});

        const ball = document.querySelector(".ball");
        const hoverElem = document.querySelectorAll('[data-hover]');
        const hoverNav = document.querySelectorAll("[data-navigation]");

        const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const mouse = { x: pos.x, y: pos.y };
        const speed = .35;

        const xSet = gsap.quickSetter(ball, "x", "px");
        const ySet = gsap.quickSetter(ball, "y", "px");
        window.addEventListener("mousemove", e => {    
          mouse.x = e.x;
          mouse.y = e.y;  
        });
        function Mouseenter2(e) {
            var eW = e.offsetHeight;
            gsap.to(".ball", {duration: 0.3, scale: 1.1, borderRadius: 0, width:eW+"px", height:eW+"px"});
        };
        function Mouseenter(e) {
            var eW = e.offsetWidth;
            var eH = e.offsetHeight;
            gsap.to(".ball", {duration: 0.3, scale: 1.1, borderRadius: 0, width:eW+"px", height:eH+"px", borderColor: "#ffffff"});
        };
        function Mousemoove() { gsap.set(".ball", {duration: 0.3, scale: 1.1, borderRadius: 0}); };
        function Mouseleave() { gsap.to(".ball", {duration: 0.3,scale: 1, borderRadius: 100, width:"40px", height:"40px", borderColor: "#fff000" }); };
        function Mouseclique(e) { gsap.from(".ball", {duration: 0.3,scale: 2, borderColor: "#ffffff"}); };

        hoverNav.forEach((e) => {
            e.addEventListener('mouseover', () => Mouseenter2(e) );
            e.addEventListener('mousemove', () => Mousemoove() );
            e.addEventListener('mouseout', () => Mouseleave() );
            e.addEventListener('click', () => Mouseclique(e) );
        });
        hoverElem.forEach((e) => {
            e.addEventListener('mouseover', () => Mouseenter(e) );
            e.addEventListener('mousemove', () => Mousemoove() );
            e.addEventListener('mouseout', () => Mouseleave() );
            e.addEventListener('click', () => Mouseclique(e) );
        });

        this.$gsap.ticker.add(() => {
          const dt = 1.0 - Math.pow(1.0 - speed, this.$gsap.ticker.deltaRatio()); 
          pos.x += (mouse.x - pos.x) * dt;
          pos.y += (mouse.y - pos.y) * dt;
          xSet(pos.x);
          ySet(pos.y);
        });
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
            t1.to('header', {height: "70px", duration: 0, delay:0 , ease: 'power2.easeOut'})
            .to('.logo-theme', {left: "0%", x: '0%', duration: 0, delay:0 , ease: 'power2.easeOut'})
            .to('.logo-theme .char', {fontSize: "100px", duration: 0.1, delay:0 , ease: 'power2.easeOut', stagger: 0.1});
          };
          if(html.scrollTop > 0 && html.scrollTop < limitScroll){
            console.log('Scroll = ', document.documentElement.scrollTop , '/', limitScroll)
            var t2 = GSAP.timeline();
            t2.to('header', {height: "70px", duration: 0, delay:0 , ease: 'power2.easeOut'})
            .to('.logo-theme', {left: "-50%", x: '50%', duration: 0, delay:0 , ease: 'power2.easeOut'})
            .to('.logo-theme .char', {fontSize: "25px", duration: 0.1, delay:0  , ease: 'power2.easeOut', stagger: 0.1});
          };
          if(html.scrollTop > limitScroll){
            console.log('Scroll 🔚')
            var t3 = GSAP.timeline();
            t3.to('header', {height: "70px", duration: 0.2, delay:0 , ease: 'power2.easeOut'})
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
        this.followMouse();
        //this.scrollPosition();
      })
    }
  }
</script>
