<template>
  <aside class="cataloge__filters filters"
  :class='filtersView'
  >
    <ul class="filters__list">
      <li class="filters__item filters__toggle">
        <button class="filters__item-head btn-clear"
        @click='toggleFilters()'
        >
          Close Filters
          <img src="@/assets/images/arrow-down.svg" alt="">
        </button>
      </li>
      <cataloge-filter-item
      title='Art or Games'
      view='fill'
      >
        <div class="filters__item-body">
          <app-input
          v-for='item in data.or'
          :key="item"
          :descr='item.text'
          :checkboxValue='item.value'
          checkbox
          @choosed='setOr'
          >
            <img :src="item.image" alt="">
          </app-input>
        </div>
      </cataloge-filter-item>
      <cataloge-filter-item
      title='Blockchain'
      view='fill'
      >
        <div class="filters__item-body">
          <div class="filters--limited">
            <app-input
            v-for='blockchain in allBlockchains'
            :key="blockchain"
            :descr='blockchain.label'
            :checkboxValue='blockchain.value'
            :checkboxName='blockchainsRadioName'
            :checkboxChecked='blockchain.value === currentBlockchain.value'
            checkbox
            @choosed='setBlockchain'
            >
              <img :src="blockchain.image" alt="">
            </app-input>
          </div>
        </div>
      </cataloge-filter-item>
      <cataloge-filter-item
      title='Price'
      view='price'
      >
        <div class="filters__item-body filter-price"
        :class='prefilters.price.error.length > 0 ? "filter-price--disabled" : ""'
        >
          <div class="filter-price__selectwrapper">
            <app-select
            :options='allBlockchains'
            @selectedBlockchain='setPrefilterPriceBlockchain'
            >
            </app-select>
          </div>
          <div class="filter-price__inputs">
            <app-input
            placeholderText='Min'
            type='number'
            @typed='setFilterMin'
            ref='priceMin'
            ></app-input>
            <span class="filter-price__to">
              to
            </span>
            <app-input
            placeholderText='Max'
            type='number'
            @typed='setFilterMax'
            ref='priceMax'
            ></app-input>
          </div>
          <p class="filter-price__error">
            {{ prefilters.price.error }}
          </p>
          <app-button
          title='Apply'
          @click='setPrice()'
          ></app-button>
        </div>
      </cataloge-filter-item>
      <cataloge-filter-item
      title='Collections'
      view='fill'
      >
        <div class="filters__item-body collections">
          <app-input
          view='filter-collection'
          :placeholderText='data.collectionSearchPlaceholder'
          ></app-input>
          <ul class="filters__item-list filters--limited collections__list">
            <li class="collections__list-item"
            v-for='collection in data.collections'
            :key="collection.id"
            >
              <app-input
              :descr='collection.text'
              :checkboxValue='collection.id'
              checkbox
              ref='collectionInput'
              :verified='collection.verified'
              @choosed='setCollections'
              >
                <template v-slot:default>
                  <img src="@/assets/images/temp/ethereum.svg" alt="">
                </template>
                <template v-slot:verified>
                  <img class='collections__list-item--verified' src="@/assets/images/success.svg" alt="">
                </template>
              </app-input>
            </li>
          </ul>
        </div>
      </cataloge-filter-item>
      <cataloge-filter-item
      title='Categories'
      view='fill'
      >
        <div class="filters__item-body">
          <div class="filters--limited">
            <app-input
            v-for='category in data.categories'
            :key="category"
            :descr='category.text'
            :checkboxValue='category.value'
            checkbox
            @choosed='setCategories'
            view='verified'
            >
              <img src="@/assets/images/temp/ethereum.svg" alt="">
            </app-input>
          </div>
        </div>
      </cataloge-filter-item>
      <cataloge-filter-item
      title='Rarity'
      view='checkmark'
      >
        <div class="filters__item-body">
          <div class="filters--limited">
            <app-input
            v-for='item in data.rarity'
            :key="item"
            :descr='item.text'
            :checkboxValue='item.value'
            checkbox
            @choosed='setRarity'
            >
              <span class="checkbox-style">
                <svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
            </app-input>
          </div>
        </div>
      </cataloge-filter-item>
    </ul>
    {{ filters }}
  </aside>
</template>

<script>
import AppInput from '@/components/App/AppInput.vue';
import AppSelect from '@/components/App/AppSelect.vue';
import CatalogeFilterItem from '@/components/Cataloge/CatalogeFilterItem.vue';

import { mapGetters, mapMutations } from 'vuex';

export default {
  data() {
    return {
      filtersOpened: true,
      blockchainsRadioName: 'filter-blockchain',
      data:{
        collectionSearchPlaceholder: 'Search',
        or:[
          {
            text: 'Art',
            value: 'art',
            image: 'https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png',
          },
          {
            text: 'Games',
            value: 'games',
            image: 'https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png',
          },
        ],
        collections:[
          {
            text: 'Doodles art',
            id: 111,
            verified: true,
            type: 'art',
          },
          {
            text: 'Doodles art',
            id: 101,
            verified: false,
            type: 'art',
          },
          {
            text: 'Doodles game',
            id: 1,
            verified: false,
            type: 'game',
          },
          {
            text: 'Doodles game',
            id: 11,
            verified: true,
            type: 'game',
          },
          {
            text: 'Doodles art',
            id: 45,
            verified: true,
            type: 'art',
          },
          {
            text: 'Doodles art',
            id: 2,
            verified: true,
            type: 'art',
          },
          {
            text: 'Doodles art',
            id: 90,
            verified: true,
            type: 'art',
          },
          {
            text: 'Doodles art',
            id: 75,
            verified: true,
            type: 'art',
          },
        ],
        categories:[
          {
            text: 'Music',
            value: 'music',
          },
          {
            text: 'Art',
            value: 'art',
          },
          {
            text: 'Box',
            value: 'box',
          },
          {
            text: 'Music',
            value: 'mu3232sic',
          },
          {
            text: 'Art',
            value: 'ar2323t',
          },
          {
            text: 'Box',
            value: 'bo123x',
          },
          {
            text: 'Music',
            value: 'music231',
          },
          {
            text: 'Art',
            value: 'ar2t',
          },
          {
            text: 'Box',
            value: 'bo233x',
          },
        ],
        rarity:[
          {
            text: 'Legendary',
            value: 'legendary'
          },
          {
            text: 'Common',
            value: 'common'
          },
          {
            text: 'Epic',
            value: 'epic'
          },
          {
            text: 'Legendary',
            value: 'legenda4323ry'
          },
          {
            text: 'Common',
            value: 'com343mon'
          },
          {
            text: 'Epic',
            value: 'epi343c'
          },
          {
            text: 'Legendary',
            value: 'legendary'
          },
          {
            text: 'Common',
            value: 'comm33on'
          },
          {
            text: 'Epic',
            value: 'epic32'
          },
          {
            text: 'Legendary',
            value: 'legendary'
          },
          {
            text: 'Common',
            value: 'common33'
          },
          {
            text: 'Epic',
            value: 'epi43c'
          },
        ],
      },
      prefilters:{
        price: {
          error: '',
          blockchain: '',
          min: '',
          max: '',
        },
        collections:{
          searchInputValue: '',
        },
      },
      filters:{
        or: [],
        blockchains: [],
        price: {
          blockchain: {
            label: '',
          },
          min: '',
          max: '',
        },
        collections: [],
        categories: '',
        rarity: [],
      },
    }
  },
  methods: {
    ...mapMutations(['setNewBlockchain']),
    toggleFilters() {
      this.filtersOpened = !this.filtersOpened
      this.$emit('clicked')
    },
    toggleInArray(array, value){
      let index = array.indexOf(value)
      if (index !== -1){
        array.splice(index, 1)
      } else{
        array.push(value)
      } 
    },
    setOr(value){
      if (typeof(this.filters.or) == String){
        this.filters.or = []
      }
      
      this.toggleInArray(this.filters.or, value)
    },
    setBlockchain(value){
      this.toggleInArray(this.filters.blockchains, value)
    },
    setCollections(value){
      this.toggleInArray(this.filters.collections, value)
    },
    setCategories(value){
      this.filters.categories = value
    },
    setRarity(value){
      this.toggleInArray(this.filters.rarity, value)
    },
    setFilterMin(value){
      this.prefilters.price.min = value
      if (this.prefilters.price.max === ''){
        this.prefilters.price.error = ''
      }else if(this.prefilters.price.min === ''){
        this.prefilters.price.error = ''
      }else{
        if(this.prefilters.price.max < this.prefilters.price.min){
          this.prefilters.price.error = 'Min must be less than max'
        }else{
          this.prefilters.price.error = ''
        }
      }
    },
    setFilterMax(value){
      this.prefilters.price.max = value
      if (this.prefilters.price.min === ''){
        this.prefilters.price.error = ''
      }else if(this.prefilters.price.max === ''){
        this.prefilters.price.error = ''
      }else{
        if(this.prefilters.price.min > this.prefilters.price.max){
          this.prefilters.price.error = 'Max must be more than min'
        }else{
          this.prefilters.price.error = ''
        }
      }
    },
    setPrefilterPriceBlockchain(value){
      let allBlockchains = this.allBlockchains
      let needValue = Object.values(allBlockchains).find((obj) => {
        return obj.value == value
      })

      this.prefilters.price.blockchain = needValue
    },
    setPrice(){
      if (this.prefilters.price.min === '' & this.prefilters.price.max === ''){
        return false        
      }else{
        let currentFilters = JSON.parse(JSON.stringify(this.prefilters.price))
        this.filters.price = currentFilters
      }
    },
  },
  computed: {
    ...mapGetters(['allBlockchains', 'currentBlockchain']),
    filtersView() {
      return this.filtersOpened ? '' : 'filters--hidden'
    }
  },
  watch: {
    filters:{
      handler(value){
        // if(value.or.length < 1){
        //   value.or = 'all'
        // }
        this.$emit('updatedFilters', value)
      },
      deep: true
    }
  },
  components: {
    AppInput,
    AppSelect,
    CatalogeFilterItem,
  },
}
</script>