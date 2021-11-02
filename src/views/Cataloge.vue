<template>
  <div class="cataloge">
    <div class="cataloge__wrapper">
      <cataloge-filters
      @clicked='changeView()'
      @updatedFilters='setCurrentFilters'
      ></cataloge-filters>
      <div class="cataloge__inner"
      :class='countOfCols'
      >
        <cataloge-current-filters
        :currentFilters='currentFilters'
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
    }
  },
  methods: {
    changeView() {
      this.showMoreCols = !this.showMoreCols
    },
    setCurrentFilters(value){
      this.currentFilters = value
    },
  },
  computed: {
    countOfCols(){
      return this.showMoreCols ? 'cataloge__inner--more' : ''
    }
  },
  components: {
    CatalogeFilters,
    CatalogeCurrentFilters,
    CatalogeRows,
  },
}
</script>