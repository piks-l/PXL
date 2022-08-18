<template>
  <div class="carousel-wrapper">
    <div v-swiper:mySwiper="options">
      <div class="swiper-wrapper">
        <div class="img-warpper swiper-slide">
          <img src="https://picsum.photos/200/100?random=1" />
        </div>
        <div class="img-warpper swiper-slide">
          <img src="https://picsum.photos/200/100?random=2" />
        </div>
        <div class="img-warpper swiper-slide">
          <img src="https://picsum.photos/200/100?random=3" />
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-bullets"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        slidesPerView: 3,
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>

<style >
.carousel-wrapper {
  padding: 40px;
  height: 300px;
  width: 100%;
}
 .carousel-wrapper .swiper-slide {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
 .carousel-wrapper .img-warpper img {
    margin: auto;
    width: 200px;
    height: 100px;
    background-image: linear-gradient(gray 100%, transparent 0);
  }
  .carousel-wrapper::v-deep.swiper-pagination-bullet-active {
    background-color: black;
  }

</style>
