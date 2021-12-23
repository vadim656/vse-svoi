<template>
  <swiper class="swiper h-[550px]  rounded-3xl" :options="swiperOption">
    <swiper-slide><img class="w-full h-full object-cover object-center" src="https://s0.rbk.ru/v6_top_pics/media/img/5/59/754542801227595.jpg" alt=""></swiper-slide>
    <swiper-slide><img class="w-full h-full object-cover object-center" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Achmat-Kadyrow-Mosche%2C_Grosny_2008.jpg" alt=""></swiper-slide>
    <swiper-slide><img class="w-full h-full object-cover object-center" src="https://img.gazeta.ru/files3/869/12137869/RIAN_5742477.HR-pic905-895x505-41934.jpg" alt=""></swiper-slide>


    <div class="swiper-button-prev" slot="button-prev">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="black" viewBox="0 0 24 24" stroke="black">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
</svg>
    </div>
    <div class="swiper-button-next" slot="button-next">

    </div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'swiper-example-navigation',
  title: 'Navigation',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>

<style scoped>
.swiper-button-prev, 
.swiper-button-next{
    padding: 30px;
    border-radius: 100%;
    background: linear-gradient(102.83deg, #04BFBF -6.67%, rgba(2, 89, 89, 0.97) 105.21%);
}

.swiper-button-prev::after, 
.swiper-button-next::after{
    font-size: 18px;
    color: #fff;
}

</style>
