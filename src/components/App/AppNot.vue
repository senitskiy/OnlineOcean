<template>
  <div class="nots__item"
  @click="goToNots()"
  >
    <app-profile
    userId='43'
    view='nots'
    showName
    @click.prevent
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
  methods: {
    goToNots() {
      this.$router.push({name: "User", params: {username: this.userInfo.username, needNots: true}})
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