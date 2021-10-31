<template>
  <button
  v-if='!link'
  class='btn'
  :class='[useStyle, this.big ? "btn--big" : ""]'
  >
    <slot></slot>
    {{ title }}
  </button>

  <router-link
  v-else
  class='btn'
  :class='[useStyle, this.big ? "btn--big" : ""]'
  :to='href'
  >
    <slot></slot>
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
    big:{
      type: Boolean,
      default: false,
    },
    btnDisabled:{
      type: Boolean,
      default: false,
    }
  },
  computed: {
    useStyle() {
      return 'btn--' + this.view
    }
  },
}
</script>