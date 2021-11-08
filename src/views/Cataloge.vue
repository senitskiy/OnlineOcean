<template>
  <div class="cataloge">
    <div class="cataloge__wrapper"
    :class='countOfCols'  
    >
      <cataloge-filters
      @clicked='changeView()'
      @updatedFilters='setCurrentFilters'
      :needClear='needClear'
      ></cataloge-filters>
      <div class="cataloge__inner">
        <cataloge-current-filters
        :currentFilters='currentFilters'
        @clearAll='clearAll'
        @clearOption='clearOption'
        ></cataloge-current-filters>
        <cataloge-rows></cataloge-rows>
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
      needClear: null,
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
    setCurrentFilters(value){
      this.currentFilters = value
    },
    clearAll(value){
      this.currentFilters = value
    },
    clearOption(value, parentArray){
      console.log([parentArray, value])
      // this.currentFilters = parentArray.filter(function( obj ) {
      //   if(obj.id === undefined){
      //     return obj.value !== value.value;
      //   }else{
      //     return obj.id !== value.id;
      //   }
      // });
      // this.needClear = parentArray
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