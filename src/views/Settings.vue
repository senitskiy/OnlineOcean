<template>
  <app-cover></app-cover>
  <user-settings></user-settings>
</template>

<script>
import AppCover from '@/components/App/AppCover.vue'
import UserSettings from '@/components/User/UserSettings.vue'

export default {
  title: 'Settings',
  components: {
    AppCover,
    UserSettings,
  },
}
</script>