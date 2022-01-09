<template>
  <header class="header"
  @click='removePopUpNots'
  :class='connectedUser'
  >
    <div class="container">
      <div class="header__inner">
        <app-logo></app-logo>
        <header-content></header-content>
        <button class="header__menu-btn btn-clear"
        @click='toggleMenu()'
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
    <menu class="header__menu"
    :class='userLogged ? "" : "header__menu--user-unlogged"'
    ref='menu'
    >
      <header-content></header-content>
      <div class="header__menu-account"
      :class="walletConnected ? 'header__menu-account--wallet-connected' : ''"
      >
        <button class="header__wallets"
        :class="walletConnected ? 'header__wallets--less btn-clear' : 'btn btn--blue'"
        @click='togglePopUpWallets'
        v-if="walletConnected"
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
        <app-theme></app-theme>
        <app-profile
        :user-id='userInfo.username'
        :customHref='"/user/" + userInfo.username'
        :noavatar="!userLogged"
        ></app-profile>
      </div>
      <header-blockchains></header-blockchains>
      <app-social></app-social>
    </menu>
  </header>
</template>

<script>
import AppLogo from '@/components/App/AppLogo.vue'
import AppSocial from '@/components/App/AppSocial.vue'
import AppProfile from '@/components/App/AppProfile.vue'
import AppTheme from '@/components/App/AppTheme.vue'
import HeaderContent from '@/components/Header/HeaderContent.vue';
import HeaderBlockchains from '@/components/Header/HeaderBlockchains.vue';
import HeaderWallets from '@/components/Header/HeaderWallets.vue';

import { mapGetters, mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations([
      'connectWallet',
      'togglePopUpWallets',
    ]),
    toggleMenu(){
      let html = document.documentElement,
          body = document.body;

      html.classList.toggle('scroll-stoped')
      body.classList.toggle('scroll-stoped')

      this.$refs.menu.classList.toggle('header__menu--active')
    },
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
    connectedUser() {
      return this.userInfo.connected ? 'header--connected' : ''
    }
  },
  components:{
    AppLogo,
    AppSocial,
    AppProfile,
    AppTheme,
    HeaderContent,
    HeaderBlockchains,
    HeaderWallets,
  },
}
</script>
