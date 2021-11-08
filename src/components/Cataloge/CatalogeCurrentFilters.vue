<template>
  <div class="cataloge__current">
    <p class="cataloge__current-all">
      {{ allItems }}
    </p>
    <div class="cataloge__current-filters"
    v-show='currentFilters !== defaultFiltersObject'
    >
      <button class="cataloge__current-filter btn-clear"
      v-for='item in this.currentOr'
      :key='item'
      @click='clearOption(item, currentFilters.or)'
      >
        <img class='current-filter-price__img' :src="item.image" alt="">
        {{ item.label }}
        <img class='cataloge__current-filter--close' src="@/assets/images/close.svg" alt="">
      </button>
      <button class="cataloge__current-filter btn-clear"
      v-for='item in currentFilters.blockchains'
      :key='item'
      >
        <img class='current-filter-price__img' :src="item.image" alt="">
        {{ item.label }}
        <img class='cataloge__current-filter--close' src="@/assets/images/close.svg" alt="">
      </button>
      <button class="cataloge__current-filter current-filter-price btn-clear"
      v-if='currentFilters.price.blockchain.label.length > 0'
      >
        <img class='current-filter-price__img' :src="currentFilters.price.blockchain.image">
        {{ priceInfo }}
        <img class='cataloge__current-filter--close' src="@/assets/images/close.svg" alt="">
      </button>
      <button class="cataloge__current-filter btn-clear"
      v-for='item in currentFilters.categories'
      :key='item'
      >
        <img class='current-filter-price__img' :src="item.image" alt="">
        {{ item.label }}
        <img class='cataloge__current-filter--close' src="@/assets/images/close.svg" alt="">
      </button>
      <button class="cataloge__current-filter btn-clear"
      v-for='item in currentFilters.collections'
      :key='item'
      >
        <img class='current-filter-price__img' :src="item.image" alt="">
        {{ item.label }}
        <img class='cataloge__current-filter--close' src="@/assets/images/close.svg" alt="">
      </button>
      <button class="cataloge__current-filter current-filter-rarity btn-clear"
      v-for='item in currentFilters.rarity'
      :key='item'
      >
        {{ item.label }}
        <img class='cataloge__current-filter--close' src="@/assets/images/close.svg" alt="">
      </button>
      <button class="cataloge__current-reset btn-clear"
      @click='clearAll()'
      >
        Clear All
      </button>
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
  },
  data() {
    return {
      allItems: '1 412 515 results',
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
    clearOption(value, parentArray){
      this.$emit('clearOption', value, parentArray)
    },
  },
  computed: {
    ...mapGetters(['allBlockchains']),
    currentOr(){
      if (this.currentFilters.or === 'all'){
        return false
      }else{
        console.log(this.currentFilters.or)
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
  },
}
</script>