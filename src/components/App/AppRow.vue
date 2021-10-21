<template>
  <div class='row'
  ref='parentRow'
  >
    <div class="container">
      <div class="row__inner"
      
      >
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
        :watchSlidesProgress='true'
        :watchSlidesVisibility='true'
        >
          <swiper-slide
          @mouseenter="increaseIndex()"
          @mouseleave="reduceIndex()"
          v-for='slide in data'
          :key='slide'
          >
            <app-big-art
            :title='slide.title'
            :owner='slide.owner'
            :price='slide.price'
            ></app-big-art>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="container">
      <div class="row__inner"
      ref='slidesRow'
      :style='needHeight'
      >
        <splide
        :options='sliderOptions'
        >
          <splide-slide
          v-for='slide in data'
          :key='slide'
          @mouseenter="increaseIndex()"
          @mouseleave="reduceIndex()"
          >
            <app-big-art
            :title='slide.title'
            :owner='slide.owner'
            :price='slide.price'
            ></app-big-art>
          </splide-slide>
        </splide> 
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

import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';

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
  data() {
    return {
      sliderOptions:{
        gap: 20,
        pagination: false,
        perPage: 4,
        perMove: 1,
      },
      needHeight: null,
      data:[
        {
          title: 'Abstract 3D work',
          owner: 'artstudio',
          price: '0.034 ETH',
          autor: '@artstudio',
          verifiedAccount: true,
        },
        {
          title: 'Abstract 3D work',
          owner: 'artstudio',
          price: '0.034 ETH',
          autor: '@artstudio',
          verifiedAccount: true,
        },
        {
          title: 'Abstract 3D work',
          owner: 'artstudio',
          price: '0.034 ETH',
          autor: '@artstudio',
          verifiedAccount: true,
        },
        {
          title: 'Abstract 3D work',
          owner: 'artstudio',
          price: '0.034 ETH',
          autor: '@artstudio',
          verifiedAccount: true,
        },
        {
          title: 'Abstract 3D work',
          owner: 'artstudio',
          price: '0.034 ETH',
          autor: '@artstudio',
          verifiedAccount: true,
        },
        {
          title: 'Abstract 3D work',
          owner: 'artstudio',
          price: '0.034 ETH',
          autor: '@artstudio',
          verifiedAccount: true,
        },
        {
          title: 'Abstract 3D work',
          owner: 'artstudio',
          price: '0.034 ETH',
          autor: '@artstudio',
          verifiedAccount: true,
        },
      ]
    }
  },
  mounted () {
    this.setHeight()
  },
  methods: {
    setHeight() {
      let currRow = this.$refs.slidesRow
      let currHeight = currRow.offsetHeight

      this.needHeight = "height: " + (currHeight + 12) + 'px'
    },
    increaseIndex(){
      this.$refs.parentRow.classList.add('row--hover')
    },
    reduceIndex(){
      this.$refs.parentRow.classList.remove('row--hover')
    }
  },
  components: {
    AppBigArt,
    Swiper,
    SwiperSlide,
    Splide,
    SplideSlide,
  },
}
</script>