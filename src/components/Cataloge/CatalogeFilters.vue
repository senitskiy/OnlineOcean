<template>
  <aside class="cataloge__filters filters"
  ref='filters'
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
        id='filterOr'
        >
          <app-input
          v-for='item in data.or'
          :key="item"
          :descr='item.label'
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
        <div class="filters__item-body"
        id='filterBlockchains'
        >
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
        id='filterPrice'
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
        <div class="filters__item-body collections"
        id='filterCollections'
        >
          <app-input
          view='filter-collection'
          :placeholderText='data.collectionSearchPlaceholder'
          @typed='getCollections'
          ></app-input>
          <ul class="filters__item-list filters--limited collections__list">
            <li class="collections__list-item"
            v-for='collection in data.collections'
            :key="collection.id"
            >
              <app-input
              :descr='collection.label'
              :checkboxValue='collection.id'
              checkbox
              ref='collectionInput'
              :verified='collection.verified'
              @choosed='setCollections'
              >
                <template v-slot:default>
                  <img :src="collection.image" alt="">
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
        <div class="filters__item-body"
        id='filterCategories'
        >
          <div class="filters--limited">
            <app-input
            v-for='category in data.categories'
            :key="category"
            :descr='category.label'
            :checkboxValue='category.value'
            checkbox
            @choosed='setCategories'
            view='verified'
            >
              <img :src="category.image" alt="">
            </app-input>
          </div>
        </div>
      </cataloge-filter-item>
      <cataloge-filter-item
      title='Rarity'
      view='checkmark'
      >
        <div class="filters__item-body"
        id='filterRarity'
        >
          <div class="filters--limited">
            <app-input
            v-for='item in data.rarity'
            :key="item"
            :descr='item.label'
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
    {{ prefilters }}
    <br><br>
    {{ filters }}
  </aside>
</template>

<script>
import AppInput from '@/components/App/AppInput.vue';
import AppSelect from '@/components/App/AppSelect.vue';
import CatalogeFilterItem from '@/components/Cataloge/CatalogeFilterItem.vue';

import axios from 'axios';
// import InfiniteScroll from "infinite-loading-vue3";
import { mapGetters, mapMutations } from 'vuex';

export default {
  props: {
    needClear: {
      type: Object,
      default: null,
    },
    currentFilters:{
      type: Object,
    },
  },
  data() {
    return {
      blockchainsRadioName: 'filter-blockchain',
      data:{
        collectionSearchPlaceholder: 'Search',
        or:[
          {
            label: 'Art',
            value: 'art',
            image: 'https://www.pngrepo.com/png/5125/180/avatar.png',
          },
          {
            label: 'Games',
            value: 'games',
            image: 'https://www.pngrepo.com/png/5125/180/avatar.png',
          },
        ],
        collections:[
          {
            label: 'Doodles art',
            id: 111,
            verified: true,
            type: 'art',
            image: 'https://www.pngrepo.com/png/5125/180/avatar.png',
          },
          {
            label: 'Doodles art',
            id: 101,
            verified: false,
            type: 'art',
            image: 'https://www.pngrepo.com/png/5125/180/avatar.png',
          },
          {
            label: 'Doodles game',
            id: 1,
            verified: false,
            type: 'game',
            image: 'https://www.pngrepo.com/png/5125/180/avatar.png',
          },
          {
            label: 'Doodles game',
            id: 11,
            verified: true,
            type: 'game',
            image: 'https://www.pngrepo.com/png/5125/180/avatar.png',
          },
          {
            label: 'Doodles art',
            id: 45,
            verified: true,
            type: 'art',
            image: 'https://www.pngrepo.com/png/5125/180/avatar.png',
          },
          {
            label: 'Doodles art',
            id: 2,
            verified: true,
            type: 'art',
            image: 'https://www.pngrepo.com/png/5125/180/avatar.png',
          },
          {
            label: 'Doodles art',
            id: 90,
            verified: true,
            type: 'art',
            image: 'https://www.pngrepo.com/png/5125/180/avatar.png',
          },
          {
            label: 'Doodles art',
            id: 75,
            verified: true,
            type: 'art',
            image: 'https://www.pngrepo.com/png/5125/180/avatar.png',
          },
        ],
        categories:[
          {
            label: 'Music',
            value: 'music',
            image: 'https://www.pngrepo.com/png/5125/180/avatar.png',
          },
          {
            label: 'Art',
            value: 'art',
            image: 'https://www.pngrepo.com/png/5125/180/avatar.png',
          },
          {
            label: 'Box',
            value: 'box',
            image: 'https://www.pngrepo.com/png/5125/180/avatar.png',
          },
          {
            label: 'Music',
            value: 'mu3232sic',
            image: 'https://www.pngrepo.com/png/5125/180/avatar.png',
          },
          {
            label: 'Art',
            value: 'ar2323t',
            image: 'https://www.pngrepo.com/png/5125/180/avatar.png',
          },
          {
            label: 'Box',
            value: 'bo123x',
            image: 'https://www.pngrepo.com/png/5125/180/avatar.png',
          },
          {
            label: 'Music',
            value: 'music231',
            image: 'https://www.pngrepo.com/png/5125/180/avatar.png',
          },
          {
            label: 'Art',
            value: 'ar2t',
            image: 'https://www.pngrepo.com/png/5125/180/avatar.png',
          },
          {
            label: 'Box',
            value: 'bo233x',
            image: 'https://www.pngrepo.com/png/5125/180/avatar.png',
          },
        ],
        rarity:[
          {
            label: 'Legendary',
            value: 'legendary'
          },
          {
            label: 'Common',
            value: 'common'
          },
          {
            label: 'Epic',
            value: 'epic'
          },
          {
            label: 'Legendary',
            value: 'legenda4323ry'
          },
          {
            label: 'Common',
            value: 'com343mon'
          },
          {
            label: 'Epic',
            value: 'epi343c'
          },
          {
            label: 'Legendary',
            value: 'legendary'
          },
          {
            label: 'Common',
            value: 'comm33on'
          },
          {
            label: 'Epic',
            value: 'epic32'
          },
          {
            label: 'Legendary',
            value: 'legendary'
          },
          {
            label: 'Common',
            value: 'common33'
          },
          {
            label: 'Epic',
            value: 'epi43c'
          },
        ],
      },
      defaultPrefilters: null,
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
      defaultFilters: null,
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
        categories: [],
        rarity: [],
      },
    }
  },
  mounted () {
    this.defaultFilters = this.currentFilters
    this.defaultPrefilters = JSON.parse(JSON.stringify(this.prefilters))
  },
  methods: {
    ...mapMutations(['setNewBlockchain']),
    getCollections(value){
      axios.post('/getCollections',{ sort: value })
        .then(response => ( this.data.collections = response ))
    },
    toggleFilters() {
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
      let needValue = this.data.or.find(element => element.value === value)
      this.toggleInArray(this.filters.or, needValue)
    },
    setBlockchain(value){
      let needValue = this.allBlockchains.find(element => element.value === value)
      this.toggleInArray(this.filters.blockchains, needValue)
    },
    setCollections(value){
      let needValue = this.data.collections.find(element => element.id === value)
      this.toggleInArray(this.filters.collections, needValue)
    },
    setCategories(value){
      let needValue = this.data.categories.find(element => element.value === value)
      this.toggleInArray(this.filters.categories, needValue)
    },
    setRarity(value){
      let needValue = this.data.rarity.find(element => element.value === value)
      this.toggleInArray(this.filters.rarity, needValue)
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
    clearSingleInput(input){

      if (input.type === 'number'){
        input.value = ''
      }else{
        input.checked = false
      }
    },
    clearAll(){
      let allTextInputs = document.querySelectorAll('.filters input:not([type=text])');

      for(let i = 0; i < allTextInputs.length; i++){
        if (allTextInputs[i].type === 'number'){
          allTextInputs[i].value = ''
        }else{
          allTextInputs[i].checked = false
        }
      }

      let copiedFilters = JSON.parse(JSON.stringify(this.defaultFilters)),
          copiedPrefilters = JSON.parse(JSON.stringify(this.defaultPrefilters))

      this.filters = copiedFilters
      this.prefilters = copiedPrefilters
    },
    clearOption(id, needToDel){
      let allInputs = document.querySelectorAll(`#${id} input:not([type=text])`)

      for(let i = 0; i < allInputs.length; i++){
        if(needToDel.value !== undefined){
          console.log(1)
          if(allInputs[i].value === needToDel.value){
            if (allInputs[i].type === 'number'){
              allInputs[i].value = '' 
            }else{
              allInputs[i].checked = false
            }
          }
        }else if(allInputs[i].value == needToDel.id){
          if (allInputs[i].type === 'number'){
            allInputs[i].value = '' 
          }else{
            allInputs[i].checked = false
          }
        }
      }

      // console.log(1, needToDel)
      // let needInput = allInputs.find(el => el === needToDel)
      // console.log(needInput)
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
    },
    needClear(value){
      this.filters.or = this.filters.or.filter(function( obj ) {
        if(obj.id === undefined){
          return obj.value !== value.value;
        }else{
          return obj.id !== value.id;
        }
      });
    },
  },
  components: {
    AppInput,
    AppSelect,
    CatalogeFilterItem,
    // InfiniteScroll,
  },
}
</script>