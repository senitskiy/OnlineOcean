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
        <div class="filters__item-body"
        v-for='item in data.or'
        :key="item"
        >
          <app-input
          :descr='item.text'
          :checkboxValue='item.value'
          checkbox
          @choosed='setOr'
          >
            <img src="@/assets/images/temp/ethereum.svg" alt="">
          </app-input>
        </div>
      </cataloge-filter-item>
      <cataloge-filter-item
      title='Blockchain'
      view='fill'
      >
        <div class="filters__item-body"
        v-for='blockchain in data.blockchains'
        :key="blockchain"
        >
          <app-input
          :descr='blockchain.text'
          :checkboxValue='blockchain.value'
          :checkboxName='blockchain.checkboxName'
          :checkboxChecked='blockchain.checked'
          radio
          type='radio'
          @choosed='setBlockchain'
          >
            <img src="@/assets/images/temp/ethereum.svg" alt="">
          </app-input>
        </div>
      </cataloge-filter-item>
      <cataloge-filter-item
      title='Price'
      view='price'
      >
        <div class="filters__item-body">
          <Multiselect
          v-model='filters.price'
          :options='data.currency'
          >
            
          </Multiselect>
        </div>
      </cataloge-filter-item>
      <cataloge-filter-item
      title='Collections'
      view='fill'
      >
        <div class="filters__item-body filters__item-body collections">
          <app-input
          view='filter-collection'
          :placeholderText='data.collectionSearchPlaceholder'
          ></app-input>
          <ul class="filters__item-list collections__list">
            <li class="collections__list-item"
            v-for='collection in data.collections'
            :key="collection.id"
            >
              <app-input
              :descr='collection.text'
              :checkboxValue='collection.id'
              checkbox
              ref='collectionInput'
              @choosed='setCollections'
              >
                <img src="@/assets/images/temp/ethereum.svg" alt="">
              </app-input>
            </li>
          </ul>
        </div>
      </cataloge-filter-item>
      <cataloge-filter-item
      title='Categories'
      view='fill'
      >
        <div class="filters__item-body"
        v-for='category in data.categories'
        :key="category"
        >
          <app-input
          :descr='category.text'
          :checkboxValue='category.value'
          checkbox
          @choosed='setCategories'
          view='verified'
          >
            <img src="@/assets/images/temp/ethereum.svg" alt="">
          </app-input>
        </div>
      </cataloge-filter-item>
      <cataloge-filter-item
      title='Rarity'
      view='checkmark'
      >
        <div class="filters__item-body"
        v-for='item in data.rarity'
        :key="item"
        >
          <app-input
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
      </cataloge-filter-item>
    </ul>
    {{ filters }}
  </aside>
</template>

<script>
import AppInput from '@/components/App/AppInput.vue';
import CatalogeFilterItem from '@/components/Cataloge/CatalogeFilterItem.vue';


import Multiselect from '@vueform/multiselect';
import '@vueform/multiselect/themes/default.css';

export default {
  data() {
    return {
      filtersOpened: true,
      data:{
        collectionSearchPlaceholder: 'Search',
        or:[
          {
            text: 'Art',
            value: 'art',
          },
          {
            text: 'Games',
            value: 'games',
          },
        ],
        blockchains:[
          {
            text: 'Ethereum',
            value: 'eth',
            checkboxName: 'cataloge-blockchains',
            checked: true,
          },
          {
            text: 'Bitcoin',
            value: 'btc',
            checkboxName: 'cataloge-blockchains',
          },
        ],
        currency:[
          {
            value: 'eth',
            text: 'Etherum',
            src: '',
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
        ],
      },
      filters:{
        or: [],
        blockchain: '',
        price: '',
        collections: [],
        categories: [],
        rarity: [],
      },
    }
  },
  methods: {
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
      this.toggleInArray(this.filters.or, value)
    },
    setBlockchain(value){
      this.filters.blockchain = value
    },
    setCollections(value){
      this.toggleInArray(this.filters.collections, value)
    },
    setCategories(value){
      this.toggleInArray(this.filters.categories, value)
    },
    setRarity(value){
      this.toggleInArray(this.filters.rarity, value)
    },
  },
  computed: {
    filtersView() {
      return this.filtersOpened ? '' : 'filters--hidden'
    }
  },
  watch: {
    filtersOpened(value){
      console.log('new data' + value)
    },
    filters:{
      handler(value){
        this.$emit('updatedFilters', value)
      },
      deep: true
    }
  },
  components: {
    AppInput,
    CatalogeFilterItem,
    Multiselect,
  },
}
</script>