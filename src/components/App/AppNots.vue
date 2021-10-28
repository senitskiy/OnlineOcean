<template>
  <div class="nots"
  :class='notsState'
  >
    <p class="nots__title">
      Notifications
    </p>
    <app-not
    name='Janny Muller'
    text='Comment: I really like this product. I would like to buy another good in this nft shop'
    verified
    ></app-not>
    <app-not
    name='Mary Jane'
    text='Comment: It is a text that i wrote for test my code. If it have bugs i will fix it'
    verified
    ></app-not>
    <app-not
    name='Sam Jonson'
    text='Comment: This sting contains a heavy-big-mega-words for one more test'
    verified
    ></app-not>
    <app-button
    title='More...'
    link
    href='/user/artstudio'
    ></app-button>
  </div>
  <div class="nots__pad"></div>
</template>

<script>
import AppNot from '@/components/App/AppNot.vue'

export default {
  props: {
    openedNots: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    notsState() {
      return this.openedNots ? 'nots--active' : ''
    },
  },
  components: {
    AppNot,
  },
  // watch: {
  //   data(newValue, oldValue) {
      
  //   }
  // },
}
</script>