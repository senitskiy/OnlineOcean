<template>
  <div class="header__search-wrapper">
    <app-input
    placeholderText='Search for art'
    view='header-search'
    v-model='needToSearch'
    @input='search()'
    ></app-input>
    <img src="@/assets/images/search.svg" alt="">
  </div>
  <div class="header__buttons">
    <app-button
    title="Explore"
    link
    href="/cataloge"
    view="blue"
    ></app-button>
    <app-button
    title='Create'
    link
    href='/create'
    ></app-button>
    <!-- v-if='!userInfo.connected' -->
    <button class="header__wallets btn btn--blue"
    @click='togglePopUpWallets'
    >
      Connect wallet
      <header-wallets
      :opened="openedWallets"
      ></header-wallets>
    </button>
    <!-- <app-button
    title='Connect wallet'
    view='blue'
    @click='this.connectWallet()'
    >
      <header-wallets
      :opened="openedWallets"
      ></header-wallets>
    </app-button> -->
  </div>
  <div class="header__account">
    <app-theme></app-theme>
    <button class="header__blockchain btn-clear"
    :class='openedBlockchains !== false ? "header__blockchain--active" : ""'
    @click='togglePopUpBlockchains'
    >
      <header-blockchains
      :opened='openedBlockchains'
      ></header-blockchains>
      <div class="header__blockchain-icon">
        <img src="@/assets/images/blockchain-icon.png" alt="">
      </div>
    </button>
    <button class="header__notifications btn-clear"
    :class='notifications !== 0 ? "header__notifications--active" : ""'
    @click='togglePopUpNots'
    v-if='userInfo.connected'
    >
      <app-nots
      :openedNots='openedNots'
      ></app-nots>
      <svg width="26" height="32" viewBox="0 0 26 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <radialGradient id="gradient" gradientTransform="rotate(-46.17)">
          <stop offset="-22.44%" stop-color="#95BBFE" />
          <stop offset="102.05%" stop-color="#9A22F7" />
        </radialGradient>
        <path d="M24.77 22.2825L23.3125 21.3108V12.875C23.3125 7.50469 19.1861 3.08081 13.9375 2.60556V0.9375C13.9375 0.41975 13.5177 0 13 0C12.4823 0 12.0625 0.41975 12.0625 0.9375V2.60556C6.81394 3.08081 2.6875 7.50469 2.6875 12.875V21.3108L1.23 22.2825C0.969125 22.4564 0.8125 22.749 0.8125 23.0625V26.8125C0.8125 27.3302 1.23225 27.75 1.75 27.75H7.92969C8.36975 30.1642 10.4751 32 13 32C15.5249 32 17.6303 30.1642 18.0703 27.75H24.25C24.7677 27.75 25.1875 27.3302 25.1875 26.8125V23.0625C25.1875 22.749 25.0308 22.4563 24.77 22.2825ZM13 30.125C11.5132 30.125 10.2541 29.1213 9.85256 27.75H16.1475C15.7459 29.1213 14.4868 30.125 13 30.125ZM23.3125 25.875C22.4424 25.875 3.71163 25.875 2.6875 25.875V23.5642L4.145 22.5925C4.40581 22.4187 4.5625 22.1259 4.5625 21.8125V12.875C4.5625 8.22256 8.34756 4.4375 13 4.4375C17.6524 4.4375 21.4375 8.22256 21.4375 12.875V21.8125C21.4375 22.126 21.5942 22.4187 21.855 22.5925L23.3125 23.5642V25.875Z" fill="#9E9EA7"/>
      </svg>
    </button>
    <span class="header__account-link">
      <app-profile
      :user-id='userInfo.username'
      :customHref='"/user/" + userInfo.username'
      ></app-profile>
    </span>
  </div>
</template>

<script>
import AppInput from '@/components/App/AppInput.vue'
import AppProfile from '@/components/App/AppProfile.vue'
import AppNots from '@/components/App/AppNots.vue'
import AppTheme from '@/components/App/AppTheme.vue'
import HeaderBlockchains from '@/components/Header/HeaderBlockchains.vue'
import HeaderWallets from '@/components/Header/HeaderWallets.vue'

import axios from 'axios';
import { mapMutations, mapGetters } from 'vuex';

export default {
  data() {
    return {
      notifications: 1,
      openedNots: false,
      openedBlockchains: false,
      openedWallets: false,
      needToSearch: '',
      searched: [],
    }
  },
  computed: {
    ...mapGetters(['userInfo']),
  },
  methods: {
    ...mapMutations(['connectWallet']),
    removePopUpNots(){
      this.openedNots = false
    },
    togglePopUpNots() {
      this.notifications = 0
      this.openedBlockchains = false
      this.openedWallets = false
      this.openedNots = !this.openedNots
    },
    togglePopUpBlockchains(){
      this.openedNots = false
      this.openedWallets = false
      this.openedBlockchains = !this.openedBlockchains
    },
    togglePopUpWallets(){
      this.openedNots = false
      this.openedBlockchains = false
      this.openedWallets = !this.openedWallets
    },
    search(){
      console.log(this.needToSearch)
      axios.post('/getContent',{ sort: this.needToSearch })
        .then(response => ( this.searched = response ))
    },
  },
  components: {
    AppInput,
    AppProfile,
    AppNots,
    AppTheme,
    HeaderBlockchains,
    HeaderWallets,
  },
}
</script>