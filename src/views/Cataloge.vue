<template>
  <div class="cataloge">
    <div class="cataloge__wrapper">
      <cataloge-filters
      @clicked='changeView()'
      ></cataloge-filters>
      <div class="cataloge__inner"
      :class='countOfCols'
      >
        <cataloge-current-filters></cataloge-current-filters>
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
    }
  },
  methods: {
    changeView() {
      this.showMoreCols = !this.showMoreCols
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