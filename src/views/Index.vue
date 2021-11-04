<template>
  <app-cover></app-cover>
  <index-live-tape></index-live-tape>
  <app-row
  fire
  ></app-row>
  <app-row></app-row>
  <app-row></app-row>
  <app-button
  title='Load more'
  view='linear'
  ></app-button>
</template>

<script>
import AppCover from '@/components/App/AppCover.vue'
import IndexLiveTape from '@/components/Index/IndexLiveTape.vue'

export default {
  name: 'Index',
  components: {
    AppCover,
    IndexLiveTape,
  }
}
</script>
