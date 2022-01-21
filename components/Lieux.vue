<template>
  <section>
    <div class="lieux">

      <div class="container">

        <div class="wopper">
          <div class="marquee marqueelieu">
            <p>
              LES LIEUX - LES LIEUX - LES LIEUX - LES LIEUX - LES LIEUX - LES LIEUX -
            </p>
            <p >
              LES LIEUX - LES LIEUX - LES LIEUX - LES LIEUX - LES LIEUX - LES LIEUX -
            </p>
          </div>
        </div>

        <ul>
          <li id="abattoires">
              <div class="lieu-img">
                <img srcset="/images/lieux/Abattoirs-xl.webp 1440w, /images/lieux/Abattoirs-md.webp 1024w, /images/lieux/Abattoirs-xs.webp 767w"
                    sizes="(max-width: 1440px), (max-width: 1024px), (max-width: 767px)"
                    src="/images/lieux/Abattoirs-xs.webp" loading="lazy" alt="Les Abattoires - Toulouse" />
              </div>
              <Panthere :typee="'lieu'" />
              <div class="lieu-content">
                  <div class="center">
                      <h2>les abattoirs</h2>
                      <a href="https://www.google.com/maps/dir//les+abattoirs/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x12aebb6dfd01bc3b:0x1e32c9b07a10045f?sa=X&ved=2ahUKEwiUi8OekYjyAhXByIUKHQ0_D2kQ9RcwH3oECGEQBQ"  target="_blank">s'y rendre</a>
                  </div>
              </div>
          </li>
          <li id="bikini">
            <div class="lieu-img">
              <img srcset="/images/lieux/Bikini-xl.webp 1440w, /images/lieux/Bikini-md.webp 1024w, /images/lieux/Bikini-xs.webp 767w"
                  sizes="(max-width: 1440px), (max-width: 1024px), (max-width: 767px)"
                  src="/images/lieux/Bikini-xs.webp" loading="lazy" alt="Le Bikini - Toulouse" />
            </div>
              <Panthere  :typee="'lieu'" />
              <div class="lieu-content">
                  <div class="center">
                      <h2>le bikini</h2>
                      <a href="https://www.google.com/maps/dir//le+bikini/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x12aebe7ee871a669:0xb149601aacc445fd?sa=X&ved=2ahUKEwjwkeOSkYjyAhXQxYUKHZmXDGYQ9RcwHnoECF0QBA"  target="_blank">s'y rendre</a>
                  </div>
              </div>
          </li>
          <li id="cinema">
              <div class="lieu-img">
                <img srcset="/images/lieux/Cinema-ABC-xl.webp 1440w, /images/lieux/Cinema-ABC-md.webp 1024w, /images/lieux/Cinema-ABC-xs.webp 767w"
                    sizes="(max-width: 1440px), (max-width: 1024px), (max-width: 767px)"
                    src="/images/lieux/Cinema-ABC-xs.webp" loading="lazy" alt="Cinema ABC - Toulouse" />
              </div>
              <Panthere  :typee="'lieu'" />
              <div class="lieu-content">
                  <div class="center">
                      <h2>cinema abc</h2>
                      <a href="https://www.google.com/maps/dir/43.6580614,1.375866/Cinema+ABC/@43.6330325,1.370846,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x12aebc9ff855640f:0xaafde9d9f0d327e6!2m2!1d1.4439486!2d43.6090337"  target="_blank">s'y rendre</a>
                  </div>
              </div>
          </li>
          <li id="halle">
            <div class="lieu-img">
              <img srcset="/images/lieux/Halle-de-la-machine-xl.webp 1440w, /images/lieux/Halle-de-la-machine-md.webp 1024w, /images/lieux/Halle-de-la-machine-xs.webp 767w"
                  sizes="(max-width: 1440px), (max-width: 1024px), (max-width: 767px)"
                  src="/images/lieux/Halle-de-la-machine-xs.webp" loading="lazy" alt="Halle de la machine - Toulouse" />
            </div>
              <Panthere  :typee="'lieu'" />
              <div class="lieu-content">
                  <div class="center">
                      <h2>halle de la machine</h2>
                      <a href="https://www.google.com/maps/dir//Hall+de+la+machine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x12aebc4bcb5b53e3:0x64ca48cf32cf95ec?sa=X&ved=2ahUKEwixncLTkYjyAhURy4UKHVQ3BSsQ9RcwF3oECFkQBQ"  target="_blank">s'y rendre</a>
                  </div>
              </div>
          </li>
          <li id="metronum">
              <div class="lieu-img">
                <img srcset="/images/lieux/Metronum-xl.webp 1440w, /images/lieux/Metronum-md.webp 1024w, /images/lieux/Metronum-xs.webp 767w"
                    sizes="(max-width: 1440px), (max-width: 1024px), (max-width: 767px)"
                    src="/images/lieux/Metronum-xs.webp" loading="lazy" alt="Le Metronum - Toulouse" />
              </div>
              <Panthere  :typee="'lieu'" />
              <div class="lieu-content">
                  <div class="center">
                      <h2>le metronum</h2>
                      <a href="https://www.google.com/maps/dir//le+metronum/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x12aea35ba036bd85:0x2a2105d30116f851?sa=X&ved=2ahUKEwi1w4zqkYjyAhWHyYUKHTXnAugQ9RcwFHoECE8QBA"  target="_blank">s'y rendre</a>
                  </div>
              </div>
          </li>
          <li id="cuisines">
              <div class="lieu-img">
                <img srcset="/images/lieux/Saint-Pierre-des-cuisines-xl.webp 1440w, /images/lieux/Saint-Pierre-des-cuisines-md.webp 1024w, /images/lieux/Saint-Pierre-des-cuisines-xs.webp 767w"
                    sizes="(max-width: 1440px), (max-width: 1024px), (max-width: 767px)"
                    src="/images/lieux/Saint-Pierre-des-cuisines-xs.webp" loading="lazy" alt="Auditorium Saint Pierre des cuisines - Toulouse" />
              </div>
              <Panthere  :typee="'lieu'" />
              <div class="lieu-content">
                  <div class="center">
                      <h2>auditorium saint pierre des cuisines</h2>
                      <a href="https://www.google.com/maps/dir//Auditorium+Saint+Pierre+des+Cuisines/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x12aebb65db33b0d5:0xd949f78018046335?sa=X&ved=2ahUKEwiM-Yz7kYjyAhXxzIUKHeOWBEkQ9RcwE3oECEMQBA"  target="_blank">s'y rendre</a>
                  </div>
              </div>
          </li>
        </ul>
      </div>

    </div>
  </section>
</template>
<script>
  export default {
    data: () => ({
    }),
    computed: {

    },
    methods: {
      animationLieux() {
        if( window.innerWidth > 1024) {
            let leslieux = this.$gsap.timeline({
              scrollTrigger: {
                trigger: ".lieux .container",
                start: "top top+=450",
                end: "top top+=50",
                scrub: true
              }
            })
            .fromTo(".marqueelieu",
              { "font-size": "100px", "line-height": "100px","color": "#95165d", ease: 'power2.inOut'},
              { "font-size": "45px", "line-height": "75px","color": "#000", ease: 'power2.inOut'}
            )
        }
        if(window.innerWidth <= 1024) {
            let leslieux = this.$gsap.timeline({
              scrollTrigger: {
                trigger: ".lieux .container",
                start: "top top+=450",
                end: "top top+=50",
                scrub: true
              }
            })
            .fromTo(".marqueelieu",
              { "font-size": "75px", "line-height": "75px","color": "#95165d", ease: 'power2.inOut'},
              { "font-size": "35px", "line-height": "75px","color": "#000", ease: 'power2.inOut'}
            )
        }

        this.$gsap.utils.toArray(".lieu-content").forEach(e => {

          var lieu = e.getElementsByTagName('h2');
          var itineraire = e.getElementsByTagName('a');
          var mobile = e.parentNode;

          var titleLieu = this.$gsap.timeline({paused:true}), SplitLieu = new SplitType(lieu , {type:"words"}), words = SplitLieu.words;
              titleLieu.from(words, {delay: 0.2, duration: 0.5, opacity:0, y:-50, transformOrigin:"0% 50% 100",  ease:"power2.inOut", stagger: 0.1}, "+=0");

          var itineraireLieu = this.$gsap.timeline({paused:true}), SplitItineraire = new SplitType(itineraire , {type:"chars"}), chars = SplitItineraire.chars;
              itineraireLieu.from(chars, {delay: 0.2, duration: 0.5, opacity:0, y:100, transformOrigin:"0% 50% 100",  ease:"power2.inOut", stagger: 0}, "+=0");

          if( window.innerWidth > 767) {
              var blocLieu = this.$gsap.timeline({
                scrollTrigger: {
                      trigger: e,
                      start: "center+=75px bottom-=100px",
                      end: "center-=75px top+=75px",
                      scrub: false,
                      toggleActions: "play reverse play reverse",
                      onEnterBack: e => {
                        titleLieu.play();
                        itineraireLieu.play();
                      },
                      onLeaveBack: e => {
                        titleLieu.reverse();
                        itineraireLieu.reverse();
                      },
                      onEnter: e => {
                        titleLieu.play();
                        itineraireLieu.play();
                      },
                      onLeave: e => {
                        titleLieu.reverse();
                        itineraireLieu.reverse();
                      },
                      //markers: {startColor: "pink", endColor: "pink", fontSize: "25px", fontWeight: "bold", indent: 0}
                }
              }).fromTo(e, {  y: -100, opacity: 0, ease: "linear"}, {  y: 0, opacity: 1, ease: "linear"});
            }
            if( window.innerWidth <= 767) {
              var blocLieu = this.$gsap.timeline({
                scrollTrigger: {
                      trigger: mobile,
                      start: "top center+=100px",
                      end: "bottom center-=100px",
                      scrub: false,
                      toggleActions: "play reverse play reverse",
                      onEnterBack: e => {
                        titleLieu.play();
                        itineraireLieu.play();
                      },
                      onLeaveBack: e => {
                        titleLieu.reverse();
                        itineraireLieu.reverse();
                      },
                      onEnter: e => {
                        titleLieu.play();
                        itineraireLieu.play();
                      },
                      onLeave: e => {
                        titleLieu.reverse();
                        itineraireLieu.reverse();
                      },
                      //markers: {startColor: "pink", endColor: "pink", fontSize: "25px", fontWeight: "bold", indent: 0}
                }
              }).fromTo(e, {  y: -100, opacity: 0, ease: "linear"}, {  y: 0, opacity: 1, ease: "linear"});
            }
        });
        this.$gsap.utils.toArray(".lieu-img").forEach(e => {

          var img = e.getElementsByTagName('img');
          var mobile = e.parentNode;

          if( window.innerWidth > 767) {

              var imgFull = this.$gsap.from(img, {delay: 0, duration: 0.1, opacity:0, ease:"power2.inOut"});
              var blocImg = this.$gsap.timeline({
                scrollTrigger: {
                      trigger: e,
                      start: "top-=75px bottom-=100px",
                      end: "bottom-=300px top+=75px",
                      scrub: false,
                      toggleActions: "play reverse play reverse",
                      onEnterBack: e => {
                        imgFull.play();
                      },
                      onLeaveBack: e => {
                        imgFull.reverse();
                      },
                      onEnter: e => {
                        imgFull.play();
                      },
                      onLeave: e => {
                        imgFull.reverse();
                      },
                    //  markers: {startColor: "blue", endColor: "blue", fontSize: "25px", fontWeight: "bold", indent: 0}
                }
              }).fromTo(e, {  y: 100, opacity: 0, ease: "linear"}, {  y: 0, opacity: 1, ease: "linear"});
          }

        });
        this.$gsap.utils.toArray(".intro-panth.lieu").forEach(e => {
          var panthOpa = this.$gsap.from(e, {delay: 0.5, duration: 0.5, opacity:0, ease:"power2.inOut"});
          if( window.innerWidth > 767) {
              var blocPanth = this.$gsap.timeline({
                scrollTrigger: {
                      trigger: e,
                      start: "center bottom-=100px",
                      end: "center top+=75px",
                      scrub: false,
                      toggleActions: "play reverse play reverse",
                      onEnterBack: e => {
                        panthOpa.play();
                      },
                      onLeaveBack: e => {
                        panthOpa.reverse();
                      },
                      onEnter: e => {
                        panthOpa.play();
                      },
                      onLeave: e => {
                        panthOpa.reverse();
                      },
                    //  markers: {startColor: "blue", endColor: "blue", fontSize: "25px", fontWeight: "bold", indent: 0}
                }
              }).fromTo(e, {  y: 0, opacity: 0, ease: "linear"}, {  y: 0, opacity: 1, ease: "linear"});
          }
        });

      },
    },
    mounted() {
      this.animationLieux();
      window.addEventListener('resize', this.animationLieux);
    }
  }
</script>
