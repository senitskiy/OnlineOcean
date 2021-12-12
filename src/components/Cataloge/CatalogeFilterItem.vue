<template>
  <li class="filters__item"
  :class='[itemView, activeState]'
  >
    <button class="filters__item-head btn-clear"
    @click="toggleItem()">
      {{ title }}
      <svg class="filters__item-arrow" width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.99274 7.79264L0.207681 2.00748C0.0737718 1.87368 0 1.69506 0 1.50461C0 1.31415 0.0737718 1.13554 0.207681 1.00173L0.633613 0.575697C0.911155 0.298471 1.36224 0.298471 1.63936 0.575697L6.4973 5.43364L11.3606 0.570306C11.4945 0.436503 11.6731 0.362625 11.8634 0.362625C12.054 0.362625 12.2325 0.436503 12.3665 0.570306L12.7923 0.996343C12.9262 1.13025 13 1.30876 13 1.49922C13 1.68967 12.9262 1.86829 12.7923 2.00209L7.00198 7.79264C6.86764 7.92677 6.68829 8.00043 6.49762 8.00001C6.30622 8.00043 6.12697 7.92677 5.99274 7.79264Z" fill="#6A6A6A"/>
      </svg>
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