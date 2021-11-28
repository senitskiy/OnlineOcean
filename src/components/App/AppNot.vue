<template>
  <router-link class="nots__item"
  to='/kek/'
  >
    <app-profile
    userId='43'
    view='nots'
    showName
    >
      <p class="nots__text">
        {{ getNoteMessage(this.notsMessage, item, this.userInfo.username) }}
      </p>
    </app-profile>
    <!-- <span class="nots__content">
      <p class="nots__name">
        {{ name }}
      </p>
      <p class="nots__text">
      </p>
    </span> -->
  </router-link>
</template>

<script>
import AppProfile from '@/components/App/AppProfile.vue';

import { mapGetters } from 'vuex'
import noteMessageMixin from '@/mixins/noteMessageMixin'

export default {
  props: {
    item:{
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(['notsMessage', 'userInfo'])
  },
  mixins:[
    noteMessageMixin,
  ],
  components: {
    AppProfile,
  },
}
</script>