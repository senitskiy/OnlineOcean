<template>
  <div class="product-cover">
    <div class="container">
      <div class="product-cover__imgwrapper">
        <img src="@/assets/images/temp/product-banner.jpg" alt="">
      </div>
      <app-profile
      user-id='233'
      view='cover'
      ></app-profile>
    </div>
  </div>
</template>

<script>
import AppProfile from '@/components/App/AppProfile.vue';

export default {
  components: {
    AppProfile,
  },
}
</script>