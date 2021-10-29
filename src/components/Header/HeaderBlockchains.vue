<template>
  <div class="blockchains"
  :class='blockchainsState'
  @click.stop
  >
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
        :checkboxChecked='item.checked'
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
  <div class="blockchains__pad"></div>
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
            checked: true,
          },
          {
            name: 'Immutable X',
            value: 'imux',
            checked: false,
          },
          {
            name: 'BSC',
            value: 'bsc',
            checked: false,
          },
          {
            name: 'Polygon',
            value: 'polygon',
            checked: false,
          },
          {
            name: 'Solana',
            value: 'solana',
            checked: false,
          },
          {
            name: 'Dfinity',
            value: 'dfinity',
            checked: false,
          },
        ]
      },
      data:{
        currBlockchain: '',
      },
    }
  },
  computed: {
    blockchainsState() {
      return this.opened ? 'blockchains--active' : ''
    },
  },
  methods: {
    setBlockchain(value) {
      this.data.currBlockchain = value
      console.log(value)
    }
  },
  components: {
    AppInput,
  },
}
</script>