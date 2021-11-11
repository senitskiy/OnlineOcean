<template>
  <app-cover></app-cover>
  <index-live-tape></index-live-tape>
  <app-row
  v-for='row in rows'
  :key='row'
  ref='rowItem'
  ></app-row>
  <div class="index-load">
    <app-button
    title='Load more'
    view='linear'
    @click='loadMore()'
    ></app-button>
  </div>
</template>

<script>
import AppCover from '@/components/App/AppCover.vue'
import IndexLiveTape from '@/components/Index/IndexLiveTape.vue'

export default {
  name: 'Index',
  data() {
    return {
      rows: 3,
    }
  },
  methods: {
    loadMore(){
      this.rows++
      this.$refs.rowItem.setHeight()
    }
  },
  components: {
    AppCover,
    IndexLiveTape,
  }
}
</script>
