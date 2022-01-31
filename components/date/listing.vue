<template>
  <section id="date">
	<!-- 2021 -->
	<h4 class="text-left px-[5rem] w-full leading-20 text-black text-5xl font-garamond bg-white">2021</h4>
 	<article class="past">
 		<div class="event">
 			<div class="date">Dec. 5, 2021</div>
 			<div class="city">Besançon <span class="country">FR</span></div>
 			<a class="venue" alt="Link to place" href="https://www.facebook.com/bains.douches.5/" target="_blank">@Bains Douches Battant</a>
 		</div>
 		<div class="lineup">
			<div class="additional">
			</div>
			<div class="with">
				<span></span>
			</div>
			<div class="info">
				<a class="party" alt="Link to event" href="https://www.facebook.com/events/350449225941183/?event_time_id=637614740557962" target="_blank">Festival Hands In The Dark</a>		
			</div>
 		</div>
 	</article>
 	<article class="past">
 		<div class="event">
 			<div class="date">Oct. 22, 2021</div>
 			<div class="city">Grenoble <span class="country">FR</span></div>
 			<a class="venue" alt="Link to place" href="https://www.facebook.com/amperagegrenoble/" target="_blank">@L'Ampérage</a>
 		</div>
 		<div class="lineup">
			<div class="additional">
			</div>
			<div class="with">
				<span>+ TBA</span>
			</div>
			<div class="info">
				<span class="party"></span>		
			</div>
 		</div>
 	</article>
 	<article class="past">
 		<div class="event">
 			<div class="date">Oct. 14, 2021</div>
 			<div class="city">Toulouse <span class="country">FR</span></div>
 			<a class="venue" alt="Link to place" href="https://www.facebook.com/unemaisondada/" target="_blank">@Dada*</a>
 		</div>
 		<div class="lineup">
			<div class="additional">
			</div>
			<div class="with">
				<a alt="Spotify Ascending Divers" href="https://open.spotify.com/artist/7EJzDbxwSToJld90sR9S4N?autoplay=true" target="_blank">+ Ascending Divers <i>(mix)</i></a>
			</div>
			<div class="info">
				(*) dans le noir.		
			</div>
 		</div>
 	</article>
 	<article class="past">
 		<div class="event">
 			<div class="date">Aug. 27, 2021</div>
 			<div class="city">Toulouse <span class="country">FR</span></div>
 			<a class="venue" alt="Link to place" href="http://www.theatre2lacte-lering.com/lering/" target="_blank">@Le Ring</a>
 		</div>
 		<div class="lineup">
			<div class="additional">
				<span class="border-2 p-1 border-white circle rounded-full w-10 h-10 leading-10">Co.</span>
				<span class="border-2 p-1 border-white circle rounded-full w-10 h-10 leading-10">Ot.</span>
			</div>
			<div class="with">
				<span>+ Rites, live improvisation/performance with David Haudrechy <i>(saxophone)</i> & Cie</span>
				<a alt="Website Celuiquiditquiest" href="https://celuiquiditquiest.com/" target="_blank">+ Celui Qui Dit Qui Est</a>
			</div>
			<div class="info">
			</div>
 		</div>
 	</article>
	<!-- 2017 -->
	<h4 class="text-left px-[5rem] w-full leading-20 text-black text-5xl font-garamond bg-white">2017</h4>
 	<article class="past">
 		<div class="event">
 			<div class="date">May 19, 2017</div>
 			<div class="city">Rotterdam <span class="country">NL</span></div>
 			<div class="venue">@V2</div>
 		</div>
 		<div class="lineup">
			<div class="additional">
				<span class="border-2 p-1 border-white circle rounded-full ">Co.</span>
			</div>
			<div class="with">
				<a alt="Website Klara Ravat" href="https://www.klararavat.com/" target="_blank">with a visual performance by Klara Ravat</a>
				<span>+ Joost Rekveld & Andrey Smirnov</span> 
				<span>+ Tijs Ham & Birk Nygaard</span>
			</div>
			<div class="info">
				<span class="party">Klankworm</span>		
			</div>
 		</div>
 	</article>
  </section>
</template>
<style lang="postcss">
	#date{ @apply m-0 w-full text-white relative transition-all duration-1000;}
	article{ @apply p-[5rem] bg-black border-b border-white;}
	.past{ @apply opacity-70;}

	.event{ @apply flex justify-between w-full items-end h-[100px] font-garamond;}
		.date{ @apply w-1/4 text-left text-4xl;}
		.city{ @apply font-english text-[50px] leading-[100%];}
			.country{ @apply text-lg;}
		.venue{ @apply w-1/4 text-right text-[30px] font-english leading-10 hover:opacity-50 cursor-pointer;}
			.party{ @apply text-2xl block  hover:line-through  cursor-pointer;}

	.lineup{ @apply flex justify-between w-full items-baseline h-[100px] font-garamond;}
		.additional{ @apply w-1/4 text-left;}
		.with{ @apply text-lg leading-5 text-center;}
		.with span{ @apply block;}
		.info{ @apply w-1/4 text-right text-lg;}


</style>
<script>
export default {
	methods: {
		scrollAnimation() {
			this.$gsap.utils.toArray("article").forEach(e => {
			var date = e.getElementsByClassName('date');
			var city = e.getElementsByClassName('city');
			var venue = e.getElementsByClassName('venue');

			var dateEvent = this.$gsap.timeline({paused:true}), SplitText = new SplitType(date , {type:"chars"}), chars = SplitText.chars;
				dateEvent.from(chars, {delay: 0, duration: 0.5, opacity:0, y:-50,   ease:"power2.inOut", stagger: 0.1}, "+=0");
			var cityEvent = this.$gsap.timeline({paused:true}), SplitDate = new SplitType(city , {type:"chars"}), chars = SplitDate.chars;
				cityEvent.from(chars, {delay: 0, duration: 0.5, opacity:0, y:-50,   ease:"power2.inOut", stagger: 0.1}, "+=0");
			var venueEvent = this.$gsap.timeline({paused:true}), SplitDate = new SplitType(venue , {type:"chars"}), chars = SplitDate.chars;
				venueEvent.from(chars, {delay: 0, duration: 0.5, opacity:0, y:-50,  ease:"power2.inOut", stagger: 0.1}, "+=0");
            var blocArtiste = this.$gsap.timeline({
                  scrollTrigger: {
                        trigger: e,
                        start: "center bottom",
                        end: "center top",
                        scrub: false,
                        toggleActions: "play reverse play reverse",
                        onEnterBack: e => {
                          dateEvent.play();
                          cityEvent.play();
						  venueEvent.play();
                        },
                        onLeaveBack: e => {
                          dateEvent.reverse();
                          cityEvent.reverse();
						  venueEvent.reverse();
                        },
                        onEnter: e => {
                          dateEvent.play();
                          cityEvent.play();
						  venueEvent.play();
                        },
                        onLeave: e => {
                          dateEvent.reverse();
                          cityEvent.reverse();
						  venueEvent.reverse();
                        },
                        //markers: {startColor: "purple", endColor: "yellow", fontSize: "25px", fontWeight: "bold", indent: 0}
                  }
                }).fromTo(e, {  y: -100, opacity: 0, ease: "linear"}, {  y: 0, opacity: 1, ease: "lineary"});
			});
		}
	},
	mounted() {
		this.scrollAnimation();
		window.addEventListener('resize', this.scrollAnimation)
		if(this.$store.state.preloading === false) {
		//console.log("Page not loaded")
		} else {
		//console.log("Page loaded")
		}
	}
}
</script>
