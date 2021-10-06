<template>
  <header class="header"
  @click='removePopUpNots'
  >
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
          @click.stop='togglePopUpNots'
          >
            <app-nots
            :openedNots='openedNots'
            ></app-nots>
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
import AppNots from '@/components/App/AppNots.vue'

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
  },
  components:{
    AppLogo,
    AppNots
  },
}
</script>
