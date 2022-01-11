<template>
  <div class="wallets"
  :class='walletsState'
  @click.stop
  v-if="!walletConnected"
  >
    <div class="wallets__inner">
      <p class="wallets__title">
        Connect Wallet
      </p>
      <ul class="wallets__items">
        <li class="wallets__item"
        v-for='item in allWallets'
        :key='item'
        >
          <app-input
          :descr='item.label'
          :checkboxValue='item.value'
          :checkboxName='data.walletsName'
          :checkboxChecked='item.value === currentWallet.value'
          @choosed='checkInput'
          radio
          >
            <span class="wallets__imgwrapper">
              <img :src="item.darkImage" alt=""
              v-if="theme === 'dark' && item.darkImage !== undefined"
              >
              <img :src="item.image" alt=""
              v-else
              >
            </span>
          </app-input>
        </li>
      </ul>
      <div class="wallets__buttons">
        <a class="wallets__link" :href="currentFaqLink" target="_blank">
          ?
        </a>
        <app-button
        title='Confirm'
        @click='[togglePopUpWallets(), connectWallet()]'
        ></app-button>
      </div>
    </div>
  </div>
  <div class="wallets"
  :class='walletsState'
  @click.stop
  v-else
  >
    <app-button
    title='Leave wallet'
    @click='[togglePopUpWallets(), quitWallet()]'
    view="out"
    ></app-button>
  </div>
  <div class="wallets__pad"></div>
</template>

<script>
import AppInput from '@/components/App/AppInput.vue';

import { mapGetters, mapMutations } from "vuex";

export default {
  props: {
    opened: {
      type: Boolean,
    },
  },
  data() {
    return {
      data:{
        currWallet: {
          value: '',
        },
        walletsName: '',
      }
    }
  },
  mounted () {
    this.generateName()
  },
  computed: {
    ...mapGetters([
      'walletConnected',
      'currentWallet',
      'theme',
      'allWallets',
    ]),
    walletsState() {
      return this.opened ? 'wallets--active' : ''
    },
    currentFaqLink(){
      if(this.data.currWallet.value !== ""){
        if(this.data.currWallet.value === 'metamask'){
          return 'https://metamask.io/faqs.html'
        }
        return 'https://near.org/'
      }

      if(this.currentWallet.value === 'metamask'){
        return 'https://metamask.io/faqs.html'
      }
      return 'https://near.org/'
    },
  },
  methods: {
    generateName(){
      let randomValue = 'wallet' + Math.random() + Math.random()
      this.data.walletsName = randomValue.toString()
    },
    blockchainCheckedState(value){
      return value === this.currentWallet.value
    },
    checkInput(value){
      let allWallets = this.allWallets
      let needValue = Object.values(allWallets).find((obj) => {
        return obj.value == value
      })

      this.data.currWallet = needValue
    },
    setWallet(){
      this.setNewWallet(this.data.currWallet)
      this.togglePopUpWallets()
    },
    ...mapMutations([
      'setNewWallet',
      'connectWallet',
      'quitWallet',
      'togglePopUpWallets',
    ])
  },
  components: {
    AppInput,
  },
}
</script>