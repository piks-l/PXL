<template>
  <section>
    <div class="main-content page-artistes">

      <Intro  :titre="'les artistes'"/>
      <Artistes />

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
      goto() {
        document.querySelectorAll(".imagehover h3 span").forEach((btn, index) => {
            var select = btn.getAttribute('class');
            if( this.$device.isDesktop) {
              var y = "75";
            } else {
              var y = "25";
            }
            btn.addEventListener("click", () => {
              this.$router.push('/lieux#'+select);
              this.$gsap.to(window, {delay: .8, duration: 1, scrollTo:{y:"#" + select, offsetY:y}});
            });
        });
      }
    },
    mounted() {
      this.goto();
    }
  }
</script>
