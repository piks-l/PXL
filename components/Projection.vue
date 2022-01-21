<template>
    <section>
      <div class="projections">
  
        <div class="container">
  
          <div class="wopper">
            <div class="marquee marqueeprojection">
              <p>
                PROJECTION  - PROJECTION - PROJECTION - PROJECTION - PROJECTION - PROJECTION -
              </p>
              <p>
                PROJECTION  - PROJECTION - PROJECTION - PROJECTION - PROJECTION - PROJECTION -
              </p>
            </div>
          </div>
  
          <ul>
            <li id="abattoires-projection">
                <div class="projection-img">a
                  <img src="/images/film-lisarovner.jpg" loading="lazy" alt="Les Abattoires - Toulouse" />
                </div>
                <Panthere :typee="'projection'" />
                <div class="projection-content">
                    <div class="center">
                        <h2>Sisters with Transistor</h2>
                        <h4>Lisa Rovner</h4>
                        <p>Cinéma ABC - Mardi 14 septembre à 20h30 - <b>7€</b> - <i>Réservation au guichet</i></p>
                        <a href="https://www.google.com/maps/dir/43.6580614,1.375866/Cinema+ABC/@43.6330325,1.370846,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x12aebc9ff855640f:0xaafde9d9f0d327e6!2m2!1d1.4439486!2d43.6090337"  target="_blank">s'y rendre</a>
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
        animationprojections() {
          if( window.innerWidth > 1024) {
              let lesprojections = this.$gsap.timeline({
                scrollTrigger: {
                  trigger: ".projections .container",
                  start: "top top+=450",
                  end: "top top+=50",
                  scrub: true
                }
              })
              .fromTo(".marqueeprojection",
                { "font-size": "100px", "line-height": "100px","color": "#95165d", ease: 'power2.inOut'},
                { "font-size": "45px", "line-height": "75px","color": "#000", ease: 'power2.inOut'}
              )
          }
          if(window.innerWidth <= 1024) {
              let lesprojections = this.$gsap.timeline({
                scrollTrigger: {
                  trigger: ".projections .container",
                  start: "top top+=450",
                  end: "top top+=50",
                  scrub: true
                }
              })
              .fromTo(".marqueeprojection",
                { "font-size": "75px", "line-height": "75px","color": "#95165d", ease: 'power2.inOut'},
                { "font-size": "35px", "line-height": "75px","color": "#000", ease: 'power2.inOut'}
              )
          }
  
          this.$gsap.utils.toArray(".projection-content").forEach(e => {
  
            var projection = e.getElementsByTagName('h2');
            var itineraire = e.getElementsByTagName('a');
            var mobile = e.parentNode;
  
            var titleprojection = this.$gsap.timeline({paused:true}), Splitprojection = new SplitType(projection , {type:"words"}), words = Splitprojection.words;
                titleprojection.from(words, {delay: 0.2, duration: 0.5, opacity:0, y:-50, transformOrigin:"0% 50% 100",  ease:"power2.inOut", stagger: 0.1}, "+=0");
  
            var itineraireprojection = this.$gsap.timeline({paused:true}), SplitItineraire = new SplitType(itineraire , {type:"chars"}), chars = SplitItineraire.chars;
                itineraireprojection.from(chars, {delay: 0.2, duration: 0.5, opacity:0, y:100, transformOrigin:"0% 50% 100",  ease:"power2.inOut", stagger: 0}, "+=0");
  
            if( window.innerWidth > 767) {
                var blocprojection = this.$gsap.timeline({
                  scrollTrigger: {
                        trigger: e,
                        start: "center+=75px bottom-=100px",
                        end: "center-=75px top+=75px",
                        scrub: false,
                        toggleActions: "play reverse play reverse",
                        onEnterBack: e => {
                          titleprojection.play();
                          itineraireprojection.play();
                        },
                        onLeaveBack: e => {
                          titleprojection.reverse();
                          itineraireprojection.reverse();
                        },
                        onEnter: e => {
                          titleprojection.play();
                          itineraireprojection.play();
                        },
                        onLeave: e => {
                          titleprojection.reverse();
                          itineraireprojection.reverse();
                        },
                        //markers: {startColor: "pink", endColor: "pink", fontSize: "25px", fontWeight: "bold", indent: 0}
                  }
                }).fromTo(e, {  y: -100, opacity: 0, ease: "linear"}, {  y: 0, opacity: 1, ease: "linear"});
              }
              if( window.innerWidth <= 767) {
                var blocprojection = this.$gsap.timeline({
                  scrollTrigger: {
                        trigger: mobile,
                        start: "top center+=100px",
                        end: "bottom center-=100px",
                        scrub: false,
                        toggleActions: "play reverse play reverse",
                        onEnterBack: e => {
                          titleprojection.play();
                          itineraireprojection.play();
                        },
                        onLeaveBack: e => {
                          titleprojection.reverse();
                          itineraireprojection.reverse();
                        },
                        onEnter: e => {
                          titleprojection.play();
                          itineraireprojection.play();
                        },
                        onLeave: e => {
                          titleprojection.reverse();
                          itineraireprojection.reverse();
                        },
                        //markers: {startColor: "pink", endColor: "pink", fontSize: "25px", fontWeight: "bold", indent: 0}
                  }
                }).fromTo(e, {  y: -100, opacity: 0, ease: "linear"}, {  y: 0, opacity: 1, ease: "linear"});
              }
          });
          this.$gsap.utils.toArray(".projection-img").forEach(e => {
  
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
          this.$gsap.utils.toArray(".intro-panth.projection").forEach(e => {
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
        this.animationprojections();
        window.addEventListener('resize', this.animationprojections);
      }
    }
  </script>
  
