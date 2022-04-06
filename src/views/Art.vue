<template>
  <app-product-cover></app-product-cover>
  <app-product-info
  :name='art.name'
  :descr='art.descr'
  :tokenId='art.tokenId'
  :price='art.price'
  ></app-product-info>
  <app-row
  fire
  ></app-row>
</template>

<script>
import AppProductCover from '@/components/App/AppProductCover.vue'
import AppProductInfo from '@/components/App/AppProductInfo.vue'

// import axios from 'axios'

export default {
  title () {
//    let needIndex = this.art.name.indexOf('-') + 1,
  //      needName = this.art.name.slice(needIndex, this.art.name.length)

    //console.log(needIndex)

    return `Art - name`
  },
  mounted () {
    this.getArt()
  },
  methods: {
    getArt() {
      if (!this.art.name) {
        //if no params, go back to home page
        //happens if browers navigates directly here
        this.$router.push({ path: '/'});
      }
    }
  },
  data() {
    return {
      art:{
        // name: 'NFTmotors Series id - Yamaha R6',
        // descr: 'Token is a platform that aims to build a new creative economy world where creators can use the Ethereum blockchain.',
        name: this.$route.params.name ?? '',
        descr: this.$route.params.description ?? '',
        tokenId: this.$route.params.tokenId ?? '',
        price: this.$route.params.price ?? '',
      },
    }
  },
  components: {
    AppProductCover,
    AppProductInfo,
  },
}
</script>