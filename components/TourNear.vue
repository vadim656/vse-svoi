<template>
  <div>
    <div class="container mx-auto h-full ">
      <div>
        <div class="w-full flex my-12">
          <span class="text-[48px] uppercase font-bold"
            >Ближайшие экскурсии</span
          >
          <ShowAllButton class="ml-[50px]" />
        </div>
        <div class="w-full h-full  relative block">
          <div class=" flex justify-between">
            <div class="block h-[400px]">
              <ProductV1 />
            </div>
            <div class="block h-[400px]">
              <ProductV1 />
            </div>
            <div class="block h-[400px]">
              <ProductV1 />
            </div>
            <div class="block h-[400px]">
              <ProductV1 />
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto h-full  ">
      <div>
        <div class="w-full flex my-12">
          <span class="text-[48px] uppercase font-bold"
            >Сезонные туры</span
          >
          <ShowAllButton class="ml-[50px]" />
        </div>
        <div class="w-full h-full  relative block">
          <div class=" flex justify-between">
            <div class="block h-[560px]">
              <ProductV2 />
            </div>
            <div class="block h-[560px]">
              <ProductV2 />
            </div>
            <div class="block h-[560px]">
              <ProductV2 />
            </div>
            <div class="block h-[560px]">
              <ProductV2 />
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- <section class="w-full bord h-[900px]">
      ddd
    </section> -->
  </div>
</template>

<script>
import ShowAllButton from './UI/ShowAllButton.vue'
import ProductV1 from './Product/Product-v1.vue'

export default {
  components: { ShowAllButton, ProductV1 }
}
</script>

<style></style>
