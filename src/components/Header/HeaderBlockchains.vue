<template>
  <div class="blockchains">
    <p class="blockchains__title">
      Choosing a Blockchain
    </p>
    <ul class="blockchains__items">
      <li class="blockchains__item"
      v-for='item in content.blockchains'
      :key='item'
      >
        <app-input
        :descr='item.name'
        :checkboxValue='item.value'
        :checkboxName='content.blockchainsName'
        @choosed='setBlockchain'
        radio
        >
          <span class="blockchains__imgwrapper">
            <img src="@/assets/images/temp/blockchain-1.svg" alt="">
          </span>
        </app-input>
      </li>
    </ul>
    <app-button
    title='Apply'
    ></app-button>
  </div>
</template>

<script>
import AppInput from '@/components/App/AppInput.vue';

export default {
  props: {
    opened: {
      type: Boolean,
    },
  },
  data() {
    return {
      content:{
        blockchainsName: 'header-blockchain',
        blockchains:[
          {
            name: 'Ethereum',
            value: 'eth',
          },
          {
            name: 'Immutable X',
            value: 'imux',
          },
          {
            name: 'BSC',
            value: 'bsc',
          },
          {
            name: 'Polygon',
            value: 'polygon',
          },
          {
            name: 'Solana',
            value: 'solana',
          },
          {
            name: 'Dfinity',
            value: 'dfinity',
          },
        ]
      },
      data:{
        currBlockchain: '',
      },
    }
  },
  methods: {
    setBlockchain(value) {
      this.data.currBlockchain = value
    }
  },
  components: {
    AppInput,
  },
}
</script>