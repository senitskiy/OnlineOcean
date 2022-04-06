<template>
  <router-link class="profile"
  :to='customHref !== "" ? customHref : linkToProfile'
  :class='[viewProfileStyle, viewVerified]'
  >
    <span class="profile__imgwrapper"
    v-if="noavatar"
    >
      <svg width="118" height="118" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="58.9997" cy="58.9997" r="58.7097" fill="#EA4C89"/>
        <path d="M59.0006 30C49.3909 30 41.6006 39.7382 41.6006 51.75C41.6006 63.7618 49.3909 73.5 59.0006 73.5C68.6102 73.5 76.4006 63.7618 76.4006 51.75C76.4006 39.7382 68.6102 30 59.0006 30ZM59.0006 70.6C51.0053 70.6 44.5006 62.1436 44.5006 51.75C44.5006 41.3564 51.0053 32.9 59.0006 32.9C66.9959 32.9 73.5006 41.3564 73.5006 51.75C73.5006 62.1436 66.9959 70.6 59.0006 70.6Z" fill="white"/>
        <path d="M71.6662 70.9805C70.8881 71.7374 70.0597 72.4179 69.1944 73.0307C71.9571 74.3144 74.3805 75.3817 76.4502 76.2855C84.1303 79.637 85.0999 80.3001 85.0999 82.1996C85.0999 83.5133 83.8064 85.0996 82.1999 85.0996H35.8C34.1934 85.0996 32.9 83.5133 32.9 82.1996C32.9 80.3001 33.8696 79.637 41.5488 76.2855C43.6194 75.3817 46.0428 74.3146 48.8046 73.0307C47.9394 72.4179 47.111 71.7373 46.3328 70.9805C34.2591 76.506 30 77.2464 30 82.1996C30 85.0996 32.5965 87.9996 35.8 87.9996H82.2C85.4035 87.9996 88 85.0996 88 82.1996C88 77.2464 83.7409 76.506 71.6662 70.9805Z" fill="white"/>
      </svg>
    </span>

    <span class="profile__imgwrapper"
    v-else-if="own"
    >
      <svg width="118" height="118" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg"
      v-if="userInfo.logo.src === ''"
      >
        <circle cx="58.9997" cy="58.9997" r="58.7097" fill="#EA4C89"/>
        <path d="M59.0006 30C49.3909 30 41.6006 39.7382 41.6006 51.75C41.6006 63.7618 49.3909 73.5 59.0006 73.5C68.6102 73.5 76.4006 63.7618 76.4006 51.75C76.4006 39.7382 68.6102 30 59.0006 30ZM59.0006 70.6C51.0053 70.6 44.5006 62.1436 44.5006 51.75C44.5006 41.3564 51.0053 32.9 59.0006 32.9C66.9959 32.9 73.5006 41.3564 73.5006 51.75C73.5006 62.1436 66.9959 70.6 59.0006 70.6Z" fill="white"/>
        <path d="M71.6662 70.9805C70.8881 71.7374 70.0597 72.4179 69.1944 73.0307C71.9571 74.3144 74.3805 75.3817 76.4502 76.2855C84.1303 79.637 85.0999 80.3001 85.0999 82.1996C85.0999 83.5133 83.8064 85.0996 82.1999 85.0996H35.8C34.1934 85.0996 32.9 83.5133 32.9 82.1996C32.9 80.3001 33.8696 79.637 41.5488 76.2855C43.6194 75.3817 46.0428 74.3146 48.8046 73.0307C47.9394 72.4179 47.111 71.7373 46.3328 70.9805C34.2591 76.506 30 77.2464 30 82.1996C30 85.0996 32.5965 87.9996 35.8 87.9996H82.2C85.4035 87.9996 88 85.0996 88 82.1996C88 77.2464 83.7409 76.506 71.6662 70.9805Z" fill="white"/>
      </svg>
      <img :src="userInfo.logo.src" alt="" 
      v-else
      />
    </span>

    <span class="profile__imgwrapper"
    v-else
    >
      <svg width="118" height="118" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg"
      v-if="user.logo.src === ''"
      >
        <circle cx="58.9997" cy="58.9997" r="58.7097" fill="#EA4C89"/>
        <path d="M59.0006 30C49.3909 30 41.6006 39.7382 41.6006 51.75C41.6006 63.7618 49.3909 73.5 59.0006 73.5C68.6102 73.5 76.4006 63.7618 76.4006 51.75C76.4006 39.7382 68.6102 30 59.0006 30ZM59.0006 70.6C51.0053 70.6 44.5006 62.1436 44.5006 51.75C44.5006 41.3564 51.0053 32.9 59.0006 32.9C66.9959 32.9 73.5006 41.3564 73.5006 51.75C73.5006 62.1436 66.9959 70.6 59.0006 70.6Z" fill="white"/>
        <path d="M71.6662 70.9805C70.8881 71.7374 70.0597 72.4179 69.1944 73.0307C71.9571 74.3144 74.3805 75.3817 76.4502 76.2855C84.1303 79.637 85.0999 80.3001 85.0999 82.1996C85.0999 83.5133 83.8064 85.0996 82.1999 85.0996H35.8C34.1934 85.0996 32.9 83.5133 32.9 82.1996C32.9 80.3001 33.8696 79.637 41.5488 76.2855C43.6194 75.3817 46.0428 74.3146 48.8046 73.0307C47.9394 72.4179 47.111 71.7373 46.3328 70.9805C34.2591 76.506 30 77.2464 30 82.1996C30 85.0996 32.5965 87.9996 35.8 87.9996H82.2C85.4035 87.9996 88 85.0996 88 82.1996C88 77.2464 83.7409 76.506 71.6662 70.9805Z" fill="white"/>
      </svg>
      <img :src="user.logo.src" alt=""
      v-else
      />
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
// import axios from 'axios'

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
      // axios.get('/user')
      //   .then(function (response) {
      //     this.user = response
      //   })
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
      return ''//'/user/' + this.user.username.replace(/@/i, '')
    }
  },
}
</script>