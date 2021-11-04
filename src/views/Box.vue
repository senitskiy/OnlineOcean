<template>
  <app-product-cover
  ></app-product-cover>
  <app-product-info
  name='NFTmotors Series id - Yamaha R6'
  descr='Token is a platform that alms to build a new creative economy world where creators can use the Ethereum blockchain.'
  box
  ></app-product-info>
  <app-art-panel
  text='In this box, you can win the following items:'
  ></app-art-panel>
  <app-row
  fire
  ></app-row>
</template>

<script>
import AppProductCover from '@/components/App/AppProductCover.vue'
import AppProductInfo from '@/components/App/AppProductInfo.vue'
import AppArtPanel from '@/components/App/AppArtPanel.vue'

export default {
  setup () {
    

    return {}
  },
  components: {
    AppProductCover,
    AppProductInfo,
    AppArtPanel
  },
}
</script>