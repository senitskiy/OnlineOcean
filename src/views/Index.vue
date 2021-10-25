<template>
  <index-cover></index-cover>
  <index-live-tape></index-live-tape>
  <app-row></app-row>
  <app-row></app-row>
  <app-row></app-row>
  <app-button
  title='Load more'
  view='linear'
  ></app-button>
</template>

<script>
import IndexCover from '@/components/Index/IndexCover.vue'
import IndexLiveTape from '@/components/Index/IndexLiveTape.vue'

export default {
  name: 'Index',
  components: {
    IndexCover,
    IndexLiveTape,
  }
}
</script>
