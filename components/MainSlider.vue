<template>
  <div class="h-[800px] bord">
    <swiper class="swiper h-[800px]" :options="swiperOption">
      <swiper-slide class="bord cc flex">Slide 1</swiper-slide>
      <swiper-slide class="bord cc flex">Slide 2</swiper-slide>
      <swiper-slide class="bord cc flex">Slide 3</swiper-slide>

      <div class="swiper-pagination swiper-pagination-bullets " slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { directive } from 'vue-awesome-swiper'

export default {
  directives: {
    swiper: directive
  },
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
      return {
        swiperOption: {
          slidesPerView: 1,
          loop: true,
          direction: 'vertical',
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
            renderBullet(index, className) {
              return `<span class="${className} swiper-pagination-bullet-custom">${index + 1}</span>`
            }
          }
        }
      }
    }
}
</script>

<style>
.swiper-pagination-bullet-custom{
  transition: all ease-in-out;
  font-size:34px;
  opacity: 0.1;
}

 .swiper-pagination-bullet-active {
  font-size:64px;
  opacity: 0.7;
}


.swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {

    width: 200px !important;
}

.swiper-pagination{
  height: 400px !important;
}
</style>
