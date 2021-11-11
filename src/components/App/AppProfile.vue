<template>
  <router-link class="profile"
  :to='linkToProfile'
  :class='[viewProfileStyle, viewVerified]'
  >
    <span class="profile__imgwrapper">
      <img src="@/assets/images/temp/user-ultra-big.jpg" alt="" />
    </span>
    <span class="profile__name">
      {{ userName }}
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

export default {
  props: {
    userId:{
      type: String,
      required: true, 
    },
    view: {
      type: String,
      required: false,
    },
    contentSlot:{
      type: String,
      default: '',
    }
  },
  mounted () {
    this.getUser()
  },
  data() {
    return {
      user:{
        name: 'artstudio',
        verified: true,
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
    viewProfileStyle(){
      return 'profile--' + this.view
    },
    viewVerified(){
      return this.user.verified ? 'profile--verified' : ''
    },
    userName(){
      return '@' + this.user.name
    },
    linkToProfile() {
      return '/user/' + this.user.name.replace(/@/i, '')
    }
  },
}
</script>