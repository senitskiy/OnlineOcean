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
      ></cataloge-filter-item>
      <cataloge-filter-item
      title='Blockchain'
      >
      
      </cataloge-filter-item>
      <li class="filters__item filters__item--blockchain">
        <button class="filters__item-head btn-clear">
          Blockchain
          <img src="@/assets/images/arrow-down.svg" alt="">
        </button>
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
      </li>
      <li class="filters__item">
        <button class="filters__item-head btn-clear">
          Price
          <img src="@/assets/images/arrow-down.svg" alt="">
        </button>
        <div class="filters__item-body">

        </div>
      </li>
      <li class="filters__item">
        <button class="filters__item-head btn-clear">
          Collections
          <img src="@/assets/images/arrow-down.svg" alt="">
        </button>
        <div class="filters__item-body">

        </div>
      </li>
      <li class="filters__item filters__item--categories">
        <button class="filters__item-head btn-clear">
          Categories
          <img src="@/assets/images/arrow-down.svg" alt="">
        </button>
        <div class="filters__item-body"
        v-for='category in data.categories'
        :key="category"
        >
          <app-input
          :descr='category.text'
          :checkboxValue='category.value'
          :checkboxName='category.checkboxName'
          type='checkbox'
          radio
          @choosed='setCategories'
          >
            <img src="@/assets/images/temp/ethereum.svg" alt="">
          </app-input>
        </div>
      </li>
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
        categories:[
          {
            text: 'Music',
            value: 'music',
            checkboxName: 'cataloge-categories',
          },
          {
            text: 'Art',
            value: 'art',
            checkboxName: 'cataloge-categories',
          },
          {
            text: 'Box',
            value: 'box',
            checkboxName: 'cataloge-categories',
          },
        ]
      },
      filters:{
        or: '',
        blockchain: '',
        collections: [],
        categories: [],
      },
    }
  },
  methods: {
    toggleFilters() {
      this.filtersOpened = !this.filtersOpened
      this.$emit('clicked')
    },
    setBlockchain(value){
      this.filters.blockchain = value
    },
    setCategories(value){
      this.filters.categories = value
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