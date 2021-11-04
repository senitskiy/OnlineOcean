<template>
  <app-product-cover></app-product-cover>
  <app-product-info
  name='NFTmotors Series id - Yamaha R6'
  descr='Token is a platform that alms to build a new creative economy world where creators can use the Ethereum blockchain.'
  ></app-product-info>
  <app-row
  fire
  ></app-row>
</template>

<script>
import AppProductCover from '@/components/App/AppProductCover.vue'
import AppProductInfo from '@/components/App/AppProductInfo.vue'

export default {
  components: {
    AppProductCover,
    AppProductInfo,
  },
}
</script>