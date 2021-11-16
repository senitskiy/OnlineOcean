<template>
  <div class="cataloge">
    <div class="cataloge__wrapper"
    :class='countOfCols'  
    >
      <cataloge-filters
      ref='filters'
      @clicked='changeView()'
      @updatedFilters='setCurrentFilters'
      :currentFilters='currentFilters'
      :needClear='needClear'
      ></cataloge-filters>
      <div class="cataloge__inner">
        <cataloge-current-filters
        :itemsLength='itemsLength'
        :currentFilters='currentFilters'
        :showClearBtn='showClearBtn'
        @clearAll='clearAll'
        @clearOption='clearOption'
        ></cataloge-current-filters>
        <cataloge-rows
        @changedLength='changeLength'
        ></cataloge-rows>
      </div>
    </div>
  </div>
</template>

<script>
import CatalogeFilters from '@/components/Cataloge/CatalogeFilters.vue';
import CatalogeCurrentFilters from '@/components/Cataloge/CatalogeCurrentFilters.vue';
import CatalogeRows from '@/components/Cataloge/CatalogeRows.vue';

export default {
  data() {
    return {
      showMoreCols: false,
      windowWidth: window.innerWidth,
      currentFilters: {
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
      showClearBtn: true,
      needClear: null,
      itemsLength: 0,
    }
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize);
  },
  beforeUnmounted() { 
    window.removeEventListener('resize', this.onResize); 
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth
      if(this.windowWidth <= 800){
        this.showMoreCols = true
      }
    },
    changeView() {
      this.showMoreCols = !this.showMoreCols
    },
    setCurrentFilters(value, equal){
      this.currentFilters = value
      this.showClearBtn = equal
    },
    clearAll(value){
      this.currentFilters = value
      
      this.$refs.filters.clearAll()
    },
    clearOption(value, parentArray, parentName){
      for(let key in this.currentFilters){
        if(this.currentFilters[key] === parentArray){
          if(parentArray.min !== undefined){
            this.currentFilters[key].min = ''
            this.currentFilters[key].max = ''
            this.currentFilters[key].label = ''

            this.$refs.filters.clearPrefilters()
            this.$refs.filters.clearOption(parentName, value)
          }else{
            let needValue = this.currentFilters[key].find(el => el === value),
                index = this.currentFilters[key].indexOf(needValue)
  
            this.currentFilters[key].splice(index, 1)
            this.$refs.filters.clearOption(parentName, value)
          }
        }
      }
    },
    changeLength(value){
      this.itemsLength = value
    },
  },
  computed: {
    countOfCols(){
      return this.showMoreCols ? 'cataloge__wrapper--more' : ''
    },
  },
  components: {
    CatalogeFilters,
    CatalogeCurrentFilters,
    CatalogeRows,
  },
}
</script>