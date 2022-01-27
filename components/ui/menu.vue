<template>
  <menu>
    <span class="menu" v-if="this.$store.state.menu === true" @click="actMenu()">CLOSE</span>
    <span class="menu" v-else @click="actMenu()">
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
  methods: {
    ...mapActions({
        actMenu: 'actMenu', 
    }),
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
