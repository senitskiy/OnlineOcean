<template>
  <div class="product-info">
    <div class="container">
      <div class="product-info__inner">
        <div class="product-info__videowrapper">
          <video class='product-info__video' src="@/assets/videos/ex-1.mp4"
          muted loop
          ref='productVideo'
          ></video>
          <button class="product-info__play btn-clear"
          @click='toggleVideo()'
          >
            <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.5766 1.07545C2.5159 -0.106593 0.845215 0.861755 0.845215 3.23659V20.7618C0.845215 23.139 2.5159 24.1061 4.5766 22.9252L19.8945 14.1405C21.9559 12.958 21.9559 11.0422 19.8945 9.86004L4.5766 1.07545Z" fill="#EA4C89"/>
            </svg>
          </button>
          <app-profile
          userId='22'
          view='product-info'
          ></app-profile>
          <app-likes
          view='big'
          :info='info.likes'
          @toggledLike='toggleLike()'
          ></app-likes>
        </div>
        <div class="product-info__content">
          <div class="dots">
            <button class="btn-clear">
              <svg width="25" height="6" viewBox="0 0 25 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="22" cy="3" r="3" transform="rotate(-90 22 3)" fill="#C0C0C0"/>
                <circle cx="13" cy="3" r="3" transform="rotate(-90 13 3)" fill="#C0C0C0"/>
                <circle cx="3" cy="3" r="3" transform="rotate(-90 3 3)" fill="#C0C0C0"/>
              </svg>
            </button>
          </div>
          <h1 class="product-info__name">
            {{ productName }}
          </h1>
          <p class="product-info__descr">
            {{ descr }}
          </p>
          <div class="product-info__middle">
            <div class="product-info__price">
              <p class="product-info__subtitle">
                Current bid:
              </p>
              <p class="product-info__bid">
                70.034 ETH
              </p>
              <p class="product-info__cost">
                $ 48.85
              </p>
            </div>
            <div class="product-info__auction auction"
            v-show='auctionIsActive'
            >
              <p class="auction__text product-info__subtitle">
                Auction ending in
              </p>
              <vue-countdown
              :time='difference'
              v-slot="{ days, hours, minutes, seconds }"
              @end='onTimerEnd'
              >
                <ul class="auction__items">
                  <li class="auction__item">
                    <p class="auction__numb">
                      {{ (days * 24) + hours }}
                    </p>
                    <p class="auction__time">
                      Hours
                    </p>
                  </li>
                  <li class="auction__item">
                    <p class="auction__numb">
                      {{ minutes }}
                    </p>
                    <p class="auction__time">
                      Minutes
                    </p>
                  </li>
                  <li class="auction__item">
                    <p class="auction__numb">
                      {{ seconds }}
                    </p>
                    <p class="auction__time">
                      Seconds
                    </p>
                  </li>
                </ul>
              </vue-countdown>
            </div>
          </div>
          <div class="product-info__buttons">
            <app-button
            v-if="box"
            title='Open'
            view='purple'
            big
            link
            :href='boxOpenLink'
            ></app-button>
            <app-button
            title='Sell'
            view='yellow'
            big
            ></app-button>
            <app-button
            title='Buy'
            view='green'
            big
            ></app-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueCountdown from '@chenfengyuan/vue-countdown';

import AppProfile from '@/components/App/AppProfile.vue';
import AppLikes from '@/components/App/AppLikes.vue';

export default {
  props: {
    name: {
      type: String,
      required: true, 
    },
    descr: {
      type: String,
      required: true, 
    },
    box:{
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      endAuction: '2021-10-23T22:53:30',
      dateNow: 0,
      difference: 0,

      auctionIsActive: true,
      videoActive: false,
      likedBox: null,
      info:{
        likes:{
          count: 121,
          status: true,
        },
      },
    }
  },
  created () {
    this.dateNow = new Date()
    this.dateNeed = new Date(this.endAuction)
    this.difference = this.dateNeed - this.dateNow
  },
  computed: {
    productName() {
      const currId = this.$route.params.itemId
      let rightID = currId
      if (currId.length < 3){
        const needZero = 3 - currId.length
        rightID = '0'.repeat(needZero) + currId 
      }
      const stringWithId = this.name.replace(/id/i, '#' + rightID)
      return stringWithId
    },
    boxOpenLink(){
      return this.$route.params.itemId + '/open/'
    }
  },
  methods: {
    onTimerEnd() {
      this.auctionIsActive = false
    },
    toggleVideo(){
      if (this.videoActive === false){
        this.$refs.productVideo.play()
        this.videoActive = true
      } else{
        this.$refs.productVideo.pause()
        this.videoActive = false
      }
    },
    // setLike(value){
    //   this.info.likes.status = value.status
    // },
    toggleLike(){
      if(this.info.likes.status === false){
        this.info.likes.count++
      }else{
        this.info.likes.count--
      }
      this.info.likes.status = !this.info.likes.status
    }
  },
  
  components: {
    VueCountdown,
    AppProfile,
    AppLikes
  },
}
</script>