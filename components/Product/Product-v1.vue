<template>
  <div
    class="w-[400px] h-[400px] block rounded-[15px] overflow-hidden bg-white box-1"
  >
    <div class="w-full h-[250px] relative">
      <img
        class="object-cover absolute top-0 left-0 z-[0]"
        :src="data_img"
        alt=""
      />
      <div class="w-full flex justify-between z-[10] text-white relative">
        <div class="flex w-full mt-4">
          <div
            class="w-[50px] h-[50px]  rounded-full flex cc gradient text-white mx-4"
          >
            <div class="pl-1">5</div>
            <img src="../../assets/icons/star.png" alt="" />
          </div>
          <div class="h-[50] rounded-full flex cc gradient text-white px-6">
            {{ data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }} ₽
          </div>
        </div>
        <div
          class="flex flex-col items-end justify-center w-[90px] h-full rounded-tr-[15px] rounded-bl-[15px] px-4 font-14 warn-1 pt-4 pb-2"
        >
          <span>Сложность</span>
          <span>{{ data_complexity }}\5</span>
        </div>
      </div>
    </div>
    <div class="p-4 relative">
      <div class="w-full flex justify-between items-end">
        <a class="font-20 font-bold cursor-pointer uppercase hover:underline"
          >{{ data_name }}</a
        >
        <span class="font-normal font-14"
          >Людей: <span class="font-bold font-14">{{ data_people }}</span></span
        >
      </div>
      <div class="w-full flex justify-between items-end ">
        <ul class="font-18 pt-4">
          <li>Вид экскурсии: <span class="font-bold">{{ data_vid }}</span></li>
          <li>Продолжительность: <span class="font-bold">{{ data_time }}</span></li>
          <li>{{  data_category }}</li>
        </ul>
        <AddToCart />
      </div>
    </div>
  </div>
</template>

<script>
import AddToCart from '../UI/AddToCart.vue'
export default {
  components: { AddToCart },
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data() {
    return {
      data_name: this.data.name,
      data_vid: this.data.attributes[0].options[0],
      data_time: this.data.attributes[1].options[0],
      data_people: this.data.attributes[2].options[0],
      data_img: this.data.images[0].src,
      data_complexity: this.data.attributes[3].options[0],
      data_category: this.data.categories[0].id
    }
  },
  mounted() {
    const items = this.data
    for (let index = items; this.data.categories[0].id == 15; index++) {
      console.log(index);
      
    }
    
  }
}
</script>

<style></style>
