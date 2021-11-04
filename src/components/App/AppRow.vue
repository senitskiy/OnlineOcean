<template>
  <div class="row"
  ref='parentRow'
  :class='fireStatus'
  >
    <div class="container">
      <div class="row__inner"
      ref='slidesRow'
      >
        <h6 class="row__title"
        ref='title'
        >
          {{ title }}
        </h6>
        <splide
        :options='options'
        @splide:mounted='sliderMounted'
        @splide:moved='sliderMove'
        @splide:drag='sliderMove'
        ref='splide'
        >
          <splide-slide
          v-for='slide in data'
          :key='slide'
          @mouseenter="increaseIndex()"
          @mouseleave="reduceIndex()"
          >
            <app-big-art
            :artId='slide'
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
    fire:{
      type: Boolean,
      default: false,
    },
  },
  setup() {
    let options = {
      gap: 20,
      pagination: false,
      perPage: 4,
      perMove: 1,
      speed: 500,
      waitForTransition: false,
      arrowPath: 'M16.5533 15.0926L4.09294 27.5527C3.80475 27.8411 3.42003 28 3.00983 28C2.59962 28 2.21491 27.8411 1.92671 27.5527L1.00909 26.6353C0.411993 26.0375 0.411993 25.0659 1.00909 24.4691L11.4724 14.0058L0.997484 3.53093C0.709292 3.24251 0.550171 2.85803 0.550171 2.44805C0.550171 2.03761 0.709292 1.65312 0.997484 1.36448L1.9151 0.447313C2.20352 0.158894 2.58801 0 2.99822 0C3.40842 0 3.79314 0.158894 4.08133 0.447313L16.5533 12.9188C16.8422 13.2082 17.0008 13.5945 16.9999 14.0051C17.0008 14.4174 16.8422 14.8035 16.5533 15.0926Z',
      breakpoints:{
        950:{
          perPage: 3,
        },
        768:{
          perPage: 2,
          gap: 15,
        },
        570:{
          perPage: 1,
        },
      },
    };
    function sliderMounted(splide){
      let prevArrow = splide._Components.Arrows.arrows.prev
      prevArrow.classList.add('hidden')
    }

    function sliderMove(splide){
      let currSlide = splide.index,
          sliderLength = splide.length,
          prevArrow = splide._Components.Arrows.arrows.prev,
          nextArrow = splide._Components.Arrows.arrows.next

      if (currSlide === 0){
        prevArrow.classList.add('hidden')
        nextArrow.classList.remove('hidden')
      } else if (currSlide + options.perPage === sliderLength){
        nextArrow.classList.add('hidden')
        prevArrow.classList.remove('hidden')
      } else{
        prevArrow.classList.remove('hidden')
        nextArrow.classList.remove('hidden')
      }
    }
    return {
      options,
      sliderMounted,
      sliderMove,
    };
  },
  data() {
    return {
      needHeight: null,
      data:[
        44, 332, 344, 233, 444, 3, 7, 8  
      ]
    }
  },
  mounted () {
    setTimeout(() => {
      this.setHeight()
    }, 1)
  },
  computed: {
    fireStatus() {
      return this.fire ? 'fire' : ''
    }
  },
  methods: {
    setHeight() {
      let trackHeight = this.$refs.splide.$el.clientHeight

      let splide = document.querySelectorAll('.splide')
      for (let i = 0; i < splide.length; i++){
        splide[i].style.height = trackHeight + 'px'
      }
    },
    increaseIndex(){
      this.$refs.parentRow.classList.add('row--hover')
    },
    reduceIndex(){
      this.$refs.parentRow.classList.remove('row--hover')
    },
  },
  components: {
    AppBigArt,
    Splide,
    SplideSlide,
  },
}
</script>