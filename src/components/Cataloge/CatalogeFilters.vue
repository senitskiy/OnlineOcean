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
      <li class="filters__item">
        <button class="filters__item-head btn-clear">
          Art or Games
          <img src="@/assets/images/arrow-down.svg" alt="">
        </button>
        <div class="filters__item-body">

        </div>
      </li>
      <li class="filters__item">
        <button class="filters__item-head btn-clear">
          Blockchain
          <img src="@/assets/images/arrow-down.svg" alt="">
        </button>
        <div class="filters__item-body">

        </div>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      filtersOpened: true,
      data:{
      }
    }
  },
  methods: {
    toggleFilters() {
      this.filtersOpened = !this.filtersOpened
      this.$emit('clicked')
    }
  },
  computed: {
    filtersView() {
      return this.filtersOpened ? '' : 'filters--hidden'
    }
  },
}
</script>