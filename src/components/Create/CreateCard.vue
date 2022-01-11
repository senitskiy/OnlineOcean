<template>
  <router-link class="create__item" :to='createLink'>
    <span class="create__imgwrapper">
      <img :src="image" alt="">
    </span>
    <span class="create__item-title">
      {{ label }}
    </span>
  </router-link>
</template>

<script>
export default {
  props: {
    href:{
      type: String,
      required: true,
    },
    label:{
      type: String,
      required: true,
    },
    image:{
      required: true,
    },
  },
  computed: {
    createLink() {
      return '/create/' + this.href
    }
  },
}
</script>