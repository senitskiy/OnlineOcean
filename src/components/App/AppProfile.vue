<template>
  <router-link class="profile"
  :to='linkToProfile'
  :class='[viewProfileStyle, viewVerified]'
  >
    <span class="profile__imgwrapper">
      <img src="@/assets/images/temp/user-ultra-big.jpg" alt="" />
    </span>
    <span class="profile__name">
      {{ user.name }}
    </span>
  </router-link>
</template>

<script>
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
  },
  data() {
    return {
      user:{
        name: '@artstudio',
        verified: true,
      }
    }
  },
  computed: {
    viewProfileStyle(){
      return 'profile--' + this.view
    },
    viewVerified(){
      return this.user.verified ? 'profile--verified' : ''
    },
    linkToProfile() {
      return '/user/' + this.user.name.replace(/@/i, '')
    }
  },
}
</script>