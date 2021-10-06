<template>
  <div class='row'>
    <div class="container">
      <div class="row__inner">
        <h6 class="row__title">
          {{ title }}
        </h6>
        <swiper class="row__slider"
          :slides-per-view="4"
          :space-between="20"
        >
          <swiper-slide>
            <app-row-slide
            title='Abstract 3D work'
            owner='artstudio'
            price='0.034 ETH'
            autor='@artstudio'
            verifiedAccount
            ></app-row-slide>
          </swiper-slide>
          <swiper-slide>
            <app-row-slide
            title='Abstract 3D work'
            owner='artstudio'
            price='0.034 ETH'
            autor='@artstudio'
            verifiedAccount
            ></app-row-slide>
          </swiper-slide>
          <swiper-slide>
            <app-row-slide
            title='Abstract 3D work'
            owner='artstudio'
            price='0.034 ETH'
            autor='@artstudio'
            verifiedAccount
            ></app-row-slide>
          </swiper-slide>
          <swiper-slide>
            <app-row-slide
            title='Abstract 3D work'
            owner='artstudio'
            price='0.034 ETH'
            autor='@artstudio'
            verifiedAccount
            ></app-row-slide>
          </swiper-slide>
          <!-- <app-row-slide
          title=''
          owner=''
          price=''
          autor=''
          ></app-row-slide> -->
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import AppRowSlide from '@/components/App/AppRowSlide.vue'

// import { Swiper, SwiperSlide } from "@/node_modules/swiper/vue";
import 'swiper/swiper-bundle.min.css'

export default {
  props: {
    title: {
      type: String,
      default: 'The hottest products of this week',
    },
  },
  components: {
    AppRowSlide,
    // Swiper,
    // SwiperSlide
  },
}
</script>