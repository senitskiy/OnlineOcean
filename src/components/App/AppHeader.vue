<template>
  <header class="header"
  @click='removePopUpNots'
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
    </menu>
  </header>
</template>

<script>
import AppLogo from '@/components/App/AppLogo.vue'
import HeaderContent from '@/components/Header/HeaderContent.vue';

export default {
  data() {
    return {
      notifications: 1,
      openedNots: false,
    }
  },
  methods: {
    removePopUpNots(){
      this.openedNots = false
    },
    togglePopUpNots() {
      this.openedNots = !this.openedNots
    },
    toggleMenu(){

    },
  },
  components:{
    AppLogo,
    HeaderContent,
  },
}
</script>
