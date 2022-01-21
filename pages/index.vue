<template>
  <section class="bg-white" style="height:200vh;">
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
      scrolltoID() {
        let btn = document.querySelector('footer');
        btn.addEventListener("click", () => {
          this.$gsap.to(window, {duration: 1, scrollTo:{y:"0", offsetY:y}});
        });
      }
    },
    mounted() {
      this.scrolltoID();
    }
  }
</script>
