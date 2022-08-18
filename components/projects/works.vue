<template>
    <section class="blank  scnd-step overflow-hidden">
        <div id="projects" class="item article bg-transparent">
          <!-- TITRE-->
            <h2 class="title-section z-0">
              <span class="t1">selected</span> 
              <span class="t2" style="filter:url(#distortionFilter);">Projects</span>  
            </h2>
            <!-- SELECTED WORKS-->

            <Widgets-works />
            <!-- SEP-->  
            <div class="separateur horizon text-2xl sep bg-black">
                <div class="animate-horizontalTextScrolling">
                <span class="text-white font-aliseo">INDEPENDENT FONT & BACK-END WEB DEVELOPER - AVAILABLE FOR WORK - </span>
                <span class="text-white font-aliseo">INDEPENDENT FONT & BACK-END WEB DEVELOPER - AVAILABLE FOR WORK - </span>
                <span class="text-white font-aliseo">INDEPENDENT FONT & BACK-END WEB DEVELOPER - AVAILABLE FOR WORK - </span>
                <span class="text-white font-aliseo">INDEPENDENT FONT & BACK-END WEB DEVELOPER - AVAILABLE FOR WORK - </span>
                <span class="text-white font-aliseo">INDEPENDENT FONT & BACK-END WEB DEVELOPER - AVAILABLE FOR WORK - </span>
                </div> 
                <div class="rotate-180"> 
                <div class="animate-horizontalTextScrolling ">
                    <span class="text-yellow font-aliseo">INDEPENDENT FONT & BACK-END WEB DEVELOPER - AVAILABLE FOR WORK - </span>
                    <span class="text-yellow font-aliseo">INDEPENDENT FONT & BACK-END WEB DEVELOPER - AVAILABLE FOR WORK - </span>
                    <span class="text-yellow font-aliseo">INDEPENDENT FONT & BACK-END WEB DEVELOPER - AVAILABLE FOR WORK - </span>
                    <span class="text-yellow font-aliseo">INDEPENDENT FONT & BACK-END WEB DEVELOPER - AVAILABLE FOR WORK - </span>
                    <span class="text-yellow font-aliseo">INDEPENDENT FONT & BACK-END WEB DEVELOPER - AVAILABLE FOR WORK - </span> 
                </div>
                </div> 
            </div> 
        </div>
    </section>
</template>
<style lang="postcss">
/* SECTION 2 
    .scnd-step{z-index:1;}
    #projects { @apply z-20; background:transparent!important;}
    #projects h2{ @apply text-white font-aktura text-[150px] leading-[150px] text-center top-1/2 -translate-y-1/2; width:calc(100% - 140px);}
    #projects h2 span:nth-child(2){ @apply text-black font-aliseo; }
*/
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
        // SECTION 2 : PROJECTS [v]
        gsap.utils.toArray(".scnd-step").forEach(e => {

          let proxy = { skew: 0 }
          let skewSetter = gsap.quickSetter("figure", "skewY", "deg");
          let clamp = gsap.utils.clamp(-20, 20);

          gsap.set("figure", {
            transformOrigin: "right center", 
            force3D: true,
          });

          var titleProjects = gsap.timeline({paused:true}).to('#projects .t2', {
              duration: 0.5, color: self.isActive ? color : '#fff000'
            }, "+=0");
          var imProjects = gsap.timeline({paused:true}).to('main', {
              duration: 0.5, backgroundColor: self.isActive ? backgroundColor : '#000000'
            }, "+=0");
          var imTitle = gsap.timeline({paused:true}).to('#projects .title', {
              duration: 0.5, color: self.isActive ? color : '#FFF000'
            }, "+=0");

          gsap.timeline({
                scrollTrigger: {
                      trigger: e,
                      start: "+=100vh",
                      end: e.innerHeight,
                      scrub: true,
                      toggleActions: "play reverse play reverse",
                      onUpdate: e => {
                        let skew = clamp(e.getVelocity() / -300);
                        // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
                        if (Math.abs(skew) > Math.abs(proxy.skew)) {
                          proxy.skew = skew;
                          gsap.to(proxy, {skew: 0, duration: 0.1, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
                        }
                      },
                      onEnterBack: e => {
                        imProjects.play();
                        imTitle.play();
                        titleProjects.play();
                      },
                      onLeaveBack: e => {
                        imProjects.reverse();
                        imTitle.reverse();
                        titleProjects.reverse();
                      },
                      onEnter: e => {
                        imProjects.play();
                        imTitle.play();
                        titleProjects.play();
                      },
                      onLeave: e => {
                        imProjects.reverse();
                        imTitle.reverse();
                        titleProjects.reverse();
                      },
                      markers: {startColor: "purple", endColor: "purple", fontSize: "15px", fontWeight: "bold", indent: 300}
                }
              });
          

        });
        
      },
    },
    mounted() {
      this.animateOnScroll();
    }
  }
</script>
