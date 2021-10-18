<template>
  <div class="cataloge__rows"
  :class='countOfCols'
  >
    <app-art></app-art>
    <app-art></app-art>
    <app-art></app-art>
    <app-art></app-art>
    <app-art></app-art>
    <app-art></app-art>
    <app-art></app-art>
    <app-art></app-art>
    <app-art></app-art>
    <app-art></app-art>
  </div>
</template>

<script>
import AppArt from '@/components/App/AppArt.vue';

export default {
  props: {
    showMoreCols: {
      type: Boolean,
      required: true, 
    },
  },
  computed: {
    countOfCols(){
      return this.showMoreCols ? 'cataloge__rows--more' : ''
    }
  },
  components: {
    AppArt,
  },
}
</script>