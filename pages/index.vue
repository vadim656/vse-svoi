<template>
  <div class="bg-[#FBFBFB] text-[#333333] h-full">
    <section>
      <MainSlider />
    </section>
    <section>
      <TourNear />
    </section>
  </div>
</template>

<script>
import MainSlider from '../components/MainSlider.vue'
import TourNear from '../components/TourNear.vue'
export default { components: { MainSlider, TourNear } }
</script>
<style>
html {
  font-family: 'Oswald', sans-serif !important;
  letter-spacing: 0.05em;
  overflow-x: hidden;
}


</style>
