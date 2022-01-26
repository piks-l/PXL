<template>
  <section class="bg-black">
    <Date-listing />
  </section>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    data: () => ({
    }),
    computed: {

    },
    methods: {
      animateOnScroll() {
        let realHeight = (window.innerHeight / 2) - 100;
        let calc = 'bottom-='+realHeight+' bottom'
        this.$ScrollTrigger.create({start: 'top top',end : "max", markers: false, toggleClass: {className: 'pinnedDate', targets: '#date'}});
      },

    },
    mounted() {
      this.animateOnScroll();
    }
  }
</script>
