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

export default {

  components: {
    AppProductCover,
    OpenBox,
    AppArtPanel
  },
}
</script>