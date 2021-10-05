<template>
  <div class="row__slide">
    <div class="row__slide-top row-top">
      <div class="row-top__left">
        <p class="row__slide-title">
          {{ title }}
        </p>
        <p class="row__slide-owner">Owner: {{ owner }}</p>
      </div>
      <div class="row__slide-like row-top__right">
        <img src="@/assets/images/like.svg" alt="" />
        <span class="row__slide-count"> 121 </span>
      </div>
    </div>
    <div class="row__slide-imgwrapper">
      <img src="@/assets/images/temp/slide-1.jpg" alt="" />
    </div>
    <div class="row__slide-bottom row__bottom">
      <div class="row__bottom-left">
        <p class="row__slide-bid">Current bid:</p>
        <p class="row__slide-price">
          {{ price }}
        </p>
      </div>
      <div class="row__slide-account row__bottom-right">
        <div class="row__slide-imgwrapper">
          <img src="@/assets/images/temp/user-big-1.jpg" alt="" />
        </div>
        <div class="row__slide-tag">
          {{ autor }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    autor: {
      type: String,
      required: true,
    },
  },

};
</script>