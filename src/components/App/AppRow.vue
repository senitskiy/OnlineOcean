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
        :modules='modules'
        :navigation="{
          nextEl: '.row__arrow--next',
          prevEl: '.row__arrow--prev',
        }"
        >
          <button class="row__arrow row__arrow--prev btn-clear">
            <img src="@/assets/images/arrow-right.svg" alt="">
          </button>
          <button class="row__arrow row__arrow--next btn-clear">
            <img src="@/assets/images/arrow-right.svg" alt="">
          </button>
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

import { Navigation } from 'swiper';

import { Swiper, SwiperSlide} from 'swiper/vue';

import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'

export default {
  props: {
    title: {
      type: String,
      default: 'The hottest products of this week',
    },
  },
  components: {
    AppRowSlide,
    Swiper,
    SwiperSlide
  },
  setup () {
    return{
      modules: [Navigation],
    }
  },
}
</script>