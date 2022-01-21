<template>
  <menu>
    <span class="menu" v-if="this.$store.state.menu === true" @click="actMenu()">CLOSE</span>
    <span class="menu" v-else @click="actMenu()">MENU</span>
  </menu>
</template>
<style lang="postcss">
  menu {
     @apply bg-white;
  }
  .menu {
     @apply text-white;
  }
</style>
<script>
import {mapActions} from 'vuex'
export default {
  methods: {
    ...mapActions({
        actMenu: 'actMenu', 
    }),
  },
  mounted() {

  }
}
</script>
