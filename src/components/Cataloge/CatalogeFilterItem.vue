<template>
  <li class="filters__item"
  :class='[itemView, activeState]'
  @click="toggleItem()"
  >
    <button class="filters__item-head btn-clear">
      {{ title }}
      <img src="@/assets/images/arrow-down.svg" alt="">
    </button>
    <slot></slot>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    view:{
      type: String,
      default: '',
    }
  },
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    toggleItem() {
      this.isActive = !this.isActive
    }
  },
  computed: {
    itemView() {
      return 'filters__item--' + this.view 
    },
    activeState(){
      return this.isActive ? 'filters__item--active' : ''
    },
  },
}
</script>