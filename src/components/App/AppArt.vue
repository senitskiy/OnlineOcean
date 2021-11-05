<template>
  <router-link class="art" :to='artLink'
  :class='[artSize, artRarity, artDate]'
  @mouseover='showChars()'
  @mouseleave="hideChars()"
  >
    <span class="art__imgwrapper">
      <img src="@/assets/images/temp/art-1.jpg" alt="">
      <span class="art__price">
        {{ art.price }}
      </span>
    </span>
    <span class="art__info">
      <app-profile
      v-if='!short'
      :contentSlot='art.descr'
      view='hasDescr'
      ></app-profile>
      <span class="art__descr"
      v-else
      >
        {{ art.descr }}
      </span>
    </span>
    <app-chars
    :chars='art.chars'
    ref='chars'
    :viewStyle='charsView'
    ></app-chars>
  </router-link>
</template>

<script>
import AppProfile from '@/components/App/AppProfile.vue';
import AppChars from '@/components/App/AppChars.vue';

import moment from 'moment'

export default {
  props: {
    artId: {
      type: Number,
      required: true, 
    },
    short:{
      type: Boolean,
      default: false,
    },
    hasSlot:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      charsView: false,
      art:{
        price: '20.034 ETH',
        descr: 'Abstract 3D Content Art fdfds ee rwerew',
        dateOfCreate: moment('2021-10-21T22:53:30'),
        todayDate: moment(),
        rarity: 'common', // common, epic, rare, legendary
        chars:{
          amount: '126',
          probability: '8%',
          rarityLabel: 'Legendary',
        },
      }
    }
  },
  methods: {
    showChars() {
      this.charsView = true
    },
    hideChars(){
      this.charsView = false
    },
  },
  computed: {
    artLink(){
      return '/art/' + this.artId
    },
    artSize(){
      return this.short ? 'art--short' : ''
    },
    artRarity(){
      return 'art--' + this.art.rarity
    },
    artDate(){
      let difference = this.art.todayDate.diff(this.art.dateOfCreate, 'days')
      console.log(difference)
      return difference <= 14 ? 'fire' : ''
    },
  },
  components: {
    AppProfile,
    AppChars,
  },
}
</script>