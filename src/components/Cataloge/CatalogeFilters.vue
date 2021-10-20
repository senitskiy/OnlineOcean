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
          :radioValue='blockchain.value'
          :checkboxName='blockchain.checkboxName'
          :checkboxChecked='blockchain.checked'
          radio
          >
            <img src="@/assets/images/temp/ethereum.svg" alt="">
          </app-input>
        </div>
      </li>
    </ul>
  </aside>
</template>

<script>
import AppInput from '@/components/App/AppInput.vue';

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
  components: {
    AppInput,
  },
}
</script>