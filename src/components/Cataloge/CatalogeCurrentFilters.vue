<template>
  <div class="cataloge__current">
    <p class="cataloge__current-all">
      {{ allItems }}
    </p>
    <div class="cataloge__current-filters">
      <button class="cataloge__current-filter btn-clear"
      v-for='item in currentFilters.blockchains'
      :key='item'
      >
        <img class='current-filter-price__img' :src="blockchainImage(item)" alt="">
        {{ blockchainLabel(item) }}
        <img class='cataloge__current-filter--close' src="@/assets/images/close.svg" alt="">
      </button>
      <button class="cataloge__current-filter current-filter-price btn-clear"
      v-if='currentFilters.price.blockchain.label.length > 0'
      >
        <img class='current-filter-price__img' :src="currentFilters.price.blockchain.image">
        {{ priceInfo }}
        <img class='cataloge__current-filter--close' src="@/assets/images/close.svg" alt="">
      </button>
      <button class="cataloge__current-filter btn-clear">
        Action
        <img class='cataloge__current-filter--close' src="@/assets/images/close.svg" alt="">
      </button>
      <button class="cataloge__current-reset btn-clear">
        Clear All
      </button>
    </div>
    {{ currentFilters }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    currentFilters: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      allItems: '1 412 515 results',
    }
  },
  methods: {
    blockchainImage(value){
      let allBlockchains = this.allBlockchains
      let needValue = Object.values(allBlockchains).find((obj) => {
        return obj.value == value
      })

      return needValue.image
    },
    blockchainLabel(value) {
      let allBlockchains = this.allBlockchains
      let needValue = Object.values(allBlockchains).find((obj) => {
        return obj.value == value
      })

      return needValue.label
    }
  },
  computed: {
    ...mapGetters(['allBlockchains']),
    priceInfo() {
      let currPrice = this.currentFilters.price,
          addactiveInfo = '';

      if(currPrice.min === ''){
        addactiveInfo = '< ' + currPrice.max
      }else if(currPrice.max === ''){
        addactiveInfo = '> ' + currPrice.min
      }else{
        addactiveInfo = currPrice.min + ' - ' + currPrice.max
      }
      return currPrice.blockchain.label + ': ' + addactiveInfo
    },
  },
}
</script>