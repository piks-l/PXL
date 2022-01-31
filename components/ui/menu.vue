<template>
  <menu>
    <span class="menu" v-if="this.$store.state.menu === true" @click="actMenu(), closeMenu()">X</span>
    <span class="menu" v-else @click="actMenu(), openMenu()">
      <svg class="btn__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 30">
          <rect class="nav-rect" width="40" height="2" x="8" y="8" fill="#FFFFFF"/>
          <rect class="nav-rect" width="40" height="2" x="8" y="14" fill="#FFFFFF"/>
          <rect width="40" height="2" x="8" y="20" fill="#FFFFFF"/>
      </svg>
    </span>
  </menu>
</template>
<style lang="postcss">
  menu {
     @apply px-0;
  }
  .menu {
     @apply text-white;
  }
  .btn__svg {
      width: 56px;
      pointer-events: none
  }
  
</style>
<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      height : '0',
    }
  },
  methods: {
    ...mapActions({
        actMenu: 'actMenu', 
    }),
    openMenu() {
      this.height = document.querySelector('header').offsetHeight;
      this.$gsap.to("header", {height:'100vh',delay: 0, duration:0.2, ease:"power2.linear"});
      var t1 = this.$gsap.timeline();
      if(this.height > 100) {
        t1.to('.logo-theme', {left: "-50%", x: '50%', duration: 0, delay:0 , ease: 'power2.easeOut'})
        .to('.logo-theme .char', {fontSize: "25px", duration: 0.1, delay:0  , ease: 'power2.easeOut', stagger: 0.1});
      }
      document.querySelector('html').classList.toggle("overflow-hidden")
    },
    closeMenu() {
      this.$gsap.to("header", {height:this.height+'px',delay: 0, duration:0.2, ease:"power2.linear"});
      var t2 = this.$gsap.timeline();
      if(this.height > 100) {
        t2.to('.logo-theme', {left: "0%", x: '0%', duration: 0, delay:0 , ease: 'power2.easeOut'})
        .to('.logo-theme .char', {fontSize: "100px", duration: 0.1, delay:0 , ease: 'power2.easeOut', stagger: 0.1});
      }
      document.querySelector('html').classList.toggle("overflow-hidden")
    },
    appearMenuIcons() {
      this.$gsap.from("menu", {delay: 3, duration:0.5, opacity:0,  ease:"power2.linear"});
    },
    revealMenuIcons() {
      let tl = this.$gsap.timeline({delay: 3.5});
      tl.from('.nav-btn__svg rect', {
          scale: 0,
          transformOrigin: "center right",
          duration: 0.6,
          ease: 'power4',
          stagger: 0.1
      }, 0.6)
      .to('.nav-rect', {
          scale: 0.8,
          transformOrigin: "center left",
          duration: 0.4,
          ease: 'power2',
          stagger: 0.1
      }, "-=0.6")
    },
    hoverMenuIcons() {
      let navBtn = document.querySelector('.menu');
      navBtn.addEventListener("mouseover", (e) => {
          this.$gsap.to('.nav-rect', {
              scaleX: 1,
              transformOrigin: "top left",
              duration: 0.4, 
              ease: "power4"
          });
      });
      navBtn.addEventListener("mouseout", (e) => {
          this.$gsap.to('.nav-rect', {
              scaleX: 0.8,
              transformOrigin: "top left",
              duration: 0.6, 
              ease: "power4"
          });
      });
    }
  },
  mounted() {
    this.appearMenuIcons();
    this.revealMenuIcons();
    this.hoverMenuIcons();
  }
}
</script>
