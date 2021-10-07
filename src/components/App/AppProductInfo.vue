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

                  </p>
                  <p class="auction__time">

                  </p>
                </li>
                <li class="auction__item">
                  <p class="auction__numb">

                  </p>
                  <p class="auction__time">
                    
                  </p>
                </li>
                <li class="auction__item">
                  <p class="auction__numb">

                  </p>
                  <p class="auction__time">
                    
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
  computed: {
    productName() {
      const currId = this.$route.params.boxId
      let rightID = currId
      if (currId.length < 3){
        const needZero = 3 - currId.length
        console.log(needZero)
        rightID = '0'.repeat(needZero) + currId 
      }
      const stringWithId = this.name.replace(/id/i, '#' + rightID)
      return stringWithId
    }
  },
}
</script>