<template>
    <section class="horizontal three-step bg-black">
      
      <div class="pin-wrap  h-[100vh]" >
        <div class="animation-wrap to-right text-white">         
                    <!-- SECTION VIDE -->
          <div class="item article bg-yellow">
              <div class="center">
              </div>
          </div>   
            <div class="item article">
                <div class="absolute left-0 top-1/2 w-1/2 mx-[25%] -translate-y-1/2">
                  <h2>
                    <span>KNOW</span> 
                    <span>MORE</span> 
                    <span>ABOUT</span> 
                    <span class="font-aktura text-yellow">piks-l</span>
                  </h2>
                </div>
            </div>

        </div>
      </div>
    </section> 
</template>
<style lang="postcss">
    /* SECTION 3 
    .three-step{z-index:2;}
    .separateur.horizon span { @apply leading-[35px]; }
    .separateur.horizon{
    @apply rotate-0 border-t-2 block border-r-0 border-t-yellow border-b-2 border-l-0 border-b-white;
        writing-mode: initial;
        flex: 0 0 100vw !important;
        max-width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
    }
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
        // SECTION 3 : ABOUTS [>]
        this.$gsap.utils.toArray('.three-step').forEach(function (sec, i) {	
    
          var thisPinWrap = sec.querySelector('.pin-wrap');
          var thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');
          
          var getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth); 

          gsap.fromTo(thisAnimWrap, { 
            x: () => thisAnimWrap.classList.contains('to-right') ? 0 : getToValue() 
          }, { 
            x: () => thisAnimWrap.classList.contains('to-right') ? getToValue() : 0, 
            ease: "none",
            scrollTrigger: {
              trigger: sec,		
              start: "top top",
              end: () => "+=" + (thisAnimWrap.scrollWidth - window.innerWidth),
              pin: thisPinWrap,
              invalidateOnRefresh: true,
              //anticipatePin: 1,
              scrub: true,
              markers: {startColor: "red", endColor: "red", fontSize: "15px", fontWeight: "bold", indent: 1000},
              onLeave: () => {
                //var element = document.querySelector("#projects");
                //element.classList.toggle("sticky");
              },
              onEnterBack: () => {
                //var element = document.querySelector("#projects");
                //element.classList.toggle("sticky");
              },
            }
          });
          

        });	
      },
    },
    mounted() {
      //this.animateOnScroll();
    }
  }
</script>
