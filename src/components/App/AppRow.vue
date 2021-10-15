<template>
  <div class='row'>
    <div class="container">
      <div class="row__inner">
        <h6 class="row__title">
          {{ title }}
        </h6>
        <button class="row__arrow row__arrow--prev btn-clear"
        @click='setPrevSlide()'
        >
          <img src="@/assets/images/arrow-right.svg" alt="">
        </button>
        <button class="row__arrow row__arrow--next btn-clear"
        @click='setNextSlide()'
        >
          <img src="@/assets/images/arrow-right.svg" alt="">
        </button>
        <swiper class="row__slider"
        :slides-per-view="4"
        :space-between="20"
        :modules='modules'
        :navigation="{
          nextEl: '.row__arrow--next',
          prevEl: '.row__arrow--prev',
        }"
        ref='rowSlider'
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
  setup () {
    return{
      modules: [Navigation],
    }
  },
  data() {
    return {
      rowSwiper: this.$refs.rowSlider,
    }
  },
  methods: {
    setPrevSlide() {
      this.$refs.rowSlider.slidePrev()
    },
    setNextSlide() {
      this.$refs.rowSlider.slideNext()
    },
  },
  components: {
    AppRowSlide,
    Swiper,
    SwiperSlide
  },
}
</script>