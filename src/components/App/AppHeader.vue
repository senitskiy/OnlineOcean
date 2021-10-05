<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <app-logo></app-logo>
        <div class="header__search-wrapper">
          <input class="header__search-input input" type="text"
          placeholder="Search for art"
          >
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
          <button class="header__notifications btn-clear"
          :class='notifications !== 0 ? "header__notifications--active" : ""'
          >
            <img src="@/assets/images/notify.svg" alt="">
          </button>
          <router-link class="header__account-link"
          to='lk'
          >
            <img src="@/assets/images/temp/user.jpg" alt="">
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import AppLogo from '@/components/App/AppLogo.vue'

export default {
  data() {
    return {
      notifications: 1,
    }
  },
  components:{
    AppLogo
  }
}
</script>
