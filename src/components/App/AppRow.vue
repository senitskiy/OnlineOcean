<template>
  <div class='row'>
    <div class="container">
      <h6 class="row__title">
        {{ title }}
      </h6>
      <div class="row__slider"
        :slides-per-view="4"
        :space-between="20"
      >
        <app-row-slide
        title='Abstract 3D work'
        owner='Owner: artstudio'
        price='0.034 ETH'
        autor='@artstudio'
        ></app-row-slide>
        <!-- <app-row-slide
        title=''
        owner=''
        price=''
        autor=''
        ></app-row-slide> -->
      </div>
    </div>
  </div>
</template>

<script>
import AppRowSlide from '@/components/App/AppRowSlide.vue'

// import { Swiper, SwiperSlide } from 'swiper/vue';

// import 'swiper/swiper-bundle.css'
// import 'swiper/css/swiper.css'

export default {
  props: {
    title: {
      type: String,
      default: 'The hottest products of this week',
    },
  },
  components: {
    AppRowSlide,
  },
  // components: {
  //   Swiper,
  //   SwiperSlide,
  // },
}
</script>