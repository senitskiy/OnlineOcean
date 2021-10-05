<template>
  <button
  v-if='!link'
  class='btn'
  :class='useStyle'
  >
    {{ title }}
  </button>

  <router-link
  v-else
  class='btn'
  :class='useStyle'
  :to='href'
  >
    {{ title }}
  </router-link>
</template>

<script>
export default {
  props:{
    title:{
      type: String,
      required: true,
    },
    link:{
      type: Boolean,
      default: false,
    },
    href:{
      type: String,
      default: '',
    },
    view:{
      type: String,
      default: 'pink',
    },
  },
  computed: {
    useStyle() {
      return 'btn--' + this.view
    }
  },
}
</script>