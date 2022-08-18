<template>
      <Client-only>
        <div id="slider" ref="slider">
          <!-- CONTENT -->
          <div class="swiper sdqsdsqd" ref="swiperTop" v-swiper:myDirectiveSwiper="this.swiperOption" effect="fade"
          @ready="swiperRedied"
          @slideChangeTransitionStart="onSwiperSlideChangeTransitionStart"
          @slideChangeTransitionEnd="onSwiperSlideChangeTransitionEnd">
            <div class="swiper-wrapper h-full delay-1000">
                <div data-id="slider1" class="h-auto swiper-slide" data-swiper-parallax-opacity="0">
                    <div class="flex items-center justify-around h-full z-20 relative px-20 partie-1">
                        <div class="w-2/3 h-full text-center pr-20 flex flex-col items-center justify-around">
                        <h2 class="title-section z-0">
                            <span class="t1" style="filter:url(#pixelateMin);">electro alternativ</span>   
                        </h2>
                        <div class="scrollbar-container-slider mx-auto">
                            <div class="scrollbar-progress-slider" id="indicatorSlider"></div>
                        </div>
                        <div class="w-full mx-auto text-center flex flex-row mt-24 text-3xl font-aliseo">
                            <span class="p-5 font-aktura">#dev</span>
                            <nuxt-link to="/projects/electro-alternativ-2022" data-hover  class="text-yellow mx-auto active-animatioon inline-block p-5 font-aktura hover:animate-pulse">en voir plus</nuxt-link> 
                            <span class="p-5 text-yellow">2022</span>
                            </div>
                        </div>
                        <div class="h-full w-1/3 items-center grid grid-cols-1">
                            <div class="h-full w-full m-auto flex justify-around items-center" style="backdrop-filter: saturate(100%);">
                                <img class="w-full h-full bg-cover bg-center object-cover  bg-yellow  mx-auto tilt-elem absolute" style="transform: translateZ(100px); filter:url(#pixelateOnSlide) saturate(0);" src="~/assets/img/projects/electro-alternativ-2022/cover-intro.jpg" />                       
                                <div class="w-[350px] h-[350px] mx-auto active-animatioon  tilt-elem absolute" data-tilt-perspective="550" style="transform: translateZ(0px)" data-tilt-reverse="true" data-tilt-scale="1.1"></div>
                                <img class="w-[350px] h-[350px] mx-auto tilt-elem absolute" style="transform: translateZ(100px);" src="~/assets/img/projects/electro-alternativ-2022/article-ea3.jpg" />                       
                                <div class="h-[350px] w-[350px] mx-auto border-2 border-dotted border-yellow tilt-elem absolute" style="transform: translateZ(200px)" data-tilt-reverse="true"  data-tilt-perspective="500" data-tilt-scale="0.9"></div>
                            </div>
                        </div>
                    </div>
                    <div class="separateur horizonslider text-2xl sep z-10 relative partie-2">
                        <div class="animate-horizontalTextScrolling">
                            <span class="text-yellow font-aliseo">ELECTRO ALTERNATIV - 2022 - ELECTRO ALTERNATIV - 2022 - </span>
                            <span class="text-yellow font-aliseo">ELECTRO ALTERNATIV - 2022 - ELECTRO ALTERNATIV - 2022 - </span>
                            <span class="text-yellow font-aliseo">ELECTRO ALTERNATIV - 2022 - ELECTRO ALTERNATIV - 2022 - </span>
                            <span class="text-yellow font-aliseo">ELECTRO ALTERNATIV - 2022 - ELECTRO ALTERNATIV - 2022 - </span>
                            <span class="text-yellow font-aliseo">ELECTRO ALTERNATIV - 2022 - ELECTRO ALTERNATIV - 2022 - </span>
                            <span class="text-yellow font-aliseo">ELECTRO ALTERNATIV - 2022 - ELECTRO ALTERNATIV - 2022 - </span>
                        </div> 
                        <div class="rotate-180"> 
                            <div class="animate-horizontalTextScrolling ">
                            <span class="text-white font-aliseo">ELECTRO ALTERNATIV - 2022 - ELECTRO ALTERNATIV - 2022 - </span>
                            <span class="text-white font-aliseo">ELECTRO ALTERNATIV - 2022 - ELECTRO ALTERNATIV - 2022 - </span>
                            <span class="text-white font-aliseo">ELECTRO ALTERNATIV - 2022 - ELECTRO ALTERNATIV - 2022 - </span>
                            <span class="text-white font-aliseo">ELECTRO ALTERNATIV - 2022 - ELECTRO ALTERNATIV - 2022 - </span>
                            <span class="text-white font-aliseo">ELECTRO ALTERNATIV - 2022 - ELECTRO ALTERNATIV - 2022 - </span>
                            <span class="text-white font-aliseo">ELECTRO ALTERNATIV - 2022 - ELECTRO ALTERNATIV - 2022 - </span>
                            </div>
                        </div> 
                    </div> 
                </div>
                <div data-id="slider2" class="h-auto swiper-slide" data-swiper-parallax-opacity="0">
                    <div class="flex items-center justify-around h-full z-20 relative px-20 partie-1">
                        <div class="h-full w-1/3 items-center grid grid-cols-1">
                            <div class="h-full w-full m-auto flex justify-around items-center" style="backdrop-filter: saturate(100%);">
                                <img class="w-full h-full bg-cover bg-center object-cover  bg-yellow  mx-auto tilt-elem absolute" style="transform: translateZ(100px); filter:url(#pixelateOnSlide) saturate(0);" src="~/assets/img/projects/la-cour-des-miracles/facebook-image.png" />                       
                                <div class="w-[350px] h-[350px] mx-auto active-animatioon  tilt-elem absolute" data-tilt-perspective="550" style="transform: translateZ(0px)" data-tilt-reverse="true" data-tilt-scale="1.1"></div>
                                <img class="w-[350px] h-[350px] mx-auto tilt-elem absolute" style="transform: translateZ(100px);" src="~/assets/img/projects/la-cour-des-miracles/article-lacdm.gif" />                       
                                <div class="h-[350px] w-[350px] mx-auto border-2 border-dotted border-yellow tilt-elem absolute" style="transform: translateZ(200px)" data-tilt-reverse="true"  data-tilt-perspective="500" data-tilt-scale="0.9"></div>
                            </div>
                        </div>
                        <div class="w-2/3 h-full text-center pl-20 flex flex-col items-center justify-around">
                          <h2 class="title-section z-0">
                              <span class="t1" style="filter:url(#pixelateMin);">la cour des miracles</span>   
                          </h2>
                          <div class="scrollbar-container-slider mx-auto">
                              <div class="scrollbar-progress-slider" id="indicatorSlider"></div>
                          </div>
                          <div class="w-full mx-auto text-center flex flex-row mt-24 text-3xl font-aliseo">
                              <span class="p-5 font-aktura">#dev #art</span>
                              <nuxt-link to="/projects/electro-alternativ-2022" data-hover class="text-yellow mx-auto active-animatioon inline-block p-5 font-aktura hover:animate-pulse">en voir plus</nuxt-link> 
                              <span class="p-5 text-yellow">2016</span>
                          </div>
                        </div>

                    </div>
                    <div class="separateur horizonslider text-2xl sep z-10 relativ partie-2">
                        <div class="animate-horizontalTextScrolling">
                            <span class="text-yellow font-aliseo">LA COUR DES MIRACLES - 2016 - LA COUR DES MIRACLES - 2016 - </span>
                            <span class="text-yellow font-aliseo">LA COUR DES MIRACLES - 2016 - LA COUR DES MIRACLES - 2016 - </span>
                            <span class="text-yellow font-aliseo">LA COUR DES MIRACLES - 2016 - LA COUR DES MIRACLES - 2016 - </span>
                            <span class="text-yellow font-aliseo">LA COUR DES MIRACLES - 2016 - LA COUR DES MIRACLES - 2016 - </span>
                            <span class="text-yellow font-aliseo">LA COUR DES MIRACLES - 2016 - LA COUR DES MIRACLES - 2016 - </span>
                            <span class="text-yellow font-aliseo">LA COUR DES MIRACLES - 2016 - LA COUR DES MIRACLES - 2016 - </span>
                        </div> 
                        <div class="rotate-180"> 
                            <div class="animate-horizontalTextScrolling ">
                            <span class="text-white font-aliseo">LA COUR DES MIRACLES - 2016 - LA COUR DES MIRACLES - 2016 - </span>
                            <span class="text-white font-aliseo">LA COUR DES MIRACLES - 2016 - LA COUR DES MIRACLES - 2016 - </span>
                            <span class="text-white font-aliseo">LA COUR DES MIRACLES - 2016 - LA COUR DES MIRACLES - 2016 - </span>
                            <span class="text-white font-aliseo">LA COUR DES MIRACLES - 2016 - LA COUR DES MIRACLES - 2016 - </span>
                            <span class="text-white font-aliseo">LA COUR DES MIRACLES - 2016 - LA COUR DES MIRACLES - 2016 - </span>
                            <span class="text-white font-aliseo">LA COUR DES MIRACLES - 2016 - LA COUR DES MIRACLES - 2016 - </span>
                            </div>
                        </div> 
                    </div> 
                </div>
                <div data-id="slider3" class="h-auto swiper-slide" data-swiper-parallax-opacity="0">
                    <div class="flex items-center justify-around h-full z-20 relative px-20 partie-1">
                        <div class="w-2/3 h-full text-center pr-20 flex flex-col items-center justify-around">
                        <h2 class="title-section z-0">
                            <span class="t1" style="filter:url(#pixelateMin);">electro alternativ</span>   
                        </h2>
                        <div class="scrollbar-container-slider mx-auto">
                            <div class="scrollbar-progress-slider" id="indicatorSlider"></div>
                        </div>
                        <div class="w-full mx-auto text-center flex flex-row mt-24 text-3xl font-aliseo">
                            <span class="p-5 font-aktura">#dev</span>
                            <nuxt-link to="/projects/electro-alternativ-2019" data-hover class="text-yellow mx-auto active-animatioon inline-block p-5 font-aktura hover:animate-pulse">en voir plus</nuxt-link> 
                            <span class="p-5 text-yellow">2019</span>
                            </div>
                        </div>
                        <div class="h-full w-1/3 items-center grid grid-cols-1">
                            <div class="h-full w-full m-auto flex justify-around items-center" style="backdrop-filter: saturate(100%);">
                                <img class="w-full h-full bg-cover bg-center object-cover  bg-yellow  mx-auto tilt-elem absolute" style="transform: translateZ(100px); filter:url(#pixelateOnSlide) saturate(0);" src="~/assets/img/projects/electro-alternativ-2019/cover-intro.jpg" />                       
                                <div class="w-[350px] h-[350px] mx-auto active-animatioon  tilt-elem absolute" data-tilt-perspective="550" style="transform: translateZ(0px)" data-tilt-reverse="true" data-tilt-scale="1.1"></div>
                                <img class="w-[350px] h-[350px] mx-auto tilt-elem absolute" style="transform: translateZ(100px);" src="~/assets/img/projects/electro-alternativ-2019/article-ea1.jpg" />                       
                                <div class="h-[350px] w-[350px] mx-auto border-2 border-dotted border-yellow tilt-elem absolute" style="transform: translateZ(200px)" data-tilt-reverse="true"  data-tilt-perspective="500" data-tilt-scale="0.9"></div>
                            </div>
                        </div>
                    </div>
                    <div class="separateur horizonslider text-2xl sep z-10 relative partie-2">
                        <div class="animate-horizontalTextScrolling">
                            <span class="text-yellow font-aliseo">ELECTRO ALTERNATIV - 2019 - ELECTRO ALTERNATIV - 2019 - </span>
                            <span class="text-yellow font-aliseo">ELECTRO ALTERNATIV - 2019 - ELECTRO ALTERNATIV - 2019 - </span>
                            <span class="text-yellow font-aliseo">ELECTRO ALTERNATIV - 2019 - ELECTRO ALTERNATIV - 2019 - </span>
                            <span class="text-yellow font-aliseo">ELECTRO ALTERNATIV - 2019 - ELECTRO ALTERNATIV - 2019 - </span>
                            <span class="text-yellow font-aliseo">ELECTRO ALTERNATIV - 2019 - ELECTRO ALTERNATIV - 2019 - </span>
                            <span class="text-yellow font-aliseo">ELECTRO ALTERNATIV - 2019 - ELECTRO ALTERNATIV - 2019 - </span>
                        </div> 
                        <div class="rotate-180"> 
                            <div class="animate-horizontalTextScrolling ">
                            <span class="text-white font-aliseo">ELECTRO ALTERNATIV - 2019 - ELECTRO ALTERNATIV - 2019 - </span>
                            <span class="text-white font-aliseo">ELECTRO ALTERNATIV - 2019 - ELECTRO ALTERNATIV - 2019 - </span>
                            <span class="text-white font-aliseo">ELECTRO ALTERNATIV - 2019 - ELECTRO ALTERNATIV - 2019 - </span>
                            <span class="text-white font-aliseo">ELECTRO ALTERNATIV - 2019 - ELECTRO ALTERNATIV - 2019 - </span>
                            <span class="text-white font-aliseo">ELECTRO ALTERNATIV - 2019 - ELECTRO ALTERNATIV - 2019 - </span>
                            <span class="text-white font-aliseo">ELECTRO ALTERNATIV - 2019 - ELECTRO ALTERNATIV - 2019 - </span>
                            </div>
                        </div> 
                    </div> 
                </div>
            </div>
          </div>
          <!-- NAVIGATION -->

          <div data-navigation class="absolute top-1/2 -translate-y-1/2 right-0 rotate-90">
            <span class="text-yellow inline-block swiper-button-prev font-aliseo leading-[10px] text-2xl" @click="toSlide()">&#60;</span>
            <div id="elNavigator" class="text-white inline-block font-bold">
            </div> 
            <span class="text-yellow inline-block swiper-button-next font-aliseo leading-[10px] text-2xl" @click="toSlide()">&#62;</span> 
          </div>
        </div>
      </Client-only>
</template>
<style lang="postcss">
/* Swiper */
   #slider { @apply w-full border-2 border-yellow py-20 ;height:calc(100vh - 210px); }
  .swiper { @apply h-full }
  .swiper-slide { @apply h-full; opacity:0!important; }
  .swiper-slide-active { @apply h-full; opacity:1!important; }
/* Swiper : thumbs */
  .swiper-thumbs { @apply absolute w-screen top-0 right-0 z-10 origin-top-left translate-x-full rotate-90 }
  .swiper-thumbs ul { @apply p-0 m-0 inline-flex w-full }
  .swiper-thumbs ul li { @apply leading-10 flex-grow-[1] text-center font-bold text-lg }
  .swiper-thumbs-button.active { @apply  bg-black text-white }
/* Swiper : controls */
  .scrollbar-container-slider { @apply h-[5px] w-1/2 bg-white; }
  .scrollbar-progress-slider { @apply w-0 bg-yellow h-[5px];}
  .bulletActive { @apply bg-yellow animate-spin duration-1000}
  .swiper-pagination > .swiper-pagination-bullet { @apply bg-white mix-blend-difference }
/* Others */
  .fontblur { @apply bg-cover bg-no-repeat w-full h-full absolute bg-opacity-5 blur-sm bg-black saturate-100}
  .content-left { @apply absolute w-1/3 h-full bg-contain bg-no-repeat }
  .content-right { @apply relative block w-2/3 top-0 translate-y-0 duration-500 transition-all left-1/3 pr-10}
</style>
<style>

.agenda-slug .fontblur {
 filter:blur(50px);
 opacity:1
}
.agenda-slug .swiper-button-next,
.agenda-slug .swiper-button-prev {
 display:none
}


.agenda-slug .content-right {
 top:50%;
 transform:translateY(-50%)
}

  .directGlitch {
    -webkit-filter: url("#glitch");
    filter: url("#glitch");

  }
  .glitchy:hover {
    -webkit-filter: url("#glitch");
    filter: url("#glitch");
  }
  .meta {
    min-height:175px;
  }
  .clipPath {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
  .swiper.directGlitch .meta .author{
     opacity:0;
     transition: all 0s ease;
  }
  .swiper .meta .author{
     opacity:1;
     transition: all 1s ease;
  }
  .fadeFlyer-enter-active, .fadeFlyer-leave-active {
    transition: all .5s ease-out;
    -webkit-filter: url("#glitch");
    filter: url("#glitch");
  }
  .fadeFlyer-enter, .fadeFlyer-leave-to {
    clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
    transform: translate(0%, -100%);
    transition: all .0s ease-out;
    filter:blur(10px);
  }

  .fadeOne-enter-active, .fadeOne-leave-active {
    transition: all .5s ease-out;
    -webkit-filter: url("#glitch");
    filter: url("#glitch");
  }
  .fadeOne-enter, .fadeOne-leave-to {
    clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
    transform: translate(0%, 100%);
    transition: all .0s ease-out;
    filter:blur(10px);
  }

  .fadeDate-enter-active, .fadeDate-leave-active {
    transition: all .3s ease-out;
    transition-delay: 0.3s;
    -webkit-filter: url("#glitch");
    filter: url("#glitch");
  }
  .fadeDate-enter, .fadeDate-leave-to {
    clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
    transform: translate(0%, 100%);
    transition: all .0s ease-out;
    filter:blur(5px);
  }

  .fadeTwo-enter-active, .fadeTwo-leave-active {
    transition: all .5s ease-out;
    transition-delay: 0.3s;
  }
  .fadeTwo-enter, .fadeTwo-leave-to {
    clip-path: polygon(0% 100%, 100% 100%, 0% 100%, 0% 100%);
    transform: translate(0%, -100%);
    transition: all .0s ease-out;
    filter:blur(5px);
  }

  .fadeTree-enter-active, .fadeTree-leave-active {
    transition: all .5s ease-out;
    transition-delay: 0.5s;
  }
  .fadeTree-enter, .fadeTree-leave-to {
    clip-path: polygon(0% 100%, 100% 100%, 0% 100%, 0% 100%);
    transform: translate(0%, -100%);
    transition: all .0s ease-out;

  }


</style>
<script>
export default {
  data() {
    return {
      routing: '',
      active: false,
      indexed: 0,
      swiperOption: {
        watchSlidesProgress: true,
        allowTouchMove:false,
        loop: false,
        slidesPerView: '1',
        centeredSlides: true,
        parallax: {
          enabled : true
        },
        autoplay: {
          enabled : true,
          delay: 10000,
        },
        spaceBetween: 0,
        effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '#elNavigator',
          clickable: true,
          bulletActiveClass: "bulletActive",
          dynamicBullets: false
        }
      }
    }
  },
  methods: {
    swiperRedied(swiper) {
      console.log("Swiper ready !")
      VanillaTilt.init(document.querySelectorAll(".tilt-elem"), {
        "mouse-event-element": "#slider",
        max:10,
      });
      this.$gsap.to(".scrollbar-progress-slider", {width: '100%',  duration: 10});
    },
    sliderMove() {
      console.log( "Slider : On move touch")
    },
    slideChanged() {
        this.indexed = this.$refs.swiperTop.swiper.activeIndex;
        console.log( "Slider : Switched ", this.indexed)
    },
    toSlide() {
      console.log("Slide actuel : ", this.indexed)
    },
    onSwiperSlideChangeTransitionStart() {
      console.log("Transition Start")
      this.$refs.swiperTop.classList.add("directGlitch");
      this.$gsap.to(".scrollbar-progress-slider", {width: '0%',  duration: 0});

    },
    onSwiperSlideChangeTransitionEnd() {
      console.log("Transition End")
      this.$refs.swiperTop.classList.remove("directGlitch");
      this.$gsap.to(".scrollbar-progress-slider", {width: '100%',  duration: 10});
    },
    clickSlide(i, reallyIndex) {
      console.log( "Click on slider : "+ i)
      this.indexed = i
    }
  },
  mounted() {
    
  }
}
</script>
