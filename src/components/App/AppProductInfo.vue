<template>
  <div class="product-info">
    <div class="container">
      <div class="product-info__inner">
        <div class="product-info__videowrapper">

        </div>
        <div class="product-info__content">
          <div class="product-info__dots dots">
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
            <div class="product-info__auction auction">
              <p class="auction__text product-info__subtitle">
                Auction ending in
              </p>
              <ul class="auction__items">
                <li class="auction__item">
                  <p class="auction__numb">
                    {{ lastHours }}
                    <!-- {{ lastTrueHours }} -->
                  </p>
                  <p class="auction__time">
                    Hours
                  </p>
                </li>
                <li class="auction__item">
                  <p class="auction__numb">
                    {{ lastMins }}
                  </p>
                  <p class="auction__time">
                    Minutes
                  </p>
                </li>
                <li class="auction__item">
                  <p class="auction__numb">
                    {{ lastSeconds }}
                  </p>
                  <p class="auction__time">
                    Seconds
                  </p>
                </li>
              </ul>
              
            </div>
          </div>
          <div class="product-info__buttons">
            <app-button
            title='Open'
            view='purple'
            big
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
import moment from 'moment'

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
  },
  data() {
    return {
      moment: 0,

      endAuction: '2021-10-09T00:00:00',

      currTime: null,
      difference: null,

      lastHours: null,
      lastMins: null,
      lastSeconds: null,
    }
  },
  mounted () {
    
  },
  unmounted () {
    if (this.intervalId) clearInterval(this.intervalId)
  },
  created() {
    // Init moment.js
    this.moment = moment

    let currDate = new Date();
    

    this.currTime = this.moment(currDate)
    this.endAuction = this.moment(this.endAuction)

    this.lastHours = this.endAuction.diff(this.currTime, 'hours')
    // this.lastTrueHours = this.endAuction.diff(this.currTime, 'hours', true)
    this.lastMins = this.endAuction.diff(this.currTime, 'minutes') - this.lastHours * 60
    // this.lastSeconds = this.endAuction.diff(this.currTime, 'seconds') / 3600
    this.lastSeconds = (this.endAuction.diff(this.currTime, 'seconds') - this.lastHours * 3600) - (this.lastMins * 60)

    console.log([this.endAuction.diff(this.currTime, 'seconds'), this.lastHours * 3600])

    this.intervalId = setInterval(() => this.currTime = Date.now(), 1000);
  },
  methods: {
    startTimer(){
      
    },
    stopTimer(){

    },
  },
  computed: {
    productName() {
      const currId = this.$route.params.boxId
      let rightID = currId
      if (currId.length < 3){
        const needZero = 3 - currId.length
        rightID = '0'.repeat(needZero) + currId 
      }
      const stringWithId = this.name.replace(/id/i, '#' + rightID)
      return stringWithId
    },
    // localeDate() {
    //   return (new Date(this.currTime))
    // },
  },
}
</script>