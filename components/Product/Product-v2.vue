<template>
  <div
    class="w-[400px] h-full absolute  box-border  rounded-[15px] overflow-hidden bg-white box-1"
  >
    <div class="w-full h-[250px] relative">
      <img
        class="object-cover absolute top-0 left-0 z-[0]"
        src="../../assets/img/product.jpg"
        alt=""
      />
      <div class="w-full flex justify-between z-[10] text-white relative">
        <div class="flex w-full mt-4">
          <div class="w-[50px] h-[50px]  rounded-full flex cc gradient text-white mx-4">
            <div class="pl-1">5</div>
            <img src="../../assets/icons/star.png" alt="">
          </div>
          <div class="h-[50] rounded-full flex cc gradient text-white px-6">1 200 ₽</div>
        </div>
        <div class="flex flex-col items-end justify-center w-[90px] h-full rounded-tr-[15px] rounded-bl-[15px] px-4 font-14 warn-1 pt-4 pb-2">
            <span>Сложность</span>
            <span>4\5</span>
        </div>
      </div>
    </div>
    <div class="p-4 relative">
      <div class="w-full flex justify-between items-end">
        <a class="font-20 font-bold cursor-pointer hover:underline">Горное настроение</a>
        <span class="font-normal font-14"
          >Людей: <span class="font-bold font-14">12</span></span
        >
      </div>
      <div class="w-full flex flex-col justify-between ">
        <ul class="font-18 pt-4">
          <li>Регион: <span class="font-bold">Архыз</span></li>
          <li>Продолжительность: <span class="font-bold">12 часов</span></li>
        </ul>
        <ul class="pt-4 list-disc pl-6">
            <li class="underline">Лик Христа</li>
            <li class="underline">Городище X века</li>
            <li class="underline">Прогулка в п.Романтик</li>
            <li class="underline">Конная прогулка</li>
            <li class="underline">Много фото на память</li>
            <li class="underline">Презент от организаторов</li>
        </ul>
        
      </div>
      <AddToCart />
    </div>
  </div>
</template>

<script>
import AddToCart from '../UI/AddToCart.vue'
export default { components: { AddToCart } }
</script>

<style></style>
