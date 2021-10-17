<template>
  <div class="cataloge">
    <cataloge-filters></cataloge-filters>
    <cataloge-current-filters></cataloge-current-filters>
    <cataloge-rows></cataloge-rows>
  </div>
</template>

<script>
import CatalogeFilters from '@/components/Cataloge/CatalogeFilters.vue';
import CatalogeCurrentFilters from '@/components/Cataloge/CatalogeCurrentFilters.vue';
import CatalogeRows from '@/components/Cataloge/CatalogeRows.vue';

export default {
  components: {
    CatalogeFilters,
    CatalogeCurrentFilters,
    CatalogeRows,
  },
}
</script>