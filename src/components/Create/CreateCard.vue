<template>
  <router-link class="create__item" :to='createLink'>
    <span class="create__imgwrapper">
      <img src="@/assets/images/create-box.svg" alt="">
    </span>
    <span class="create__item-title">
      {{ card.name }}
    </span>
  </router-link>
</template>

<script>
export default {
  props: {
    createId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      card:{
        name: 'Random Box',
        link: 'box'
      }
    }
  },
  computed: {
    createLink() {
      return '/create/' + this.card.link
    }
  },
}
</script>