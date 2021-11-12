<template>
  <div class="cataloge__current">
    <p class="cataloge__current-all">
      {{ itemsLength + allItemsLabel }}
    </p>
    <div class="cataloge__current-filters">
      <button class="cataloge__current-filter btn-clear"
      v-for='item in this.currentOr'
      :key='item'
      @click='clearOption(item, currentFilters.or, "filterOr")'
      >
        <img class='current-filter-price__img' :src="item.image" alt="">
        {{ item.label }}
        <img class='cataloge__current-filter--close' src="@/assets/images/close.svg" alt="">
      </button>
      <button class="cataloge__current-filter btn-clear"
      v-for='item in currentFilters.blockchains'
      :key='item'
      @click='clearOption(item, currentFilters.blockchains, "filterBlockchains")'
      >
        <img class='current-filter-price__img' :src="item.image" alt="">
        {{ item.label }}
        <img class='cataloge__current-filter--close' src="@/assets/images/close.svg" alt="">
      </button>
      <button class="cataloge__current-filter current-filter-price btn-clear"
      v-if='currentFilters.price.blockchain.label.length > 0'
      @click='clearOption(item, currentFilters.blockchain, "filterPrice")'
      >
        <img class='current-filter-price__img' :src="currentFilters.price.blockchain.image">
        {{ priceInfo }}
        <img class='cataloge__current-filter--close' src="@/assets/images/close.svg" alt="">
      </button>
      <button class="cataloge__current-filter btn-clear"
      v-for='item in currentFilters.categories'
      :key='item'
      @click='clearOption(item, currentFilters.categories, "filterCategories")'
      >
        <img class='current-filter-price__img' :src="item.image" alt="">
        {{ item.label }}
        <img class='cataloge__current-filter--close' src="@/assets/images/close.svg" alt="">
      </button>
      <button class="cataloge__current-filter btn-clear"
      v-for='item in currentFilters.collections'
      :key='item'
      @click='clearOption(item, currentFilters.collections, "filterCollections")'
      >
        <img class='current-filter-price__img' :src="item.image" alt="">
        {{ item.label }}
        <img class='cataloge__current-filter--close' src="@/assets/images/close.svg" alt="">
      </button>
      <button class="cataloge__current-filter current-filter-rarity btn-clear"
      v-for='item in currentFilters.rarity'
      :key='item'
      @click='clearOption(item, currentFilters.rarity, "filterRarity")'
      >
        {{ item.label }}
        <img class='cataloge__current-filter--close' src="@/assets/images/close.svg" alt="">
      </button>
      <button class="cataloge__current-reset btn-clear"
      @click='clearAll()'
      v-if='showClearButton'
      >
        Clear All
      </button>
      {{ showClearButton }}
    </div>
    {{ defaultFiltersObject }}
    <br>
    <br>
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
    itemsLength:{
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      allItemsLabel: ' results',
      defaultFiltersObject: null,
    }
  },
  mounted () {
    this.defaultFiltersObject = this.currentFilters
  },
  methods: {
    clearAll() {
      this.$emit('clearAll', this.defaultFiltersObject)
    },
    clearOption(value, parentArray, parentName){
      this.$emit('clearOption', value, parentArray, parentName)
    },
  },
  computed: {
    ...mapGetters(['allBlockchains']),
    currentOr(){
      if (this.currentFilters.or === 'all'){
        return false
      }else{
        return this.currentFilters.or
      }
    },
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
    showClearButton(){
      let result = this.currentFilters === JSON.parse(JSON.stringify(this.defaultFiltersObject))
      return !result
    },
  },
}
</script>