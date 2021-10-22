<template>
  <li class="filters__item">
    <button class="filters__item-head btn-clear">
      Art or Games
      <img src="@/assets/images/arrow-down.svg" alt="">
    </button>
    <div class="filters__item-body">
      <slot></slot>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>