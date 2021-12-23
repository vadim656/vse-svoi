<template>
  <div class="h-[800px] ">
    <swiper class="swiper h-[800px]" :options="swiperOption">
      <swiper-slide class=" cc flex relative">
        <img
          class="w-full h-full object-center object-cover absolute left-0 top-0 z-0"
          src="../assets/img/slider1.jpg"
          alt=""
        />
        <div
          class="z-[2] gray-6 flex flex-col justify-start w-full container mx-auto gap-12"
        >
          <div class="flex flex-col">
            <div class="uppercase text-[130px] text-left">туры по всей</div>
            <div class="uppercase text-[130px] text-left custom-h1 -mt-12">
              россии
            </div>
          </div>

          <div>
            <ul class="flex gap-4">
              <li
                v-for="(item, index) in roadRus"
                :key="index"
                class="px-8 py-4 border border-white rounded-full"
              >
                <a href="/" class="font-normal"> {{ item.name }}</a>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </swiper-slide>
      <swiper-slide class=" cc flex relative">
        <img
          class="w-full h-full object-center object-cover absolute left-0 top-0 z-0"
          src="../assets/img/slider1.jpg"
          alt=""
        />
        <div
          class="z-[2] gray-6 flex flex-col justify-start w-full container mx-auto gap-12"
        >
          <div class="flex flex-col">
            <div class="uppercase text-[130px] text-left">туры в горы</div>
            <div class="uppercase text-[130px] text-left custom-h1 -mt-12">
              россии
            </div>
          </div>

          <div>
            <ul class="flex gap-4">
              <li
                v-for="(item, index) in roadGory"
                :key="index"
                class="px-8 py-4 border border-white rounded-full"
              >
                <a href="/" class="font-normal"> {{ item.name }}</a>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </swiper-slide>
      <swiper-slide class=" cc flex relative">
        <img
          class="w-full h-full object-center object-cover absolute left-0 top-0 z-0"
          src="../assets/img/slider1.jpg"
          alt=""
        />
        <div
          class="z-[2] gray-6 flex flex-col justify-start w-full container mx-auto gap-12"
        >
          <div class="flex flex-col">
            <div class="uppercase text-[130px] text-left">туры на море</div>
            <div class="uppercase text-[130px] text-left custom-h1 -mt-12">
              россии
            </div>
          </div>

          <div>
            <ul class="flex gap-4">
              <li
                v-for="(item, index) in roadMore"
                :key="index"
                class="px-8 py-4 border border-white rounded-full"
              >
                <a href="/" class="font-normal"> {{ item.name }}</a>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </swiper-slide>
      <swiper-slide class=" cc flex relative">
        <img
          class="w-full h-full object-center object-cover absolute left-0 top-0 z-0"
          src="../assets/img/slider1.jpg"
          alt=""
        />
        <div
          class="z-[2] gray-6 flex flex-col justify-start w-full container mx-auto gap-12"
        >
          <div class="flex flex-col">
            <div class="uppercase text-[130px] text-left">туры в горы</div>
            <div class="uppercase text-[130px] text-left custom-h1 -mt-12">
              россии
            </div>
          </div>

          <div>
            <ul class="flex gap-4">
              <li
                v-for="(item, index) in roadGory"
                :key="index"
                class="px-8 py-4 border border-white rounded-full"
              >
                <a href="/" class="font-normal"> {{ item.name }}</a>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </swiper-slide>

      <div
        class="swiper-pagination swiper-pagination-bullets flex flex-col"
        slot="pagination"
      ></div>
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
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        loop: true,
        direction: 'vertical',
        centeredSlides: true,
        loopAdditionalSlides: 3,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
          renderBullet (index, className) {
            return `<span class="${className} swiper-pagination-bullet-custom">${index +
              1}</span>`
          }
        }
      },
      roadGory: [
        {
          link: '/1',
          name: 'Домбай'
        },
        {
          link: '/2',
          name: 'Архыз'
        },
        {
          link: '/3',
          name: 'Красная поляна'
        }
      ],
      roadMore: [
        {
          link: '/1',
          name: 'Анапа'
        },
        {
          link: '/2',
          name: 'Симферополь'
        },
        {
          link: '/3',
          name: 'Сочи'
        }
      ],
      roadRus: [
        {
          link: '/1',
          name: 'Однодневные'
        },
        {
          link: '/2',
          name: 'Курортные'
        },
        {
          link: '/3',
          name: 'Выходного дня'
        }
      ],
    }
  }
}
</script>

<style>
.custom-h1 {
  color: rgb(156, 149, 149);
  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: white;
}

.swiper {
  width: 100%;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
}

.swiper-pagination-bullet-custom {
  transition: all ease-in-out;
  font-size: 36px;
  opacity: 0.7;
}

.swiper-pagination-bullet-active {
  font-size: 48px;
  opacity: 0.7;
  /* color: #fff */
  background: linear-gradient(
    60deg,
    rgba(4, 191, 191, 1),
    rgba(2, 89, 89, 0.97)
  );
  background-clip: text;
  color: transparent;
}

.swiper-pagination-bullet-active-main::after {
  content: '';
  position: absolute;
  width: 180px;
  height: 2px;
  background: linear-gradient(
    60deg,
    rgba(4, 191, 191, 1),
    rgba(2, 89, 89, 0.97)
  );
  top: 50%;
  margin-left: 20px;
}

.swiper-container-vertical
  > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  width: 200px !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

/* .swiper-pagination-bullet {

    background: transparent !important;

} */

.swiper-pagination {
  height: 400px !important;
}

.swiper-pagination-bullet-active-prev-prev {
  padding-left: 20px;
  transition: all ease-in-out;
}

.swiper-pagination-bullet-active-prev {
  padding-left: 10px;
  transition: all ease-in-out;
}

.swiper-pagination-bullet-active-next-next {
  padding-left: 20px;
  transition: all ease-in-out;
}

.swiper-pagination-bullet-active-next {
  padding-left: 10px;
  transition: all ease-in-out;
}
</style>
