<template>
  <div class="header__search-wrapper">
    <app-input
    placeholderText='Search for art'
    view='header-search'
    @typed='search()'
    ></app-input>
    <img src="@/assets/images/search.svg" alt="">
  </div>
  <div class="header__buttons">
    <app-button
    title='Create'
    link
    href='/create'
    ></app-button>
    <app-button
    title='Connect wallet'
    view='blue'
    ></app-button>
  </div>
  <div class="header__account">
    <button class="header__blockchain btn-clear">
      <header-blockchains
      :opened='openedBlockchains'
      ></header-blockchains>
      <img src="@/assets/images/blockchain-icon.svg" alt="">
    </button>
    <button class="header__notifications btn-clear"
    :class='notifications !== 0 ? "header__notifications--active" : ""'
    @click.stop='togglePopUpNots'
    >
      <app-nots
      :openedNots='openedNots'
      ></app-nots>
      <img src="@/assets/images/notify.svg" alt="">
    </button>
    <router-link class="header__account-link"
    to='/user/artstudio'
    >
      <img src="@/assets/images/temp/user.jpg" alt="">
    </router-link>
  </div>
</template>

<script>
import AppInput from '@/components/App/AppInput.vue'
import AppNots from '@/components/App/AppNots.vue'
import HeaderBlockchains from '@/components/Header/HeaderBlockchains.vue'

export default {
  data() {
    return {
      notifications: 1,
      openedNots: false,
      openedBlockchains: false,
    }
  },
  methods: {
    removePopUpNots(){
      this.openedNots = false
    },
    togglePopUpNots() {
      this.openedNots = !this.openedNots
    },
    search(){

    },
  },
  components: {
    AppInput,
    AppNots,
    HeaderBlockchains,
  },
}
</script>