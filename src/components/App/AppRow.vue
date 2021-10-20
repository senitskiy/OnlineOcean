<template>
  <div class='row'>
    <div class="container">
      <div class="row__inner">
        <h6 class="row__title">
          {{ title }}
        </h6>
        <button class="row__arrow row__arrow--prev btn-clear"
        >
          <img src="@/assets/images/arrow-right.svg" alt="">
        </button>
        <button class="row__arrow row__arrow--next btn-clear"
        >
          <img src="@/assets/images/arrow-right.svg" alt="">
        </button>
        <swiper class="row__slider"
        :slides-per-view="4"
        :space-between="20"
        :modules='modules'
        navigation
        >
          <swiper-slide>
            <app-big-art
            title='Abstract 3D work'
            owner='artstudio'
            price='0.034 ETH'
            autor='@artstudio'
            verifiedAccount
            ></app-big-art>
          </swiper-slide>
          <swiper-slide>
            <app-big-art
            title='Abstract 3D work'
            owner='artstudio'
            price='0.034 ETH'
            autor='@artstudio'
            verifiedAccount
            ></app-big-art>
          </swiper-slide>
          <swiper-slide>
            <app-big-art
            title='Abstract 3D work'
            owner='artstudio'
            price='0.034 ETH'
            autor='@artstudio'
            verifiedAccount
            ></app-big-art>
          </swiper-slide>
          <swiper-slide>
            <app-big-art
            title='Abstract 3D work'
            owner='artstudio'
            price='0.034 ETH'
            autor='@artstudio'
            verifiedAccount
            ></app-big-art>
          </swiper-slide>
          <swiper-slide>
            <app-big-art
            title='Abstract 3D work'
            owner='artstudio'
            price='0.034 ETH'
            autor='@artstudio'
            verifiedAccount
            ></app-big-art>
          </swiper-slide>
          <swiper-slide>
            <app-big-art
            title='Abstract 3D work'
            owner='artstudio'
            price='0.034 ETH'
            autor='@artstudio'
            verifiedAccount
            ></app-big-art>
          </swiper-slide>
          <!-- <app-big-art
          title=''
          owner=''
          price=''
          autor=''
          ></app-big-art> -->
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import AppBigArt from '@/components/App/AppBigArt.vue'

import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'

export default {
  props: {
    title: {
      type: String,
      default: 'The hottest products of this week',
    },
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
  components: {
    AppBigArt,
    Swiper,
    SwiperSlide,
  },
}
</script>