<template>
  <div>
    <div class="container mx-auto h-full">
      <div>
        <div class="w-full flex my-12 relative">
          <span class="text-[48px] uppercase font-bold"
            >Ближайшие экскурсии</span
          >
          <span
            class="absolute  left-[50%] text-[288px] text-[#EFEFEF] uppercase font-bold z-[0] select-none leading-none"
            >travel</span
          >
          <ShowAllButton class="ml-[50px]  z-[4]">Смотреть все</ShowAllButton>
        </div>
        <div class="w-full h-full  relative block">
          <div class=" flex justify-between gap-4">
            <ProductV1
              v-for="product in products"
              :key="product.id"
              :data="product"
              class="block h-[400px]"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto h-full  ">
      <div>
        <div class="w-full flex my-12 relative">
          <span class="text-[48px] uppercase font-bold">Сезонные туры</span>
          <span
            class="absolute  left-[30%] text-[288px] text-[#EFEFEF] uppercase font-bold z-[0] select-none leading-none"
            >tourism</span
          >
          <ShowAllButton class="ml-[50px] z-[4]">Смотреть все</ShowAllButton>
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
import axios from 'axios'

import ShowAllButton from './UI/ShowAllButton.vue'
import ProductV1 from './Product/Product-v1.vue'
import ShowAllButton1 from './UI/ShowAllButton.vue'

export default {
  components: { ShowAllButton, ProductV1, ShowAllButton1 },
  data () {
    return {
      products: []
    }
  },
  created () {
    axios
      .get('https://vse-svoi26.ru/wp/wp-json/wc/v3/products/', {
        auth: {
          username: 'ck_a1e76b0c4740131ec2a95e3710e1d143bc39758d',
          password: 'cs_37bfd52d190b6389298d594b76c101c48a4f252e'
        },
        params: {
          per_page: 4
        }
      })
      .then(response => {
        this.products = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style></style>
