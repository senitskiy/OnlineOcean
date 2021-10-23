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
      <app-social></app-social>
    </menu>
  </header>
</template>

<script>
import AppLogo from '@/components/App/AppLogo.vue'
import AppSocial from '@/components/App/AppSocial.vue'
import HeaderContent from '@/components/Header/HeaderContent.vue';

export default {
  methods: {
    toggleMenu(){
      this.$refs.menu.classList.toggle('header__menu--active')
    },
  },
  components:{
    AppLogo,
    AppSocial,
    HeaderContent,
  },
}
</script>
