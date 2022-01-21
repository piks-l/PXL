<template>
  <section>
    <div class="main-content">
      <Intro :titre="'electro alternativ'"/>
    </div>
  </section>
</template>
<style scooped>
    .container li h3 span {
        cursor: pointer;
    }
</style>
<script>
  export default {
    data: () => ({
    }),
    computed: {

    },
    methods: {
      scrolltoID() {
        document.querySelectorAll(".imagehover h3 span").forEach((btn, index) => {
            var select = btn.getAttribute('class');
            if( this.$device.isDesktop) {
              var y = "75";
            } else {
              var y = "25";
            }
            btn.addEventListener("click", () => {
              this.$gsap.to(window, {duration: 1, scrollTo:{y:"#" + select, offsetY:y}});
            });
        });
      }
    },
    mounted() {
      this.scrolltoID();
    }
  }
</script>
