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
      view='or'
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
      view='blockchain'
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
      ></cataloge-filter-item>
      <cataloge-filter-item
      title='Collections'
      view='collections'
      >
        <div class="filters__item-body"
        v-for='collection in data.collections'
        :key="collection.id"
        >
          <app-input
          :descr='collection.text'
          :checkboxValue='collection.id'
          checkbox
          ref='collectionInput'
          >
            <img src="@/assets/images/temp/ethereum.svg" alt="">
          </app-input>
        </div>
      </cataloge-filter-item>
      <cataloge-filter-item
      title='Categories'
      view='categories'
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
          >
            <img src="@/assets/images/temp/ethereum.svg" alt="">
          </app-input>
        </div>
      </cataloge-filter-item>
      <cataloge-filter-item
      title='Rarity'
      view='rarity'
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
          </app-input>
          <span class="checkbox-style"></span>
        </div>
      </cataloge-filter-item>
    </ul>
    {{ filters }}
  </aside>
</template>

<script>
import AppInput from '@/components/App/AppInput.vue';
import CatalogeFilterItem from '@/components/Cataloge/CatalogeFilterItem.vue';

export default {
  data() {
    return {
      filtersOpened: true,
      data:{
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
    setOr(value){
      let index = this.filters.or.indexOf(value)
      if (index !== -1){
        this.filters.or.splice(index, 1)
      } else{
        this.filters.or.push(value)
      }
    },
    setBlockchain(value){
      this.filters.blockchain = value
    },
    setCategories(value){
      let index = this.filters.categories.indexOf(value)
      if (index !== -1){
        this.filters.categories.splice(index, 1)
      } else{
        this.filters.categories.push(value)
      }
    },
    setRarity(value){
      let index = this.filters.rarity.indexOf(value)
      if (index !== -1){
        this.filters.rarity.splice(index, 1)
      } else{
        this.filters.rarity.push(value)
      }
    },
  },
  computed: {
    filtersView() {
      return this.filtersOpened ? '' : 'filters--hidden'
    }
  },
  components: {
    AppInput,
    CatalogeFilterItem,
  },
}
</script>