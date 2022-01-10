<template>
  <div class="header__search-wrapper"
  :class="walletConnected ? 'header__search-wrapper--less' : ''"
  >
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
    ></app-button>
    <app-button
    title='Create'
    link
    href='/create'
    ></app-button>
    <!-- v-if='!userInfo.connected' -->
    <button class="header__wallets"
    :class="walletConnected ? 'header__wallets--less btn-clear' : 'btn btn--blue'"
    @click='togglePopUpWallets'
    >
      <span
      v-if="!walletConnected"
      >
        Connect wallet
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
      v-else
      >
        <path d="M22 7h1v10h-1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3zm-2 10h-6a5 5 0 0 1 0-10h6V5H4v14h16v-2zm1-2V9h-7a3 3 0 0 0 0 6h7zm-7-4h3v2h-3v-2z" fill="#5F5F5F"/>
      </svg>
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
    <button class="header__wallets header__wallets--less btn-clear"
    @click='togglePopUpWallets'
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M22 7h1v10h-1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3zm-2 10h-6a5 5 0 0 1 0-10h6V5H4v14h16v-2zm1-2V9h-7a3 3 0 0 0 0 6h7zm-7-4h3v2h-3v-2z" fill="#5F5F5F"/>
      </svg>
      <header-wallets
      :opened="openedWallets"
      ></header-wallets>
    </button>
    <app-theme></app-theme>
    <button class="header__blockchain btn-clear"
    :class='openedBlockchains !== false ? "header__blockchain--active" : ""'
    @click='togglePopUpBlockchains'
    >
      <header-blockchains
      :opened='openedBlockchains'
      ></header-blockchains>
      <div class="header__blockchain-preview">
        <div class="header__blockchain-icon">
          <img :src="currentBlockchain.image" alt="">
        </div>
        <svg class="header__blockchain-arrow" width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.70236 10.7129L17.7124 2.70265C17.8979 2.51738 18 2.27007 18 2.00636C18 1.74266 17.8979 1.49534 17.7124 1.31008L17.1227 0.720178C16.7384 0.336327 16.1138 0.336327 15.7301 0.720178L9.00373 7.44656L2.26988 0.712714C2.08447 0.527448 1.8373 0.425156 1.57374 0.425156C1.30989 0.425156 1.06272 0.527448 0.877163 0.712714L0.287558 1.30261C0.102144 1.48803 0 1.73519 0 1.9989C0 2.2626 0.102144 2.50992 0.287558 2.69519L8.30496 10.7129C8.49096 10.8986 8.73929 11.0006 9.00329 11C9.26831 11.0006 9.51651 10.8986 9.70236 10.7129Z" fill="#3E3E3E" fill-opacity="1"/>
        </svg>
      </div>
    </button>
    <button class="header__notifications btn-clear"
    :class='notifications !== 0 ? "header__notifications--active" : ""'
    @click='[clearNots(), togglePopUpNots()]'
    v-if='walletConnected && userLogged'
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
      :noavatar="!userLogged"
      :own="userLogged"
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
      needToSearch: '',
      searched: [],
    }
  },
  computed: {
    ...mapGetters([
      'userInfo',
      'currentBlockchain',
      'wallet',
      'walletConnected',
      'userLogged',
      'openedWallets',
      'openedBlockchains',
      'openedNots',
    ]),
  },
  methods: {
    ...mapMutations([
      'connectWallet',
      'togglePopUpWallets',
      'togglePopUpBlockchains',
      'togglePopUpNots',
    ]),
    clearNots() {
      this.notifications = 0
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