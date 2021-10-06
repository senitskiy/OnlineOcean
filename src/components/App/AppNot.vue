<template>
  <router-link class="nots__item"
  to='/lk'
  >
    <span class="nots__imgwrapper"
    :class='accountState'
    >
      <img src="@/assets/images/temp/user-big-1.jpg" alt="">
    </span>
    <span class="nots__content">
      <p class="nots__name">
        {{ name }}
      </p>
      <p class="nots__text">
        {{ shortText }}
      </p>
    </span>
  </router-link>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    verified:{
      type: Boolean,
      default: false,
    }
  },
  computed: {
    shortText() {
      return this.text.substring(0, 60) + '...'
    },
    accountState(){
      return this.verified ? "nots__imgwrapper--verified" : ""
    }
  },
}
</script>