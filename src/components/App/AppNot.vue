<template>
  <div class="nots__item">
    <app-profile
    userId='43'
    view='nots'
    showName
    >
      <p class="nots__text">
        {{ getNoteMessage(this.notsMessage, item, this.userInfo.username) }}
      </p>
    </app-profile>
  </div>
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