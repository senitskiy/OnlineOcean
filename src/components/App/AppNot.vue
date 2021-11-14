<template>
  <router-link class="nots__item"
  to='/user/artstudio'
  >
    <app-profile
    userId='43'
    view='nots'
    ></app-profile>
    <span class="nots__content">
      <p class="nots__name">
        {{ name }}
      </p>
      <p class="nots__text">
        {{ text }}
      </p>
    </span>
  </router-link>
</template>

<script>
import AppProfile from '@/components/App/AppProfile.vue';

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
  },
  components: {
    AppProfile,
  },
}
</script>