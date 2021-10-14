<template>
  <div class="cover">
    <div class="container">
      <div class="cover__inner">
        <div class="cover__info">
          <p class="cover__desc">
            The Larget NFT Marketplace
          </p>
          <h1 class="cover__title">
            Discover & Collect
            rate Digital Artwork
          </h1>
          <app-button
          title='Explore'
          ></app-button>
        </div>
        <div class="cover__imgwrapper">
          <img src="@/assets/images/cover-graphic.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/App/AppButton.vue';

export default {
  components: {
    AppButton,
  },
}
</script>