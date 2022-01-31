<template>
  <div>
    <Projects-bumpEffect class="h-screen fixed top-0 left-0 w-screen"/>
    <Date-listing class="pt-[100vh]" v-if="this.$store.state.preloading === false"/>
  </div>
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

      }
    },
    mounted() {
      this.animateOnScroll();
    }
  }
</script>
