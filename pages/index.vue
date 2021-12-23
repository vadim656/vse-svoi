<template>
  <div class="bg-[#FBFBFB] text-[#333333] h-full">
    <section>
      <MainSlider />
    </section>
    <section class="my-12 z-[99]">
      <PodborTourV1/>
    </section>
    <section>
      <TourNear />
    </section>
    <section class="w-full h-[700px] ">
      <div class="w-full container flex flex-col justify-between mx-auto">
        <h3 class="w-full flex justify-center font-bold font-48 uppercase my-12">
          ближайший тур
        </h3>
        <div class="w-full flex">
          <div class="w-5/12 flex flex-col gap-4  h-full pr-8">
            <div>Поездка в чечню</div>
            <div>Мы часто посещаем Чечню , поэтому решили рассказать поподробнее о народе , к которому вы так любите ездить в гости ️
                <br><br>
                1. Забота о стариках
                К пожилым людям в Чечне относятся с большим вниманием и уважением: лучшие продукты взрослые дети относят родителям, по утрам женщины прежде всего наводят порядок на их половине, а по вечерам, возвращаясь домой, сыновья сразу идут к матери и отцу, чтобы поделиться своими радостями и заботами 
                <br><br>
                1. Забота о стариках
                К пожилым людям в Чечне относятся с большим вниманием и уважением
                <br><br>
                1. Забота о стариках
                К пожилым людям в Чечне относятся с большим вниманием и уважением
                <br><br>
                1. Забота о стариках
                К пожилым людям в Чечне относятся с большим вниманием и уважением</div>
            <ShowAllButton class="max-w-[260px]">Купить билеты</ShowAllButton>
          </div>
          <div class="w-7/12">
            <SliderV2/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MainSlider from '../components/MainSlider.vue'
import TourNear from '../components/TourNear.vue'
import SliderV2 from '../components/Slider/templates/Slider-v2.vue'
import ShowAllButton from '../components/UI/ShowAllButton.vue'
import PodborTourV1 from '../components/UX/PodborTour-v1.vue'
export default {
  layout: 'Main',
  components: { MainSlider, TourNear, SliderV2, ShowAllButton, PodborTourV1 }
}
</script>
<style>

</style>
