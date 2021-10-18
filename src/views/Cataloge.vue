<template>
  <div class="cataloge">
    <cataloge-filters
    @clicked='changeView()'
    ></cataloge-filters>
    <cataloge-current-filters></cataloge-current-filters>
    <cataloge-rows
    :showMoreCols='showMoreCols'
    ></cataloge-rows>
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
  components: {
    CatalogeFilters,
    CatalogeCurrentFilters,
    CatalogeRows,
  },
}
</script>