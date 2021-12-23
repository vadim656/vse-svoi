<template>
  <div class="w-full container mx-auto h-[100px] flex justify-between items-center rounded-2xl bg-white box-1 z-[99]">
      <div class="flex gap-4 w-full justify-center relative border-r h-full items-center">
          <img class="w-6 h-6" src="../../assets/icons/map.png" alt="">
          <PodborSelectV1/>
      </div>
      <div class="flex gap-4 w-full justify-center relative border-r h-full items-center">
          <img class="w-6 h-6" src="../../assets/icons/map.png" alt="">
          <PodborSelectV2/>
      </div>
      <div class="w-full flex justify-center border-r h-full items-center">
           <a href="/" class="w-full flex justify-center border-r h-full items-center gap-4 cursor-pointer">
          <img src="../../assets/icons/people.png" alt="">
          <span>Человек</span>
      </a>
      </div>
      <a href="/" class="w-full flex justify-center border-r h-full items-center gap-4 gradient text-white cursor-pointer">
          <img src="../../assets/icons/search.png" alt="">
          <span>Поиск туров</span>
      </a>
      <a href="/" class="w-full flex justify-center h-full items-center cursor-pointer">Подобрать тур</a>
  </div>
</template>

<script>
import PodborSelectV1 from "./Select/PodborSelect-v1.vue";
import PodborSelectV2 from "./Select/PodborSelect-v2.vue";

export default {
    components: { PodborSelectV1, PodborSelectV2}
}
</script>

<style>

</style>