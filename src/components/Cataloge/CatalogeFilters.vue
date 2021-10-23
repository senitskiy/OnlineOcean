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
      ></cataloge-filter-item>
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
          },
          {
            text: 'Art',
            value: 'art',
          },
          {
            text: 'Box',
            value: 'box',
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
      // if (this.filters.categories.indexOf(value) > -1){
      //   this.filters.categories.filter(function(ele){ 
      //       return ele != value; 
      //   });
      // } else{
      //   this.filters.categories.push(value)
      // }
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