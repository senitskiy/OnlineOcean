<template>
  <div class="row"
  ref='parentRow'
  >
    <div class="container">
      <div class="row__inner"
      ref='slidesRow'
      :style='needHeight'
      >
        <h6 class="row__title">
          {{ title }}
        </h6>
        <splide
        :options='sliderOptions'
        @splide:scrolled='hideNextArrow()'
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
      
    };
  },
  data() {
    return {
      sliderOptions:{
        gap: 20,
        pagination: false,
        perPage: 4,
        perMove: 1,
        speed: 500,
        arrowPath: 'M16.5533 15.0926L4.09294 27.5527C3.80475 27.8411 3.42003 28 3.00983 28C2.59962 28 2.21491 27.8411 1.92671 27.5527L1.00909 26.6353C0.411993 26.0375 0.411993 25.0659 1.00909 24.4691L11.4724 14.0058L0.997484 3.53093C0.709292 3.24251 0.550171 2.85803 0.550171 2.44805C0.550171 2.03761 0.709292 1.65312 0.997484 1.36448L1.9151 0.447313C2.20352 0.158894 2.58801 0 2.99822 0C3.40842 0 3.79314 0.158894 4.08133 0.447313L16.5533 12.9188C16.8422 13.2082 17.0008 13.5945 16.9999 14.0051C17.0008 14.4174 16.8422 14.8035 16.5533 15.0926Z',
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
    },
    hidePrevArrow(){

    },
    hideNextArrow(){
      alert(1)
      this.$refs.parentRow.classList.add('row--hide-next-arrow')
    }
  },
  components: {
    AppBigArt,
    Splide,
    SplideSlide,
  },
}
</script>