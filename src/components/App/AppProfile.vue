<template>
  <router-link class="profile"
  :to='customHref !== "" ? customHref : linkToProfile'
  :class='[viewProfileStyle, viewVerified]'
  >

    <span class="profile__imgwrapper"
    v-if="noavatar"
    >
      <img src="https://drive.google.com/uc?id=13bI25kgK1cX7EHr3pze_pX1PqwkHk04g" alt="" />
    </span>

    <span class="profile__imgwrapper"
    v-else-if="own"
    >
      <img :src="userInfo.logo.src !== '' ? userInfo.logo.src : 'https://drive.google.com/uc?id=13bI25kgK1cX7EHr3pze_pX1PqwkHk04g'" alt="" />
    </span>

    <span class="profile__imgwrapper"
    v-else
    >
      <img :src="user.logo.src === '' ? 'https://drive.google.com/uc?id=13bI25kgK1cX7EHr3pze_pX1PqwkHk04g' : user.logo.src" alt="" />
    </span>

    <span class="profile__name">
      {{ showName ? userName : userUsername }}
      <slot></slot>
      <span class="profile__slot"
      v-if='contentSlot.length !== 0'
      >
        {{ contentSlot }}
      </span>
    </span>
  </router-link>
</template>

<script>
import axios from 'axios'

import { mapGetters } from 'vuex';

export default {
  props: {
    userId:{
      type: [Number, String],
      required: true, 
    },
    view: {
      type: String,
      required: false,
    },
    contentSlot:{
      type: String,
      default: '',
    },
    customHref:{
      type: String,
      default: '',
    },
    showName:{
      type: Boolean,
      default: false,
    },
    customUsername:{
      type: String,
      default: '',
    },
    customName:{
      type: String,
      default: '',
    },
    noavatar:{
      type: Boolean,
      default: false,
    },
    own:{
      type: Boolean,
      default: false,
    }
  },
  mounted () {
    this.getUser()
  },
  data() {
    return {
      user:{
        username: 'artstudio',
        name: 'Artstudio__451',
        verified: true,
        logo:{
          src: require('@/assets/images/temp/user-ultra-big.jpg'),
        },
      }
    }
  },
  methods: {
    getUser() {
      axios.get('/user')
        .then(function (response) {
          this.user = response
        })
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ]),
    viewProfileStyle(){
      return 'profile--' + this.view
    },
    viewVerified(){
      return this.user.verified ? 'profile--verified' : ''
    },
    userUsername(){
      return this.customUsername.length > 1 ? this.customUsername : '@' + this.user.username
    },
    userName(){
      return this.customName.length > 1 ? this.customName : this.user.name
    },
    linkToProfile() {
      return '/user/' + this.user.username.replace(/@/i, '')
    }
  },
}
</script>