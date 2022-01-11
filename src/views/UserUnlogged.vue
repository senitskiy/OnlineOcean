<template>
  <app-cover></app-cover>
  <user-connect></user-connect>
</template>

<script>
import AppCover from '@/components/App/AppCover.vue'
import UserConnect from '@/components/User/UserConnect.vue'

export default {
  title: 'User Unlogged',
  components: {
    AppCover,
    UserConnect,
  },
}
</script>