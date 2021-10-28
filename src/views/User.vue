<template>
  <user-cover></user-cover>
  <user-loot></user-loot>
</template>

<script>
import UserCover from '@/components/User/UserCover.vue';
import UserLoot from '@/components/User/UserLoot.vue';

export default {
  components: {
    UserCover,
    UserLoot,
  },
}
</script>