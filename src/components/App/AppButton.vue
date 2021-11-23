<template>
  <button
  v-if='!link'
  class='btn'
  :class='[useStyle, this.big ? "btn--big" : ""]'
  :type='btnType'
  >
    <slot></slot>
    {{ title }}
  </button>

  <router-link
  v-else
  class='btn'
  :class='[useStyle, this.big ? "btn--big" : ""]'
  :to='params === null ? href : {name: routeName, params: params}'
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
    params:{
      type: Object,
      default: null,
    },
    routeName:{
      type: String,
      default: ''
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
    },
    btnType: {
      type: String,
      default: 'button'
    },
  },
  computed: {
    useStyle() {
      return 'btn--' + this.view
    }
  },
}
</script>