<template>
  <user-cover></user-cover>
  <div class="user-info">
    <div class="container">
      <h1 class="user-info__title">
        {{ info.title }}
      </h1>
      <h2 class="user-info__descr">
        {{ info.descr }}
      </h2>
    </div>
  </div>
  <user-loot></user-loot>
</template>

<script>
import UserCover from '@/components/User/UserCover.vue';
import UserLoot from '@/components/User/UserLoot.vue';

export default {
  data() {
    return {
      info:{
        title: 'My Account',
        descr: 'Manage your account, profile details and view your collections',
      }
    }
  },
  components: {
    UserCover,
    UserLoot,
  },
}
</script>