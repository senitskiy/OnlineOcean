<template>
  <div class="nots"
  :class='notsState'
  @click.stop
  >
    <p class="nots__title">
      Notifications
    </p>
    <app-not
    v-for='item in this.nots.slice(0, 3)'
    :key='item.id'
    :item='item'
    ></app-not>
    <app-button
    title='More...'
    link
    :custom='{name: "User", params: {username: userInfo.username, needNots: true}}'
    ></app-button>
  </div>
  <div class="nots__pad"></div>
</template>

<script>
import AppNot from '@/components/App/AppNot.vue'

import { mapGetters } from 'vuex'

export default {
  props: {
    openedNots: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters(['userInfo']),
    ...mapGetters(['nots']),
    notsState() {
      return this.openedNots ? 'nots--active' : ''
    },
  },
  components: {
    AppNot,
  },
}
</script>