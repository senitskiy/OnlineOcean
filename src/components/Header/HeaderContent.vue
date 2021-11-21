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
    title='Create'
    link
    href='/create'
    ></app-button>
    <app-button
    v-if='!userInfo.connected'
    title='Connect wallet'
    view='blue'
    @click='this.connectWallet()'
    ></app-button>
  </div>
  <div class="header__account">
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
    >
      <app-nots
      :openedNots='openedNots'
      ></app-nots>
      <img src="@/assets/images/notify.svg" alt="">
    </button>
    <span class="header__account-link">
      <app-profile
      :userID='userInfo.username'
      :customHref='"/user/" + userInfo.username'
      ></app-profile>
    </span>
  </div>
</template>

<script>
import AppInput from '@/components/App/AppInput.vue'
import AppProfile from '@/components/App/AppProfile.vue'
import AppNots from '@/components/App/AppNots.vue'
import HeaderBlockchains from '@/components/Header/HeaderBlockchains.vue'

import axios from 'axios';
import { mapMutations, mapGetters } from 'vuex';

export default {
  data() {
    return {
      notifications: 1,
      openedNots: false,
      openedBlockchains: false,
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
      this.openedBlockchains = false
      this.openedNots = !this.openedNots
    },
    togglePopUpBlockchains(){
      this.openedNots = false
      this.openedBlockchains = !this.openedBlockchains
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
    HeaderBlockchains,
  },
}
</script>