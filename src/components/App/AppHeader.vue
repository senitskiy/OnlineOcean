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
    ref='menu'
    >
      <header-content></header-content>
      <app-profile
      :userId='22'
      ></app-profile>
      <header-blockchains></header-blockchains>
      <app-social></app-social>
    </menu>
  </header>
</template>

<script>
import AppLogo from '@/components/App/AppLogo.vue'
import AppSocial from '@/components/App/AppSocial.vue'
import AppProfile from '@/components/App/AppProfile.vue'
import HeaderContent from '@/components/Header/HeaderContent.vue';
import HeaderBlockchains from '@/components/Header/HeaderBlockchains.vue';
import { mapGetters } from 'vuex';

export default {
  methods: {
    toggleMenu(){
      let html = document.documentElement,
          body = document.body;

      html.classList.toggle('scroll-stoped')
      body.classList.toggle('scroll-stoped')

      this.$refs.menu.classList.toggle('header__menu--active')
    },
  },
  computed: {
    ...mapGetters(['userInfo']),
    connectedUser() {
      return this.userInfo.connected ? 'header--connected' : ''
    }
  },
  components:{
    AppLogo,
    AppSocial,
    AppProfile,
    HeaderContent,
    HeaderBlockchains,
  },
}
</script>
