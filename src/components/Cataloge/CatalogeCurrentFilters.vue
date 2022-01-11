<template>
  <div class="cataloge__current"
  :class='catalogeCurrentState'
  >
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
        <svg class='cataloge__current-filter--close' width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.66188 1.97037L6.63193 5.00063L9.66188 8.03074C10.1126 8.4816 10.1126 9.21193 9.66188 9.66279C9.43669 9.88798 9.14145 10.0007 8.84636 10.0007C8.55078 10.0007 8.25552 9.88815 8.03051 9.66279L4.9999 6.63234L1.96952 9.66276C1.74437 9.88795 1.4491 10.0006 1.15375 10.0006C0.858489 10.0006 0.563426 9.88812 0.338067 9.66276C-0.112622 9.2121 -0.112622 8.48174 0.338067 8.03071L3.36793 5.0006L0.337895 1.97037C-0.112794 1.51968 -0.112794 0.789178 0.337895 0.33849C0.788498 -0.111853 1.51858 -0.111853 1.96935 0.33849L4.99987 3.36874L8.03016 0.33849C8.48102 -0.111853 9.21119 -0.111853 9.6617 0.33849C10.1126 0.789178 10.1126 1.51968 9.66188 1.97037Z" fill="#3E3E3E" fill-opacity="0.7"/>
        </svg>
      </button>
      <button class="cataloge__current-filter btn-clear"
      v-for='item in currentFilters.blockchains'
      :key='item'
      @click='clearOption(item, currentFilters.blockchains, "filterBlockchains")'
      >
        <img class='current-filter-price__img' :src="item.image" alt="">
        {{ item.label }}
        <svg class='cataloge__current-filter--close' width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.66188 1.97037L6.63193 5.00063L9.66188 8.03074C10.1126 8.4816 10.1126 9.21193 9.66188 9.66279C9.43669 9.88798 9.14145 10.0007 8.84636 10.0007C8.55078 10.0007 8.25552 9.88815 8.03051 9.66279L4.9999 6.63234L1.96952 9.66276C1.74437 9.88795 1.4491 10.0006 1.15375 10.0006C0.858489 10.0006 0.563426 9.88812 0.338067 9.66276C-0.112622 9.2121 -0.112622 8.48174 0.338067 8.03071L3.36793 5.0006L0.337895 1.97037C-0.112794 1.51968 -0.112794 0.789178 0.337895 0.33849C0.788498 -0.111853 1.51858 -0.111853 1.96935 0.33849L4.99987 3.36874L8.03016 0.33849C8.48102 -0.111853 9.21119 -0.111853 9.6617 0.33849C10.1126 0.789178 10.1126 1.51968 9.66188 1.97037Z" fill="#3E3E3E" fill-opacity="0.7"/>
        </svg>
      </button>
      <button class="cataloge__current-filter current-filter-price btn-clear"
      v-if='currentFilters.price.blockchain.label.length > 0'
      @click='clearOption(this.currentFilters.price, this.currentFilters.price, "filterPrice")'
      >
        <img class='current-filter-price__img' :src="currentFilters.price.blockchain.image">
        {{ priceInfo }}
        <svg class='cataloge__current-filter--close' width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.66188 1.97037L6.63193 5.00063L9.66188 8.03074C10.1126 8.4816 10.1126 9.21193 9.66188 9.66279C9.43669 9.88798 9.14145 10.0007 8.84636 10.0007C8.55078 10.0007 8.25552 9.88815 8.03051 9.66279L4.9999 6.63234L1.96952 9.66276C1.74437 9.88795 1.4491 10.0006 1.15375 10.0006C0.858489 10.0006 0.563426 9.88812 0.338067 9.66276C-0.112622 9.2121 -0.112622 8.48174 0.338067 8.03071L3.36793 5.0006L0.337895 1.97037C-0.112794 1.51968 -0.112794 0.789178 0.337895 0.33849C0.788498 -0.111853 1.51858 -0.111853 1.96935 0.33849L4.99987 3.36874L8.03016 0.33849C8.48102 -0.111853 9.21119 -0.111853 9.6617 0.33849C10.1126 0.789178 10.1126 1.51968 9.66188 1.97037Z" fill="#3E3E3E" fill-opacity="0.7"/>
        </svg>
      </button>
      <button class="cataloge__current-filter btn-clear"
      v-for='item in currentFilters.categories'
      :key='item'
      @click='clearOption(item, currentFilters.categories, "filterCategories")'
      >
        <img class='current-filter-price__img' :src="item.image" alt="">
        {{ item.label }}
        <svg class='cataloge__current-filter--close' width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.66188 1.97037L6.63193 5.00063L9.66188 8.03074C10.1126 8.4816 10.1126 9.21193 9.66188 9.66279C9.43669 9.88798 9.14145 10.0007 8.84636 10.0007C8.55078 10.0007 8.25552 9.88815 8.03051 9.66279L4.9999 6.63234L1.96952 9.66276C1.74437 9.88795 1.4491 10.0006 1.15375 10.0006C0.858489 10.0006 0.563426 9.88812 0.338067 9.66276C-0.112622 9.2121 -0.112622 8.48174 0.338067 8.03071L3.36793 5.0006L0.337895 1.97037C-0.112794 1.51968 -0.112794 0.789178 0.337895 0.33849C0.788498 -0.111853 1.51858 -0.111853 1.96935 0.33849L4.99987 3.36874L8.03016 0.33849C8.48102 -0.111853 9.21119 -0.111853 9.6617 0.33849C10.1126 0.789178 10.1126 1.51968 9.66188 1.97037Z" fill="#3E3E3E" fill-opacity="0.7"/>
        </svg>
      </button>
      <button class="cataloge__current-filter btn-clear"
      v-for='item in currentFilters.collections'
      :key='item'
      @click='clearOption(item, currentFilters.collections, "filterCollections")'
      >
        <img class='current-filter-price__img' :src="item.image" alt="">
        {{ item.label }}
        <svg class='cataloge__current-filter--close' width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.66188 1.97037L6.63193 5.00063L9.66188 8.03074C10.1126 8.4816 10.1126 9.21193 9.66188 9.66279C9.43669 9.88798 9.14145 10.0007 8.84636 10.0007C8.55078 10.0007 8.25552 9.88815 8.03051 9.66279L4.9999 6.63234L1.96952 9.66276C1.74437 9.88795 1.4491 10.0006 1.15375 10.0006C0.858489 10.0006 0.563426 9.88812 0.338067 9.66276C-0.112622 9.2121 -0.112622 8.48174 0.338067 8.03071L3.36793 5.0006L0.337895 1.97037C-0.112794 1.51968 -0.112794 0.789178 0.337895 0.33849C0.788498 -0.111853 1.51858 -0.111853 1.96935 0.33849L4.99987 3.36874L8.03016 0.33849C8.48102 -0.111853 9.21119 -0.111853 9.6617 0.33849C10.1126 0.789178 10.1126 1.51968 9.66188 1.97037Z" fill="#3E3E3E" fill-opacity="0.7"/>
        </svg>
      </button>
      <button class="cataloge__current-filter current-filter-rarity btn-clear"
      v-for='item in currentFilters.rarity'
      :key='item'
      @click='clearOption(item, currentFilters.rarity, "filterRarity")'
      >
        {{ item.label }}
        <svg class='cataloge__current-filter--close' width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.66188 1.97037L6.63193 5.00063L9.66188 8.03074C10.1126 8.4816 10.1126 9.21193 9.66188 9.66279C9.43669 9.88798 9.14145 10.0007 8.84636 10.0007C8.55078 10.0007 8.25552 9.88815 8.03051 9.66279L4.9999 6.63234L1.96952 9.66276C1.74437 9.88795 1.4491 10.0006 1.15375 10.0006C0.858489 10.0006 0.563426 9.88812 0.338067 9.66276C-0.112622 9.2121 -0.112622 8.48174 0.338067 8.03071L3.36793 5.0006L0.337895 1.97037C-0.112794 1.51968 -0.112794 0.789178 0.337895 0.33849C0.788498 -0.111853 1.51858 -0.111853 1.96935 0.33849L4.99987 3.36874L8.03016 0.33849C8.48102 -0.111853 9.21119 -0.111853 9.6617 0.33849C10.1126 0.789178 10.1126 1.51968 9.66188 1.97037Z" fill="#3E3E3E" fill-opacity="0.7"/>
        </svg>
      </button>
      <button class="cataloge__current-reset btn-clear"
      @click='clearAll()'
      v-if='!showClearBtn'
      >
        Clear All
      </button>
    </div>
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
    showClearBtn:{
      type: Boolean,
    }
  },
  data() {
    return {
      allItemsLabel: ' results',
      defaultFiltersObject: null,
    }
  },
  mounted () {
    this.defaultFiltersObject = JSON.parse(JSON.stringify(this.currentFilters))
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
    catalogeCurrentState(){
      return this.showClearBtn ? 'cataloge__current--null' : ''
    },
  },
}
</script>