<template>
  <app-product-cover></app-product-cover>
  <app-product-info
  :name='art.name'
  :descr='art.descr'
  ></app-product-info>
  <app-row
  fire
  ></app-row>
</template>

<script>
import AppProductCover from '@/components/App/AppProductCover.vue'
import AppProductInfo from '@/components/App/AppProductInfo.vue'

import axios from 'axios'

export default {
  title () {
    let needIndex = this.art.name.indexOf('-') + 1,
        needName = this.art.name.slice(needIndex, this.art.name.length)

    console.log(needIndex)

    return `Art - ${needName}`
  },
  mounted () {
    this.getArt()
  },
  methods: {
    getArt() {
      axios.get(`/art/${this.$route.params.itemId}`)
        .then(function (response) {
          this.art = response
        })
    }
  },
  data() {
    return {
      art:{
        name: 'NFTmotors Series id - Yamaha R6',
        descr: 'Token is a platform that alms to build a new creative economy world where creators can use the Ethereum blockchain.',
      },
    }
  },
  components: {
    AppProductCover,
    AppProductInfo,
  },
}
</script>