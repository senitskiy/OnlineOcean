<template>
  <app-product-cover
  ></app-product-cover>
  <open-box
  
  ></open-box>
  <app-art-panel
  text='In this box, you can win the following items:'
  ></app-art-panel>
  <app-row
  fire
  ></app-row>
</template>

<script>
import AppProductCover from '@/components/App/AppProductCover.vue'
import OpenBox from '@/components/Open/OpenBox.vue'
import AppArtPanel from '@/components/App/AppArtPanel.vue'

import axios from 'axios'

export default {
  title () {
    let needIndex = this.box.name.indexOf('-') + 1,
        needName = this.box.name.slice(needIndex, this.box.name.length)

    console.log(needIndex)

    return `Box Opening - ${needName}`
  },
  mounted () {
    this.getBox()
  },
  methods: {
    getBox() {
      axios.get(`/box/${this.$route.params.itemId}`)
        .then(function (response) {
          this.box = response
        })
    }
  },
  data() {
    return {
      box:{
        name: 'NFTmotors Series id - Yamaha R6',
      },
    }
  },
  components: {
    AppProductCover,
    OpenBox,
    AppArtPanel
  },
}
</script>